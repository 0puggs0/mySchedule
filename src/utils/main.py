import json
import re
from functools import partial
from time import sleep
from concurrent.futures import ThreadPoolExecutor
import requests
from bs4 import BeautifulSoup


def get_soup(url: str) -> BeautifulSoup:
    head = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'}
    response = requests.get(url, headers=head)
    return BeautifulSoup(response.text, 'html.parser')


def parsing_groups(last_two_tables, exclude) -> list:
    all_text = []
    for table in last_two_tables:
        for row in table.select('table > tr'):
            text = row.get_text().strip()
            temp = row.find('a')
            if temp:
                href = temp.get('href', None)
            if text:
                if not (any(word in text for word in exclude)):
                    all_text.append((text, href))
    all_text = [(name_group[0].replace('(з/о)', ''), name_group[1].split('obj=')[1]) for name_group in all_text]
    all_text = list(set(all_text))
    return all_text


def get_data_one_class(number_sessions, start_session, end_session, discipline, teacher, address, cabinet):
    return {'numOfPair': number_sessions,
            'timeStart': start_session,
            'timeEnd': end_session, 'predmet': discipline,
            'professor': teacher, 'adress': address,
            'auditory': cabinet}


def get_url(number_group: str) -> list:
    base_url = 'https://lk.ks.psuti.ru/?mn=2&obj='
    min_week = 244
    max_week = 247
    str_week = '&wk='
    all_url_group = []
    for i in range(min_week, max_week + 1):
        all_url_group.append(base_url + number_group + str_week + str(i))
    return all_url_group


def get_name_groups() -> list:
    url_groups = 'https://lk.ks.psuti.ru/?mn=2'
    soup = get_soup(url_groups)
    tables = soup.select('body > table')
    last_two_tables = tables[-2:]
    exclude = ['отделение', 'группу', 'курс', '\n']
    all_groups = parsing_groups(last_two_tables, exclude)
    return all_groups


def get_date_and_week(tr_text, group):
    pattern_data_and_week = r"(\d{2}.\d{2}.\d{4}) / (\d+) неделя"
    match = re.search(pattern_data_and_week, tr_text)
    if match:
        date = match.group(1)
        week_number = match.group(2)
        return {'key': date, 'group': group, 'week': week_number}


def set_table_header(child, columns_sessions):
    for i, td in enumerate(child.find_all('td')):
        td_text = td.get_text()
        if td_text in columns_sessions:
            columns_sessions[td_text] = i
    return columns_sessions


def get_data_page(tds):
    if 'Свободное время' in str(tds):
        return None

    number_sessions = tds[0].get_text()

    time_pattern = r"\b\d{2}:\d{2}"
    time_sessions_text = tds[1].get_text()
    time_sessions = re.findall(time_pattern, time_sessions_text)
    start_session = ''
    end_session = ''
    if len(time_sessions) > 0:
        start_session = time_sessions[0]
    if len(time_sessions) > 1:
        end_session = time_sessions[1]


    discipline_and_teacher = tds[3].stripped_strings
    content_list = list(discipline_and_teacher)
    if 'Замена' in content_list:
        for index, item in enumerate(content_list):
            if 'на:' in item:
                content_list = content_list[index + 1:]
                break
    discipline = ''
    teacher = ''
    address = ''
    cabinet = ''

    # Проверяем и присваиваем значения, если элемент существует
    if len(content_list) > 0:
        discipline = content_list[0]

    if len(content_list) > 1:
        teacher = content_list[1]

    if len(content_list) > 2:
        address = content_list[2]

    if len(content_list) > 3:
        cabinet = content_list[3].replace('Кабинет: ', '')

    return number_sessions, start_session, end_session, discipline, teacher, address, cabinet


def get_all_data(url, name_group) -> list:
    print(url)
    soup = get_soup(url)
    all_tables = soup.select('body > table')
    table_schedule = all_tables[2]

    all_data = []
    dict_all_data_page = {}
    list_class_in_day = []

    sessions_found = False
    find_week_day = False
    columns_sessions = {'№ пары': -1, 'Время занятий': -1, 'Дисциплина, преподаватель': -1}
    weekday = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']

    for child in table_schedule.children:
        if child == '\n':
            continue
        tr_text = child.get_text()
        if any(day in tr_text for day in weekday):
            if len(list_class_in_day) != 0:
                dict_all_data_page['schedule'] = list_class_in_day
                all_data.append(dict_all_data_page)
            dict_all_data_page = get_date_and_week(tr_text, name_group)
            list_class_in_day = []

            find_week_day = True
            sessions_found = False
            continue

        if find_week_day:
            columns_sessions = set_table_header(child, columns_sessions)
            find_week_day = False
            sessions_found = True
            continue

        if sessions_found:
            tds = child.find_all('td')
            if len(tds) == 1:
                sessions_found = False
                continue

            data = get_data_page(tds)
            if data is not None:
                data_of_class = get_data_one_class(*data)
                list_class_in_day.append(data_of_class)
    sleep(1)
    if list_class_in_day:
        dict_all_data_page['schedule'] = list_class_in_day
        all_data.append(dict_all_data_page)
    return all_data

# def task_wrapper(name_groups, url):
#     return get_all_data(url, name_groups)

all_groups = get_name_groups()
print(len(all_groups))
print(all_groups)
all_data = []

url_info = 'https://lk.ks.psuti.ru/?mn=2&obj=153&wk=199'

for i, group in enumerate(all_groups):
    urls = get_url(group[1])
    name_groups = group[0]
    hm = [name_groups for _ in range(len(urls))]
    with ThreadPoolExecutor(max_workers=7) as executor:
       # result = executor.map(task_wrapper, urls)
        result = executor.map(get_all_data, urls, hm)

    result = list(result)
    all_data = []
    for _res in result:
        all_data += _res

    with open(f'{name_groups}.json', 'w', encoding='utf-8') as f:
        json.dump(all_data, f, ensure_ascii=False)
    print('Данные записаны', i)


# min_week = 139
# max_week = 286

# for group in all_groups:
#     second_json = []
#     for i in range(min_week, max_week + 1):
#         second_json.append({'week': i, 'key': group[1]})

#     with open(f'{group[0]}-group.json', 'w', encoding='utf-8') as f:
#         json.dump(second_json, f, ensure_ascii=False, indent=4)

