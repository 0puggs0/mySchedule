import isEqual from 'lodash/isEqual';

const schedule1 = [
    {
      "key": "01.09.2022",
      "group": "ССА-7",
      "week": "1",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "Классный час",
          "timeStart": "10:00",
          "timeEnd": "",
          "predmet": "Классный час",
          "professor": "Швырина Ольга Николаевна",
          "adress": "",
          "auditory": ""
        }
      ]
    },
    {
      "key": "02.09.2022",
      "group": "ССА-7",
      "week": "1",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "327"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "03.09.2022",
      "group": "ССА-7",
      "week": "1",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Иностранный язык",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "234"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        }
      ]
    },
    {
      "key": "05.09.2022",
      "group": "ССА-7",
      "week": "1",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "06.09.2022",
      "group": "ССА-7",
      "week": "1",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Русский язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "327"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "07.09.2022",
      "group": "ССА-7",
      "week": "1",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "08.09.2022",
      "group": "ССА-7",
      "week": "2",
      "schedule": [
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "09.09.2022",
      "group": "ССА-7",
      "week": "2",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "327"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "10.09.2022",
      "group": "ССА-7",
      "week": "2",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Иностранный язык",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "234"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Астрономия",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        }
      ]
    },
    {
      "key": "12.09.2022",
      "group": "ССА-7",
      "week": "2",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Иностранный язык",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "422"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "13.09.2022",
      "group": "ССА-7",
      "week": "2",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Родной язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "327"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "327"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "14.09.2022",
      "group": "ССА-7",
      "week": "2",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        }
      ]
    },
    {
      "key": "15.09.2022",
      "group": "ССА-7",
      "week": "3",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "16.09.2022",
      "group": "ССА-7",
      "week": "3",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "327"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "17.09.2022",
      "group": "ССА-7",
      "week": "3",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Иностранный язык",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "234"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        }
      ]
    },
    {
      "key": "19.09.2022",
      "group": "ССА-7",
      "week": "3",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "20.09.2022",
      "group": "ССА-7",
      "week": "3",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Русский язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "327"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "21.09.2022",
      "group": "ССА-7",
      "week": "3",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "22.09.2022",
      "group": "ССА-7",
      "week": "4",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "",
          "auditory": ""
        }
      ]
    },
    {
      "key": "23.09.2022",
      "group": "ССА-7",
      "week": "4",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "327"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "24.09.2022",
      "group": "ССА-7",
      "week": "4",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Иностранный язык",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "234"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Астрономия",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        }
      ]
    },
    {
      "key": "26.09.2022",
      "group": "ССА-7",
      "week": "4",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Иностранный язык",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "",
          "auditory": ""
        }
      ]
    },
    {
      "key": "27.09.2022",
      "group": "ССА-7",
      "week": "4",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Родной язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "327"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "327"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "28.09.2022",
      "group": "ССА-7",
      "week": "4",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "29.09.2022",
      "group": "ССА-7",
      "week": "5",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "",
          "auditory": ""
        }
      ]
    },
    {
      "key": "30.09.2022",
      "group": "ССА-7",
      "week": "5",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "327"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "Классный час",
          "timeStart": "08:30",
          "timeEnd": "",
          "predmet": "Классный час",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "01.10.2022",
      "group": "ССА-7",
      "week": "5",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Иностранный язык",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "234"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        }
      ]
    },
    {
      "key": "03.10.2022",
      "group": "ССА-7",
      "week": "5",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "",
          "auditory": ""
        }
      ]
    },
    {
      "key": "04.10.2022",
      "group": "ССА-7",
      "week": "5",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Русский язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "327"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "05.10.2022",
      "group": "ССА-7",
      "week": "5",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:20",
          "timeEnd": "10:30",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "10:40",
          "timeEnd": "11:50",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "4",
          "timeStart": "12:00",
          "timeEnd": "13:10",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "5",
          "timeStart": "13:20",
          "timeEnd": "14:30",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "06.10.2022",
      "group": "ССА-7",
      "week": "6",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "07.10.2022",
      "group": "ССА-7",
      "week": "6",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "327"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "08.10.2022",
      "group": "ССА-7",
      "week": "6",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Иностранный язык",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "234"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Астрономия",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        }
      ]
    },
    {
      "key": "10.10.2022",
      "group": "ССА-7",
      "week": "6",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Иностранный язык",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "422"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "11.10.2022",
      "group": "ССА-7",
      "week": "6",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Родной язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "12.10.2022",
      "group": "ССА-7",
      "week": "6",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "13.10.2022",
      "group": "ССА-7",
      "week": "7",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "14.10.2022",
      "group": "ССА-7",
      "week": "7",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "Классный час",
          "timeStart": "08:30",
          "timeEnd": "",
          "predmet": "Классный час",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "15.10.2022",
      "group": "ССА-7",
      "week": "7",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Иностранный язык",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "234"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        }
      ]
    },
    {
      "key": "17.10.2022",
      "group": "ССА-7",
      "week": "7",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "18.10.2022",
      "group": "ССА-7",
      "week": "7",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Русский язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "19.10.2022",
      "group": "ССА-7",
      "week": "7",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "20.10.2022",
      "group": "ССА-7",
      "week": "8",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "21.10.2022",
      "group": "ССА-7",
      "week": "8",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "22.10.2022",
      "group": "ССА-7",
      "week": "8",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Иностранный язык",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "234"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Астрономия",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        }
      ]
    },
    {
      "key": "24.10.2022",
      "group": "ССА-7",
      "week": "8",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Иностранный язык",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "422"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "25.10.2022",
      "group": "ССА-7",
      "week": "8",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Родной язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "26.10.2022",
      "group": "ССА-7",
      "week": "8",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "27.10.2022",
      "group": "ССА-7",
      "week": "9",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "28.10.2022",
      "group": "ССА-7",
      "week": "9",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "Классный час",
          "timeStart": "08:30",
          "timeEnd": "",
          "predmet": "Классный час",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "29.10.2022",
      "group": "ССА-7",
      "week": "9",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Иностранный язык",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "234"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        }
      ]
    },
    {
      "key": "31.10.2022",
      "group": "ССА-7",
      "week": "9",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "01.11.2022",
      "group": "ССА-7",
      "week": "9",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Русский язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Иностранный язык",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "210"
        }
      ]
    },
    {
      "key": "02.11.2022",
      "group": "ССА-7",
      "week": "9",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "03.11.2022",
      "group": "ССА-7",
      "week": "10",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "10:40",
          "timeEnd": "11:50",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "4",
          "timeStart": "12:00",
          "timeEnd": "13:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "5",
          "timeStart": "13:20",
          "timeEnd": "14:30",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "07.11.2022",
      "group": "ССА-7",
      "week": "10",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Иностранный язык",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "422"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "08.11.2022",
      "group": "ССА-7",
      "week": "10",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Родной язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Астрономия",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        }
      ]
    },
    {
      "key": "09.11.2022",
      "group": "ССА-7",
      "week": "10",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "10.11.2022",
      "group": "ССА-7",
      "week": "11",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "11.11.2022",
      "group": "ССА-7",
      "week": "11",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "12.11.2022",
      "group": "ССА-7",
      "week": "11",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Иностранный язык",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "234"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        }
      ]
    },
    {
      "key": "14.11.2022",
      "group": "ССА-7",
      "week": "11",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "15.11.2022",
      "group": "ССА-7",
      "week": "11",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Русский язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "16.11.2022",
      "group": "ССА-7",
      "week": "11",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "431"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "431"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "17.11.2022",
      "group": "ССА-7",
      "week": "12",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "18.11.2022",
      "group": "ССА-7",
      "week": "12",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "19.11.2022",
      "group": "ССА-7",
      "week": "12",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Иностранный язык",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "234"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Астрономия",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        }
      ]
    },
    {
      "key": "21.11.2022",
      "group": "ССА-7",
      "week": "12",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Иностранный язык",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "422"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "22.11.2022",
      "group": "ССА-7",
      "week": "12",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Родной язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "23.11.2022",
      "group": "ССА-7",
      "week": "12",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "110"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "24.11.2022",
      "group": "ССА-7",
      "week": "13",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "25.11.2022",
      "group": "ССА-7",
      "week": "13",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "26.11.2022",
      "group": "ССА-7",
      "week": "13",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Иностранный язык",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "234"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        }
      ]
    },
    {
      "key": "28.11.2022",
      "group": "ССА-7",
      "week": "13",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "29.11.2022",
      "group": "ССА-7",
      "week": "13",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Русский язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        }
      ]
    },
    {
      "key": "30.11.2022",
      "group": "ССА-7",
      "week": "13",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "01.12.2022",
      "group": "ССА-7",
      "week": "14",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "02.12.2022",
      "group": "ССА-7",
      "week": "14",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "03.12.2022",
      "group": "ССА-7",
      "week": "14",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Иностранный язык",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "234"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Астрономия",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        }
      ]
    },
    {
      "key": "05.12.2022",
      "group": "ССА-7",
      "week": "14",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Иностранный язык",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "422"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "06.12.2022",
      "group": "ССА-7",
      "week": "14",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Родной язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "07.12.2022",
      "group": "ССА-7",
      "week": "14",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "08.12.2022",
      "group": "ССА-7",
      "week": "15",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "09.12.2022",
      "group": "ССА-7",
      "week": "15",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "10.12.2022",
      "group": "ССА-7",
      "week": "15",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Иностранный язык",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "234"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        }
      ]
    },
    {
      "key": "12.12.2022",
      "group": "ССА-7",
      "week": "15",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "13.12.2022",
      "group": "ССА-7",
      "week": "15",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Русский язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "14.12.2022",
      "group": "ССА-7",
      "week": "15",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "15.12.2022",
      "group": "ССА-7",
      "week": "16",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "16.12.2022",
      "group": "ССА-7",
      "week": "16",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "17.12.2022",
      "group": "ССА-7",
      "week": "16",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Иностранный язык",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "234"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Астрономия",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        }
      ]
    },
    {
      "key": "19.12.2022",
      "group": "ССА-7",
      "week": "16",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Иностранный язык",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "422"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "20.12.2022",
      "group": "ССА-7",
      "week": "16",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Родной язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "21.12.2022",
      "group": "ССА-7",
      "week": "16",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "313"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "22.12.2022",
      "group": "ССА-7",
      "week": "17",
      "schedule": [
        {
          "numOfPair": "Консультация",
          "timeStart": "09:00",
          "timeEnd": "",
          "predmet": "Русский язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "23.12.2022",
      "group": "ССА-7",
      "week": "17",
      "schedule": [
        {
          "numOfPair": "Экзамен",
          "timeStart": "09:00",
          "timeEnd": "",
          "predmet": "Русский язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "24.12.2022",
      "group": "ССА-7",
      "week": "17",
      "schedule": [
        {
          "numOfPair": "Консультация",
          "timeStart": "09:00",
          "timeEnd": "",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "26.12.2022",
      "group": "ССА-7",
      "week": "17",
      "schedule": [
        {
          "numOfPair": "Экзамен",
          "timeStart": "09:00",
          "timeEnd": "",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "28.12.2022",
      "group": "ССА-7",
      "week": "17",
      "schedule": [
        {
          "numOfPair": "Консультация",
          "timeStart": "09:00",
          "timeEnd": "",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        }
      ]
    },
    {
      "key": "29.12.2022",
      "group": "ССА-7",
      "week": "18",
      "schedule": [
        {
          "numOfPair": "Экзамен",
          "timeStart": "09:00",
          "timeEnd": "",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        }
      ]
    },
    {
      "key": "16.01.2023",
      "group": "ССА-7",
      "week": "1",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "17.01.2023",
      "group": "ССА-7",
      "week": "1",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "18.01.2023",
      "group": "ССА-7",
      "week": "1",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Русский язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "19.01.2023",
      "group": "ССА-7",
      "week": "2",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "20.01.2023",
      "group": "ССА-7",
      "week": "2",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "213"
        }
      ]
    },
    {
      "key": "21.01.2023",
      "group": "ССА-7",
      "week": "2",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Основы предпринимательской деятельности",
          "professor": "Шамбер Лола Низамовна",
          "adress": "Московское шоссе, 120",
          "auditory": "432"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Основы предпринимательской деятельности",
          "professor": "Шамбер Лола Низамовна",
          "adress": "Московское шоссе, 120",
          "auditory": "432"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        }
      ]
    },
    {
      "key": "23.01.2023",
      "group": "ССА-7",
      "week": "2",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "24.01.2023",
      "group": "ССА-7",
      "week": "2",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "25.01.2023",
      "group": "ССА-7",
      "week": "2",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:10",
          "predmet": "Родной язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:20",
          "timeEnd": "10:30",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "10:40",
          "timeEnd": "11:50",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "26.01.2023",
      "group": "ССА-7",
      "week": "3",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "27.01.2023",
      "group": "ССА-7",
      "week": "3",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Астрономия",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "213"
        }
      ]
    },
    {
      "key": "28.01.2023",
      "group": "ССА-7",
      "week": "3",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Основы предпринимательской деятельности",
          "professor": "Шамбер Лола Низамовна",
          "adress": "Московское шоссе, 120",
          "auditory": "432"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "30.01.2023",
      "group": "ССА-7",
      "week": "3",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "31.01.2023",
      "group": "ССА-7",
      "week": "3",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "01.02.2023",
      "group": "ССА-7",
      "week": "3",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Русский язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "02.02.2023",
      "group": "ССА-7",
      "week": "4",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "03.02.2023",
      "group": "ССА-7",
      "week": "4",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "213"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "04.02.2023",
      "group": "ССА-7",
      "week": "4",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Основы предпринимательской деятельности",
          "professor": "Шамбер Лола Низамовна",
          "adress": "Московское шоссе, 120",
          "auditory": "432"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        }
      ]
    },
    {
      "key": "06.02.2023",
      "group": "ССА-7",
      "week": "4",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "07.02.2023",
      "group": "ССА-7",
      "week": "4",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "08.02.2023",
      "group": "ССА-7",
      "week": "4",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Родной язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "09.02.2023",
      "group": "ССА-7",
      "week": "5",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "10.02.2023",
      "group": "ССА-7",
      "week": "5",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Астрономия",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "",
          "auditory": ""
        }
      ]
    },
    {
      "key": "11.02.2023",
      "group": "ССА-7",
      "week": "5",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Основы предпринимательской деятельности",
          "professor": "Шамбер Лола Низамовна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "",
          "auditory": ""
        }
      ]
    },
    {
      "key": "13.02.2023",
      "group": "ССА-7",
      "week": "5",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "14.02.2023",
      "group": "ССА-7",
      "week": "5",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "321"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "15.02.2023",
      "group": "ССА-7",
      "week": "5",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Русский язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "16.02.2023",
      "group": "ССА-7",
      "week": "6",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "17.02.2023",
      "group": "ССА-7",
      "week": "6",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "213"
        }
      ]
    },
    {
      "key": "18.02.2023",
      "group": "ССА-7",
      "week": "6",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Основы предпринимательской деятельности",
          "professor": "Шамбер Лола Низамовна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "",
          "auditory": ""
        }
      ]
    },
    {
      "key": "20.02.2023",
      "group": "ССА-7",
      "week": "6",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "21.02.2023",
      "group": "ССА-7",
      "week": "6",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "403"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "22.02.2023",
      "group": "ССА-7",
      "week": "6",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:10",
          "predmet": "Родной язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:20",
          "timeEnd": "10:30",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "10:40",
          "timeEnd": "11:50",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "25.02.2023",
      "group": "ССА-7",
      "week": "7",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Астрономия",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "",
          "auditory": ""
        }
      ]
    },
    {
      "key": "27.02.2023",
      "group": "ССА-7",
      "week": "7",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "28.02.2023",
      "group": "ССА-7",
      "week": "7",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "01.03.2023",
      "group": "ССА-7",
      "week": "7",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Русский язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "02.03.2023",
      "group": "ССА-7",
      "week": "8",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        }
      ]
    },
    {
      "key": "03.03.2023",
      "group": "ССА-7",
      "week": "8",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "213"
        }
      ]
    },
    {
      "key": "04.03.2023",
      "group": "ССА-7",
      "week": "8",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Родной язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Основы предпринимательской деятельности",
          "professor": "Шамбер Лола Низамовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        }
      ]
    },
    {
      "key": "06.03.2023",
      "group": "ССА-7",
      "week": "8",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "07.03.2023",
      "group": "ССА-7",
      "week": "8",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:20",
          "timeEnd": "10:30",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "10:40",
          "timeEnd": "11:50",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        },
        {
          "numOfPair": "4",
          "timeStart": "12:00",
          "timeEnd": "13:10",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "09.03.2023",
      "group": "ССА-7",
      "week": "9",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "10.03.2023",
      "group": "ССА-7",
      "week": "9",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Астрономия",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        }
      ]
    },
    {
      "key": "11.03.2023",
      "group": "ССА-7",
      "week": "9",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Основы предпринимательской деятельности",
          "professor": "Шамбер Лола Низамовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        }
      ]
    },
    {
      "key": "13.03.2023",
      "group": "ССА-7",
      "week": "9",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "14.03.2023",
      "group": "ССА-7",
      "week": "9",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "15.03.2023",
      "group": "ССА-7",
      "week": "9",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Русский язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "16.03.2023",
      "group": "ССА-7",
      "week": "10",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "17.03.2023",
      "group": "ССА-7",
      "week": "10",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "213"
        }
      ]
    },
    {
      "key": "18.03.2023",
      "group": "ССА-7",
      "week": "10",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Основы предпринимательской деятельности",
          "professor": "Шамбер Лола Низамовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        }
      ]
    },
    {
      "key": "20.03.2023",
      "group": "ССА-7",
      "week": "10",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "21.03.2023",
      "group": "ССА-7",
      "week": "10",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "22.03.2023",
      "group": "ССА-7",
      "week": "10",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Родной язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "23.03.2023",
      "group": "ССА-7",
      "week": "11",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "24.03.2023",
      "group": "ССА-7",
      "week": "11",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Астрономия",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "213"
        }
      ]
    },
    {
      "key": "25.03.2023",
      "group": "ССА-7",
      "week": "11",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Основы предпринимательской деятельности",
          "professor": "Шамбер Лола Низамовна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "",
          "auditory": ""
        }
      ]
    },
    {
      "key": "27.03.2023",
      "group": "ССА-7",
      "week": "11",
      "schedule": [
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "28.03.2023",
      "group": "ССА-7",
      "week": "11",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "29.03.2023",
      "group": "ССА-7",
      "week": "11",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Русский язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "30.03.2023",
      "group": "ССА-7",
      "week": "12",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "31.03.2023",
      "group": "ССА-7",
      "week": "12",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "213"
        }
      ]
    },
    {
      "key": "01.04.2023",
      "group": "ССА-7",
      "week": "12",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        },
        {
          "numOfPair": "5",
          "timeStart": "14:50",
          "timeEnd": "16:20",
          "predmet": "Основы предпринимательской деятельности",
          "professor": "Шамбер Лола Низамовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        }
      ]
    },
    {
      "key": "03.04.2023",
      "group": "ССА-7",
      "week": "12",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "04.04.2023",
      "group": "ССА-7",
      "week": "12",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "05.04.2023",
      "group": "ССА-7",
      "week": "12",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Родной язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "06.04.2023",
      "group": "ССА-7",
      "week": "13",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "07.04.2023",
      "group": "ССА-7",
      "week": "13",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Астрономия",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "213"
        }
      ]
    },
    {
      "key": "08.04.2023",
      "group": "ССА-7",
      "week": "13",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Основы предпринимательской деятельности",
          "professor": "Шамбер Лола Низамовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        }
      ]
    },
    {
      "key": "10.04.2023",
      "group": "ССА-7",
      "week": "13",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "11.04.2023",
      "group": "ССА-7",
      "week": "13",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "12.04.2023",
      "group": "ССА-7",
      "week": "13",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Русский язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "13.04.2023",
      "group": "ССА-7",
      "week": "14",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Астрономия",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "14.04.2023",
      "group": "ССА-7",
      "week": "14",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        }
      ]
    },
    {
      "key": "15.04.2023",
      "group": "ССА-7",
      "week": "14",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Основы предпринимательской деятельности",
          "professor": "Шамбер Лола Низамовна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "",
          "auditory": ""
        }
      ]
    },
    {
      "key": "17.04.2023",
      "group": "ССА-7",
      "week": "14",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "18.04.2023",
      "group": "ССА-7",
      "week": "14",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "19.04.2023",
      "group": "ССА-7",
      "week": "14",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Родной язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "20.04.2023",
      "group": "ССА-7",
      "week": "15",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "21.04.2023",
      "group": "ССА-7",
      "week": "15",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Родной язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "213"
        }
      ]
    },
    {
      "key": "22.04.2023",
      "group": "ССА-7",
      "week": "15",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        },
        {
          "numOfPair": "5",
          "timeStart": "14:50",
          "timeEnd": "16:20",
          "predmet": "Основы предпринимательской деятельности",
          "professor": "Шамбер Лола Низамовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        }
      ]
    },
    {
      "key": "24.04.2023",
      "group": "ССА-7",
      "week": "15",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "25.04.2023",
      "group": "ССА-7",
      "week": "15",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "26.04.2023",
      "group": "ССА-7",
      "week": "15",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Русский язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "27.04.2023",
      "group": "ССА-7",
      "week": "16",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "28.04.2023",
      "group": "ССА-7",
      "week": "16",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "213"
        }
      ]
    },
    {
      "key": "29.04.2023",
      "group": "ССА-7",
      "week": "16",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:20",
          "timeEnd": "10:30",
          "predmet": "Основы предпринимательской деятельности",
          "professor": "Шамбер Лола Низамовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        },
        {
          "numOfPair": "3",
          "timeStart": "10:40",
          "timeEnd": "11:50",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "12:00",
          "timeEnd": "13:10",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "221"
        }
      ]
    },
    {
      "key": "02.05.2023",
      "group": "ССА-7",
      "week": "16",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "03.05.2023",
      "group": "ССА-7",
      "week": "16",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Родной язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        }
      ]
    },
    {
      "key": "04.05.2023",
      "group": "ССА-7",
      "week": "17",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:20",
          "timeEnd": "10:30",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "10:40",
          "timeEnd": "11:50",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "05.05.2023",
      "group": "ССА-7",
      "week": "17",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Астрономия",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "213"
        }
      ]
    },
    {
      "key": "06.05.2023",
      "group": "ССА-7",
      "week": "17",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:10",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:20",
          "timeEnd": "10:30",
          "predmet": "Основы предпринимательской деятельности",
          "professor": "Шамбер Лола Низамовна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "10:40",
          "timeEnd": "11:50",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "12:00",
          "timeEnd": "13:10",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        }
      ]
    },
    {
      "key": "10.05.2023",
      "group": "ССА-7",
      "week": "17",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Русский язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        }
      ]
    },
    {
      "key": "11.05.2023",
      "group": "ССА-7",
      "week": "18",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "12.05.2023",
      "group": "ССА-7",
      "week": "18",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "110"
        }
      ]
    },
    {
      "key": "13.05.2023",
      "group": "ССА-7",
      "week": "18",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Основы предпринимательской деятельности",
          "professor": "Шамбер Лола Низамовна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "",
          "auditory": ""
        }
      ]
    },
    {
      "key": "15.05.2023",
      "group": "ССА-7",
      "week": "18",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "16.05.2023",
      "group": "ССА-7",
      "week": "18",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "17.05.2023",
      "group": "ССА-7",
      "week": "18",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Родной язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "18.05.2023",
      "group": "ССА-7",
      "week": "19",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "19.05.2023",
      "group": "ССА-7",
      "week": "19",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Астрономия",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "213"
        }
      ]
    },
    {
      "key": "20.05.2023",
      "group": "ССА-7",
      "week": "19",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Основы предпринимательской деятельности",
          "professor": "Шамбер Лола Низамовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        }
      ]
    },
    {
      "key": "22.05.2023",
      "group": "ССА-7",
      "week": "19",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "23.05.2023",
      "group": "ССА-7",
      "week": "19",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "24.05.2023",
      "group": "ССА-7",
      "week": "19",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Русский язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "25.05.2023",
      "group": "ССА-7",
      "week": "20",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        }
      ]
    },
    {
      "key": "26.05.2023",
      "group": "ССА-7",
      "week": "20",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "27.05.2023",
      "group": "ССА-7",
      "week": "20",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Основы предпринимательской деятельности",
          "professor": "Шамбер Лола Низамовна",
          "adress": "Московское шоссе, 120",
          "auditory": "432"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        }
      ]
    },
    {
      "key": "29.05.2023",
      "group": "ССА-7",
      "week": "20",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "30.05.2023",
      "group": "ССА-7",
      "week": "20",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "31.05.2023",
      "group": "ССА-7",
      "week": "20",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Родной язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "01.06.2023",
      "group": "ССА-7",
      "week": "21",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "02.06.2023",
      "group": "ССА-7",
      "week": "21",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Астрономия",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "03.06.2023",
      "group": "ССА-7",
      "week": "21",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Основы предпринимательской деятельности",
          "professor": "Шамбер Лола Низамовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        }
      ]
    },
    {
      "key": "05.06.2023",
      "group": "ССА-7",
      "week": "21",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "06.06.2023",
      "group": "ССА-7",
      "week": "21",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "07.06.2023",
      "group": "ССА-7",
      "week": "21",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Русский язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "08.06.2023",
      "group": "ССА-7",
      "week": "22",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        }
      ]
    },
    {
      "key": "09.06.2023",
      "group": "ССА-7",
      "week": "22",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "10.06.2023",
      "group": "ССА-7",
      "week": "22",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:20",
          "timeEnd": "10:30",
          "predmet": "Основы предпринимательской деятельности",
          "professor": "Шамбер Лола Низамовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        },
        {
          "numOfPair": "3",
          "timeStart": "10:40",
          "timeEnd": "11:50",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "12:00",
          "timeEnd": "13:10",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        }
      ]
    },
    {
      "key": "13.06.2023",
      "group": "ССА-7",
      "week": "22",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы предпринимательской деятельности",
          "professor": "Шамбер Лола Низамовна",
          "adress": "Московское шоссе, 120",
          "auditory": "432"
        }
      ]
    },
    {
      "key": "14.06.2023",
      "group": "ССА-7",
      "week": "22",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Родной язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        }
      ]
    },
    {
      "key": "15.06.2023",
      "group": "ССА-7",
      "week": "23",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        }
      ]
    },
    {
      "key": "16.06.2023",
      "group": "ССА-7",
      "week": "23",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Астрономия",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        }
      ]
    },
    {
      "key": "17.06.2023",
      "group": "ССА-7",
      "week": "23",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Основы предпринимательской деятельности",
          "professor": "Шамбер Лола Низамовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        }
      ]
    },
    {
      "key": "19.06.2023",
      "group": "ССА-7",
      "week": "23",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "20.06.2023",
      "group": "ССА-7",
      "week": "23",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "21.06.2023",
      "group": "ССА-7",
      "week": "23",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Русский язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "22.06.2023",
      "group": "ССА-7",
      "week": "24",
      "schedule": [
        {
          "numOfPair": "Консультация",
          "timeStart": "10:30",
          "timeEnd": "",
          "predmet": "Русский язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "23.06.2023",
      "group": "ССА-7",
      "week": "24",
      "schedule": [
        {
          "numOfPair": "Экзамен",
          "timeStart": "13:00",
          "timeEnd": "",
          "predmet": "Русский язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "24.06.2023",
      "group": "ССА-7",
      "week": "24",
      "schedule": [
        {
          "numOfPair": "Консультация",
          "timeStart": "09:00",
          "timeEnd": "",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "26.06.2023",
      "group": "ССА-7",
      "week": "24",
      "schedule": [
        {
          "numOfPair": "Экзамен",
          "timeStart": "10:30",
          "timeEnd": "",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "27.06.2023",
      "group": "ССА-7",
      "week": "24",
      "schedule": [
        {
          "numOfPair": "Консультация",
          "timeStart": "09:00",
          "timeEnd": "",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        }
      ]
    },
    {
      "key": "28.06.2023",
      "group": "ССА-7",
      "week": "24",
      "schedule": [
        {
          "numOfPair": "Экзамен",
          "timeStart": "09:00",
          "timeEnd": "",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        }
      ]
    },
    {
      "key": "29.06.2023",
      "group": "ССА-7",
      "week": "25",
      "schedule": [
        {
          "numOfPair": "Экзамен",
          "timeStart": "09:00",
          "timeEnd": "",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        }
      ]
    },
    {
      "key": "01.09.2023",
      "group": "ССА-7",
      "week": "1",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        }
      ]
    },
    {
      "key": "02.09.2023",
      "group": "ССА-7",
      "week": "1",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:10",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "2",
          "timeStart": "09:20",
          "timeEnd": "10:30",
          "predmet": "История",
          "professor": "Апанасевич Людмила Фазыляновна",
          "adress": "Московское шоссе, 120",
          "auditory": "401"
        },
        {
          "numOfPair": "3",
          "timeStart": "10:40",
          "timeEnd": "11:50",
          "predmet": "Основы электротехники",
          "professor": "Першина Елена Викторовна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        }
      ]
    },
    {
      "key": "04.09.2023",
      "group": "ССА-7",
      "week": "1",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "",
          "auditory": ""
        }
      ]
    },
    {
      "key": "05.09.2023",
      "group": "ССА-7",
      "week": "1",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Психология общения",
          "professor": "Гордеев Александр Валентинович",
          "adress": "Московское шоссе, 120",
          "auditory": "313"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы философии",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        }
      ]
    },
    {
      "key": "06.09.2023",
      "group": "ССА-7",
      "week": "1",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Основы философии",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Психология общения",
          "professor": "Гордеев Александр Валентинович",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Дискретная математика",
          "professor": "Мусаева Сона Алимовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        }
      ]
    },
    {
      "key": "07.09.2023",
      "group": "ССА-7",
      "week": "1",
      "schedule": [
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "6",
          "timeStart": "16:50",
          "timeEnd": "18:20",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "08.09.2023",
      "group": "ССА-7",
      "week": "2",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "",
          "auditory": ""
        }
      ]
    },
    {
      "key": "09.09.2023",
      "group": "ССА-7",
      "week": "2",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Апанасевич Людмила Фазыляновна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Першина Елена Викторовна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "",
          "auditory": ""
        }
      ]
    },
    {
      "key": "11.09.2023",
      "group": "ССА-7",
      "week": "2",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "12.09.2023",
      "group": "ССА-7",
      "week": "2",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Психология общения",
          "professor": "Гордеев Александр Валентинович",
          "adress": "Московское шоссе, 120",
          "auditory": "313"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы философии",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Дискретная математика",
          "professor": "Мусаева Сона Алимовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        }
      ]
    },
    {
      "key": "13.09.2023",
      "group": "ССА-7",
      "week": "2",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "История",
          "professor": "Апанасевич Людмила Фазыляновна",
          "adress": "Московское шоссе, 120",
          "auditory": "401"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Дискретная математика",
          "professor": "Мусаева Сона Алимовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "14.09.2023",
      "group": "ССА-7",
      "week": "2",
      "schedule": [
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Дискретная математика",
          "professor": "Мусаева Сона Алимовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "6",
          "timeStart": "16:50",
          "timeEnd": "18:20",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "15.09.2023",
      "group": "ССА-7",
      "week": "3",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        }
      ]
    },
    {
      "key": "16.09.2023",
      "group": "ССА-7",
      "week": "3",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "324"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Апанасевич Людмила Фазыляновна",
          "adress": "Московское шоссе, 120",
          "auditory": "401"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Першина Елена Викторовна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        }
      ]
    },
    {
      "key": "18.09.2023",
      "group": "ССА-7",
      "week": "3",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Психология общения",
          "professor": "Гордеев Александр Валентинович",
          "adress": "Московское шоссе, 120",
          "auditory": "221"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "19.09.2023",
      "group": "ССА-7",
      "week": "3",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Психология общения",
          "professor": "Гордеев Александр Валентинович",
          "adress": "Московское шоссе, 120",
          "auditory": "313"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы философии",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        }
      ]
    },
    {
      "key": "20.09.2023",
      "group": "ССА-7",
      "week": "3",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Основы философии",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Психология общения",
          "professor": "Гордеев Александр Валентинович",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Дискретная математика",
          "professor": "Мусаева Сона Алимовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        }
      ]
    },
    {
      "key": "21.09.2023",
      "group": "ССА-7",
      "week": "3",
      "schedule": [
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Психология общения",
          "professor": "Гордеев Александр Валентинович",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "6",
          "timeStart": "16:50",
          "timeEnd": "18:20",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "22.09.2023",
      "group": "ССА-7",
      "week": "4",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "327"
        }
      ]
    },
    {
      "key": "23.09.2023",
      "group": "ССА-7",
      "week": "4",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "324"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Апанасевич Людмила Фазыляновна",
          "adress": "Московское шоссе, 120",
          "auditory": "401"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Першина Елена Викторовна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        }
      ]
    },
    {
      "key": "25.09.2023",
      "group": "ССА-7",
      "week": "4",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Психология общения",
          "professor": "Гордеев Александр Валентинович",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        }
      ]
    },
    {
      "key": "26.09.2023",
      "group": "ССА-7",
      "week": "4",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Психология общения",
          "professor": "Гордеев Александр Валентинович",
          "adress": "Московское шоссе, 120",
          "auditory": "313"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы философии",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Дискретная математика",
          "professor": "Мусаева Сона Алимовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        }
      ]
    },
    {
      "key": "27.09.2023",
      "group": "ССА-7",
      "week": "4",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "История",
          "professor": "Апанасевич Людмила Фазыляновна",
          "adress": "Московское шоссе, 120",
          "auditory": "401"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Дискретная математика",
          "professor": "Мусаева Сона Алимовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "28.09.2023",
      "group": "ССА-7",
      "week": "4",
      "schedule": [
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Дискретная математика",
          "professor": "Мусаева Сона Алимовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "6",
          "timeStart": "16:50",
          "timeEnd": "18:20",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "29.09.2023",
      "group": "ССА-7",
      "week": "5",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        }
      ]
    },
    {
      "key": "30.09.2023",
      "group": "ССА-7",
      "week": "5",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "324"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Апанасевич Людмила Фазыляновна",
          "adress": "Московское шоссе, 120",
          "auditory": "401"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Першина Елена Викторовна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        }
      ]
    },
    {
      "key": "02.10.2023",
      "group": "ССА-7",
      "week": "5",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Психология общения",
          "professor": "Гордеев Александр Валентинович",
          "adress": "Московское шоссе, 120",
          "auditory": "221"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "03.10.2023",
      "group": "ССА-7",
      "week": "5",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Психология общения",
          "professor": "Гордеев Александр Валентинович",
          "adress": "Московское шоссе, 120",
          "auditory": "313"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы философии",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        }
      ]
    },
    {
      "key": "04.10.2023",
      "group": "ССА-7",
      "week": "5",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Психология общения",
          "professor": "Гордеев Александр Валентинович",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Дискретная математика",
          "professor": "Мусаева Сона Алимовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "05.10.2023",
      "group": "ССА-7",
      "week": "5",
      "schedule": [
        {
          "numOfPair": "4",
          "timeStart": "12:00",
          "timeEnd": "13:10",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "5",
          "timeStart": "13:20",
          "timeEnd": "14:30",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "6",
          "timeStart": "14:40",
          "timeEnd": "15:50",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "06.10.2023",
      "group": "ССА-7",
      "week": "6",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        }
      ]
    },
    {
      "key": "07.10.2023",
      "group": "ССА-7",
      "week": "6",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "324"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Апанасевич Людмила Фазыляновна",
          "adress": "Московское шоссе, 120",
          "auditory": "401"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Першина Елена Викторовна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        }
      ]
    },
    {
      "key": "09.10.2023",
      "group": "ССА-7",
      "week": "6",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        }
      ]
    },
    {
      "key": "10.10.2023",
      "group": "ССА-7",
      "week": "6",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Психология общения",
          "professor": "Гордеев Александр Валентинович",
          "adress": "Московское шоссе, 120",
          "auditory": "313"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы философии",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Дискретная математика",
          "professor": "Мусаева Сона Алимовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        }
      ]
    },
    {
      "key": "11.10.2023",
      "group": "ССА-7",
      "week": "6",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Основы философии",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "История",
          "professor": "Апанасевич Людмила Фазыляновна",
          "adress": "Московское шоссе, 120",
          "auditory": "401"
        }
      ]
    },
    {
      "key": "12.10.2023",
      "group": "ССА-7",
      "week": "6",
      "schedule": [
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "6",
          "timeStart": "16:50",
          "timeEnd": "18:20",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "13.10.2023",
      "group": "ССА-7",
      "week": "7",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        }
      ]
    },
    {
      "key": "14.10.2023",
      "group": "ССА-7",
      "week": "7",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "324"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Апанасевич Людмила Фазыляновна",
          "adress": "Московское шоссе, 120",
          "auditory": "401"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Першина Елена Викторовна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        }
      ]
    },
    {
      "key": "16.10.2023",
      "group": "ССА-7",
      "week": "7",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "204"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "17.10.2023",
      "group": "ССА-7",
      "week": "7",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Психология общения",
          "professor": "Гордеев Александр Валентинович",
          "adress": "Московское шоссе, 120",
          "auditory": "313"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы философии",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        }
      ]
    },
    {
      "key": "18.10.2023",
      "group": "ССА-7",
      "week": "7",
      "schedule": [
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Дискретная математика",
          "professor": "Мусаева Сона Алимовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "19.10.2023",
      "group": "ССА-7",
      "week": "7",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Дискретная математика",
          "professor": "Мусаева Сона Алимовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "6",
          "timeStart": "16:50",
          "timeEnd": "18:20",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "20.10.2023",
      "group": "ССА-7",
      "week": "8",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Психология общения",
          "professor": "Гордеев Александр Валентинович",
          "adress": "Московское шоссе, 120",
          "auditory": "309"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        }
      ]
    },
    {
      "key": "21.10.2023",
      "group": "ССА-7",
      "week": "8",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "324"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Апанасевич Людмила Фазыляновна",
          "adress": "Московское шоссе, 120",
          "auditory": "401"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Першина Елена Викторовна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        }
      ]
    },
    {
      "key": "23.10.2023",
      "group": "ССА-7",
      "week": "8",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        }
      ]
    },
    {
      "key": "24.10.2023",
      "group": "ССА-7",
      "week": "8",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "313"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы философии",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "25.10.2023",
      "group": "ССА-7",
      "week": "8",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Основы философии",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "История",
          "professor": "Апанасевич Людмила Фазыляновна",
          "adress": "Московское шоссе, 120",
          "auditory": "401"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Дискретная математика",
          "professor": "Мусаева Сона Алимовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        }
      ]
    },
    {
      "key": "26.10.2023",
      "group": "ССА-7",
      "week": "8",
      "schedule": [
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "6",
          "timeStart": "16:50",
          "timeEnd": "18:20",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "27.10.2023",
      "group": "ССА-7",
      "week": "9",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        }
      ]
    },
    {
      "key": "28.10.2023",
      "group": "ССА-7",
      "week": "9",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "324"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Апанасевич Людмила Фазыляновна",
          "adress": "Московское шоссе, 120",
          "auditory": "401"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Першина Елена Викторовна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        }
      ]
    },
    {
      "key": "30.10.2023",
      "group": "ССА-7",
      "week": "9",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "31.10.2023",
      "group": "ССА-7",
      "week": "9",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Психология общения",
          "professor": "Гордеев Александр Валентинович",
          "adress": "Московское шоссе, 120",
          "auditory": "313"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы философии",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        }
      ]
    },
    {
      "key": "01.11.2023",
      "group": "ССА-7",
      "week": "9",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Психология общения",
          "professor": "Гордеев Александр Валентинович",
          "adress": "Московское шоссе, 120",
          "auditory": "309"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Дискретная математика",
          "professor": "Мусаева Сона Алимовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "02.11.2023",
      "group": "ССА-7",
      "week": "9",
      "schedule": [
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "6",
          "timeStart": "16:50",
          "timeEnd": "18:20",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "03.11.2023",
      "group": "ССА-7",
      "week": "10",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:10",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:20",
          "timeEnd": "10:30",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        }
      ]
    },
    {
      "key": "06.11.2023",
      "group": "ССА-7",
      "week": "10",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:20",
          "timeEnd": "10:30",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "3",
          "timeStart": "10:40",
          "timeEnd": "11:50",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "4",
          "timeStart": "12:00",
          "timeEnd": "13:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "13:20",
          "timeEnd": "14:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        }
      ]
    },
    {
      "key": "07.11.2023",
      "group": "ССА-7",
      "week": "10",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Психология общения",
          "professor": "Гордеев Александр Валентинович",
          "adress": "Московское шоссе, 120",
          "auditory": "313"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы философии",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Дискретная математика",
          "professor": "Мусаева Сона Алимовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        }
      ]
    },
    {
      "key": "08.11.2023",
      "group": "ССА-7",
      "week": "10",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Основы философии",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "История",
          "professor": "Апанасевич Людмила Фазыляновна",
          "adress": "Московское шоссе, 120",
          "auditory": "401"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Дискретная математика",
          "professor": "Мусаева Сона Алимовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        }
      ]
    },
    {
      "key": "09.11.2023",
      "group": "ССА-7",
      "week": "10",
      "schedule": [
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "6",
          "timeStart": "16:50",
          "timeEnd": "18:20",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "10.11.2023",
      "group": "ССА-7",
      "week": "11",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        }
      ]
    },
    {
      "key": "11.11.2023",
      "group": "ССА-7",
      "week": "11",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Апанасевич Людмила Фазыляновна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Першина Елена Викторовна",
          "adress": "",
          "auditory": ""
        }
      ]
    },
    {
      "key": "13.11.2023",
      "group": "ССА-7",
      "week": "11",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "14.11.2023",
      "group": "ССА-7",
      "week": "11",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Психология общения",
          "professor": "Гордеев Александр Валентинович",
          "adress": "Московское шоссе, 120",
          "auditory": "313"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы философии",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        }
      ]
    },
    {
      "key": "15.11.2023",
      "group": "ССА-7",
      "week": "11",
      "schedule": [
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Дискретная математика",
          "professor": "Мусаева Сона Алимовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "16.11.2023",
      "group": "ССА-7",
      "week": "11",
      "schedule": [
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "6",
          "timeStart": "16:50",
          "timeEnd": "18:20",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "17.11.2023",
      "group": "ССА-7",
      "week": "12",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Психология общения",
          "professor": "Гордеев Александр Валентинович",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        }
      ]
    },
    {
      "key": "18.11.2023",
      "group": "ССА-7",
      "week": "12",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Апанасевич Людмила Фазыляновна",
          "adress": "Московское шоссе, 120",
          "auditory": "401"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Першина Елена Викторовна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        }
      ]
    },
    {
      "key": "20.11.2023",
      "group": "ССА-7",
      "week": "12",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы философии",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        }
      ]
    },
    {
      "key": "21.11.2023",
      "group": "ССА-7",
      "week": "12",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Психология общения",
          "professor": "Гордеев Александр Валентинович",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы философии",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Дискретная математика",
          "professor": "Мусаева Сона Алимовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        }
      ]
    },
    {
      "key": "22.11.2023",
      "group": "ССА-7",
      "week": "12",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "133"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Основы философии",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "История",
          "professor": "Апанасевич Людмила Фазыляновна",
          "adress": "Московское шоссе, 120",
          "auditory": "401"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Дискретная математика",
          "professor": "Мусаева Сона Алимовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        }
      ]
    },
    {
      "key": "23.11.2023",
      "group": "ССА-7",
      "week": "12",
      "schedule": [
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "6",
          "timeStart": "16:50",
          "timeEnd": "18:20",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "24.11.2023",
      "group": "ССА-7",
      "week": "13",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        }
      ]
    },
    {
      "key": "25.11.2023",
      "group": "ССА-7",
      "week": "13",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "324"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Апанасевич Людмила Фазыляновна",
          "adress": "Московское шоссе, 120",
          "auditory": "401"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Першина Елена Викторовна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        }
      ]
    },
    {
      "key": "27.11.2023",
      "group": "ССА-7",
      "week": "13",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "28.11.2023",
      "group": "ССА-7",
      "week": "13",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Психология общения",
          "professor": "Гордеев Александр Валентинович",
          "adress": "Московское шоссе, 120",
          "auditory": "313"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы философии",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        }
      ]
    },
    {
      "key": "29.11.2023",
      "group": "ССА-7",
      "week": "13",
      "schedule": [
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Дискретная математика",
          "professor": "Мусаева Сона Алимовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "6",
          "timeStart": "16:50",
          "timeEnd": "18:20",
          "predmet": "Психология общения",
          "professor": "Гордеев Александр Валентинович",
          "adress": "Московское шоссе, 120",
          "auditory": "312"
        }
      ]
    },
    {
      "key": "30.11.2023",
      "group": "ССА-7",
      "week": "13",
      "schedule": [
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "6",
          "timeStart": "16:50",
          "timeEnd": "18:20",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "01.12.2023",
      "group": "ССА-7",
      "week": "14",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        }
      ]
    },
    {
      "key": "02.12.2023",
      "group": "ССА-7",
      "week": "14",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "324"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Апанасевич Людмила Фазыляновна",
          "adress": "Московское шоссе, 120",
          "auditory": "401"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Першина Елена Викторовна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        }
      ]
    },
    {
      "key": "04.12.2023",
      "group": "ССА-7",
      "week": "14",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "207"
        }
      ]
    },
    {
      "key": "05.12.2023",
      "group": "ССА-7",
      "week": "14",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Психология общения",
          "professor": "Гордеев Александр Валентинович",
          "adress": "Московское шоссе, 120",
          "auditory": "313"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы философии",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Дискретная математика",
          "professor": "Мусаева Сона Алимовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        }
      ]
    },
    {
      "key": "06.12.2023",
      "group": "ССА-7",
      "week": "14",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Основы философии",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "История",
          "professor": "Апанасевич Людмила Фазыляновна",
          "adress": "Московское шоссе, 120",
          "auditory": "401"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Дискретная математика",
          "professor": "Мусаева Сона Алимовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        }
      ]
    },
    {
      "key": "07.12.2023",
      "group": "ССА-7",
      "week": "14",
      "schedule": [
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "6",
          "timeStart": "16:50",
          "timeEnd": "18:20",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "08.12.2023",
      "group": "ССА-7",
      "week": "15",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        }
      ]
    },
    {
      "key": "09.12.2023",
      "group": "ССА-7",
      "week": "15",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "324"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Апанасевич Людмила Фазыляновна",
          "adress": "Московское шоссе, 120",
          "auditory": "401"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Першина Елена Викторовна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        }
      ]
    },
    {
      "key": "11.12.2023",
      "group": "ССА-7",
      "week": "15",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "12.12.2023",
      "group": "ССА-7",
      "week": "15",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы философии",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        }
      ]
    },
    {
      "key": "13.12.2023",
      "group": "ССА-7",
      "week": "15",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Дискретная математика",
          "professor": "Мусаева Сона Алимовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        }
      ]
    },
    {
      "key": "14.12.2023",
      "group": "ССА-7",
      "week": "15",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "15.12.2023",
      "group": "ССА-7",
      "week": "16",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:10",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "133"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:20",
          "timeEnd": "10:30",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        }
      ]
    },
    {
      "key": "16.12.2023",
      "group": "ССА-7",
      "week": "16",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "133"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Апанасевич Людмила Фазыляновна",
          "adress": "Московское шоссе, 120",
          "auditory": "401"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Першина Елена Викторовна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "133"
        }
      ]
    },
    {
      "key": "18.12.2023",
      "group": "ССА-7",
      "week": "16",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "19.12.2023",
      "group": "ССА-7",
      "week": "16",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы философии",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Дискретная математика",
          "professor": "Мусаева Сона Алимовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        }
      ]
    },
    {
      "key": "20.12.2023",
      "group": "ССА-7",
      "week": "16",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "История",
          "professor": "Апанасевич Людмила Фазыляновна",
          "adress": "Московское шоссе, 120",
          "auditory": "401"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "21.12.2023",
      "group": "ССА-7",
      "week": "16",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "22.12.2023",
      "group": "ССА-7",
      "week": "17",
      "schedule": [
        {
          "numOfPair": "Консультация",
          "timeStart": "09:00",
          "timeEnd": "",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "133"
        }
      ]
    },
    {
      "key": "23.12.2023",
      "group": "ССА-7",
      "week": "17",
      "schedule": [
        {
          "numOfPair": "Экзамен",
          "timeStart": "09:00",
          "timeEnd": "",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        }
      ]
    },
    {
      "key": "25.12.2023",
      "group": "ССА-7",
      "week": "17",
      "schedule": [
        {
          "numOfPair": "Консультация",
          "timeStart": "09:00",
          "timeEnd": "",
          "predmet": "Дискретная математика с элементами математической логики",
          "professor": "Мусаева Сона Алимовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        }
      ]
    },
    {
      "key": "26.12.2023",
      "group": "ССА-7",
      "week": "17",
      "schedule": [
        {
          "numOfPair": "Экзамен",
          "timeStart": "10:30",
          "timeEnd": "",
          "predmet": "Дискретная математика с элементами математической логики",
          "professor": "Мусаева Сона Алимовна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "12.01.2024",
      "group": "ССА-7",
      "week": "1",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        }
      ]
    },
    {
      "key": "13.01.2024",
      "group": "ССА-7",
      "week": "1",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Першина Елена Викторовна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        }
      ]
    },
    {
      "key": "15.01.2024",
      "group": "ССА-7",
      "week": "1",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "МДК.02.02 Программное обеспечение компьютерных сетей",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "16.01.2024",
      "group": "ССА-7",
      "week": "1",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "17.01.2024",
      "group": "ССА-7",
      "week": "1",
      "schedule": [
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "18.01.2024",
      "group": "ССА-7",
      "week": "1",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "МДК.02.01 Администрирование сетевых операционных систем",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "19.01.2024",
      "group": "ССА-7",
      "week": "2",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        }
      ]
    },
    {
      "key": "20.01.2024",
      "group": "ССА-7",
      "week": "2",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Першина Елена Викторовна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        }
      ]
    },
    {
      "key": "22.01.2024",
      "group": "ССА-7",
      "week": "2",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "МДК.02.02 Программное обеспечение компьютерных сетей",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "23.01.2024",
      "group": "ССА-7",
      "week": "2",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Основы электротехники",
          "professor": "Першина Елена Викторовна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        }
      ]
    },
    {
      "key": "24.01.2024",
      "group": "ССА-7",
      "week": "2",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "25.01.2024",
      "group": "ССА-7",
      "week": "2",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "МДК.02.01 Администрирование сетевых операционных систем",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы электротехники",
          "professor": "Першина Елена Викторовна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        }
      ]
    },
    {
      "key": "26.01.2024",
      "group": "ССА-7",
      "week": "3",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "131"
        }
      ]
    },
    {
      "key": "27.01.2024",
      "group": "ССА-7",
      "week": "3",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Першина Елена Викторовна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        }
      ]
    },
    {
      "key": "29.01.2024",
      "group": "ССА-7",
      "week": "3",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:20",
          "timeEnd": "10:30",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "3",
          "timeStart": "10:40",
          "timeEnd": "11:50",
          "predmet": "МДК.02.02 Программное обеспечение компьютерных сетей",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "4",
          "timeStart": "12:00",
          "timeEnd": "13:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "13:20",
          "timeEnd": "14:30",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "30.01.2024",
      "group": "ССА-7",
      "week": "3",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        }
      ]
    },
    {
      "key": "31.01.2024",
      "group": "ССА-7",
      "week": "3",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "01.02.2024",
      "group": "ССА-7",
      "week": "3",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "МДК.02.01 Администрирование сетевых операционных систем",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "02.02.2024",
      "group": "ССА-7",
      "week": "4",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        }
      ]
    },
    {
      "key": "03.02.2024",
      "group": "ССА-7",
      "week": "4",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Коновалова Екатерина Васильевна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        }
      ]
    },
    {
      "key": "05.02.2024",
      "group": "ССА-7",
      "week": "4",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "МДК.02.02 Программное обеспечение компьютерных сетей",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "06.02.2024",
      "group": "ССА-7",
      "week": "4",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        }
      ]
    },
    {
      "key": "07.02.2024",
      "group": "ССА-7",
      "week": "4",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "08.02.2024",
      "group": "ССА-7",
      "week": "4",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "МДК.02.01 Администрирование сетевых операционных систем",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы электротехники",
          "professor": "Коновалова Екатерина Васильевна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы электротехники",
          "professor": "Коновалова Екатерина Васильевна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        }
      ]
    },
    {
      "key": "09.02.2024",
      "group": "ССА-7",
      "week": "5",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        }
      ]
    },
    {
      "key": "10.02.2024",
      "group": "ССА-7",
      "week": "5",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Коновалова Екатерина Васильевна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        }
      ]
    },
    {
      "key": "12.02.2024",
      "group": "ССА-7",
      "week": "5",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "МДК.02.02 Программное обеспечение компьютерных сетей",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "13.02.2024",
      "group": "ССА-7",
      "week": "5",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        }
      ]
    },
    {
      "key": "14.02.2024",
      "group": "ССА-7",
      "week": "5",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "15.02.2024",
      "group": "ССА-7",
      "week": "5",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "МДК.02.01 Администрирование сетевых операционных систем",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "16.02.2024",
      "group": "ССА-7",
      "week": "6",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        }
      ]
    },
    {
      "key": "17.02.2024",
      "group": "ССА-7",
      "week": "6",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Коновалова Екатерина Васильевна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "",
          "auditory": ""
        }
      ]
    },
    {
      "key": "19.02.2024",
      "group": "ССА-7",
      "week": "6",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "МДК.02.02 Программное обеспечение компьютерных сетей",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "20.02.2024",
      "group": "ССА-7",
      "week": "6",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        }
      ]
    },
    {
      "key": "21.02.2024",
      "group": "ССА-7",
      "week": "6",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "22.02.2024",
      "group": "ССА-7",
      "week": "6",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:10",
          "predmet": "МДК.02.01 Администрирование сетевых операционных систем",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:20",
          "timeEnd": "10:30",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "3",
          "timeStart": "10:40",
          "timeEnd": "11:50",
          "predmet": "Основы электротехники",
          "professor": "Коновалова Екатерина Васильевна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        },
        {
          "numOfPair": "4",
          "timeStart": "12:00",
          "timeEnd": "13:10",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        }
      ]
    },
    {
      "key": "26.02.2024",
      "group": "ССА-7",
      "week": "7",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "МДК.02.02 Программное обеспечение компьютерных сетей",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "27.02.2024",
      "group": "ССА-7",
      "week": "7",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        }
      ]
    },
    {
      "key": "28.02.2024",
      "group": "ССА-7",
      "week": "7",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "29.02.2024",
      "group": "ССА-7",
      "week": "7",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "МДК.02.01 Администрирование сетевых операционных систем",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "01.03.2024",
      "group": "ССА-7",
      "week": "8",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        }
      ]
    },
    {
      "key": "02.03.2024",
      "group": "ССА-7",
      "week": "8",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Коновалова Екатерина Васильевна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        }
      ]
    },
    {
      "key": "04.03.2024",
      "group": "ССА-7",
      "week": "8",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "МДК.02.02 Программное обеспечение компьютерных сетей",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "05.03.2024",
      "group": "ССА-7",
      "week": "8",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        }
      ]
    },
    {
      "key": "06.03.2024",
      "group": "ССА-7",
      "week": "8",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "07.03.2024",
      "group": "ССА-7",
      "week": "8",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:10",
          "predmet": "МДК.02.01 Администрирование сетевых операционных систем",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:20",
          "timeEnd": "10:30",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "3",
          "timeStart": "10:40",
          "timeEnd": "11:50",
          "predmet": "Основы электротехники",
          "professor": "Коновалова Екатерина Васильевна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        }
      ]
    },
    {
      "key": "11.03.2024",
      "group": "ССА-7",
      "week": "9",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "МДК.02.02 Программное обеспечение компьютерных сетей",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "101"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "12.03.2024",
      "group": "ССА-7",
      "week": "9",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "13.03.2024",
      "group": "ССА-7",
      "week": "9",
      "schedule": [
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "14.03.2024",
      "group": "ССА-7",
      "week": "9",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "МДК.02.01 Администрирование сетевых операционных систем",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "15.03.2024",
      "group": "ССА-7",
      "week": "10",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        }
      ]
    },
    {
      "key": "16.03.2024",
      "group": "ССА-7",
      "week": "10",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Коновалова Екатерина Васильевна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "",
          "auditory": ""
        }
      ]
    },
    {
      "key": "18.03.2024",
      "group": "ССА-7",
      "week": "10",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "МДК.02.02 Программное обеспечение компьютерных сетей",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "19.03.2024",
      "group": "ССА-7",
      "week": "10",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "133"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "20.03.2024",
      "group": "ССА-7",
      "week": "10",
      "schedule": [
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "21.03.2024",
      "group": "ССА-7",
      "week": "10",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "МДК.02.01 Администрирование сетевых операционных систем",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы электротехники",
          "professor": "Коновалова Екатерина Васильевна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        }
      ]
    },
    {
      "key": "22.03.2024",
      "group": "ССА-7",
      "week": "11",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        }
      ]
    },
    {
      "key": "23.03.2024",
      "group": "ССА-7",
      "week": "11",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Коновалова Екатерина Васильевна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        }
      ]
    },
    {
      "key": "25.03.2024",
      "group": "ССА-7",
      "week": "11",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "МДК.02.02 Программное обеспечение компьютерных сетей",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "26.03.2024",
      "group": "ССА-7",
      "week": "11",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "27.03.2024",
      "group": "ССА-7",
      "week": "11",
      "schedule": [
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "28.03.2024",
      "group": "ССА-7",
      "week": "11",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "МДК.02.01 Администрирование сетевых операционных систем",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "29.03.2024",
      "group": "ССА-7",
      "week": "12",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "324"
        }
      ]
    },
    {
      "key": "30.03.2024",
      "group": "ССА-7",
      "week": "12",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Коновалова Екатерина Васильевна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "",
          "auditory": ""
        }
      ]
    },
    {
      "key": "01.04.2024",
      "group": "ССА-7",
      "week": "12",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "МДК.02.02 Программное обеспечение компьютерных сетей",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        }
      ]
    },
    {
      "key": "02.04.2024",
      "group": "ССА-7",
      "week": "12",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "218"
        }
      ]
    },
    {
      "key": "03.04.2024",
      "group": "ССА-7",
      "week": "12",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "04.04.2024",
      "group": "ССА-7",
      "week": "12",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "МДК.02.01 Администрирование сетевых операционных систем",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы электротехники",
          "professor": "Коновалова Екатерина Васильевна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        }
      ]
    },
    {
      "key": "05.04.2024",
      "group": "ССА-7",
      "week": "13",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        }
      ]
    },
    {
      "key": "06.04.2024",
      "group": "ССА-7",
      "week": "13",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Коновалова Екатерина Васильевна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        }
      ]
    },
    {
      "key": "08.04.2024",
      "group": "ССА-7",
      "week": "13",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "МДК.02.02 Программное обеспечение компьютерных сетей",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "09.04.2024",
      "group": "ССА-7",
      "week": "13",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        }
      ]
    },
    {
      "key": "10.04.2024",
      "group": "ССА-7",
      "week": "13",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "11.04.2024",
      "group": "ССА-7",
      "week": "13",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "МДК.02.01 Администрирование сетевых операционных систем",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "12.04.2024",
      "group": "ССА-7",
      "week": "14",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        }
      ]
    },
    {
      "key": "13.04.2024",
      "group": "ССА-7",
      "week": "14",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Коновалова Екатерина Васильевна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        }
      ]
    },
    {
      "key": "15.04.2024",
      "group": "ССА-7",
      "week": "14",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "МДК.02.02 Программное обеспечение компьютерных сетей",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "16.04.2024",
      "group": "ССА-7",
      "week": "14",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        }
      ]
    },
    {
      "key": "17.04.2024",
      "group": "ССА-7",
      "week": "14",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "18.04.2024",
      "group": "ССА-7",
      "week": "14",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "МДК.02.01 Администрирование сетевых операционных систем",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы электротехники",
          "professor": "Коновалова Екатерина Васильевна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        }
      ]
    },
    {
      "key": "19.04.2024",
      "group": "ССА-7",
      "week": "15",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "20.04.2024",
      "group": "ССА-7",
      "week": "15",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Коновалова Екатерина Васильевна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "",
          "auditory": ""
        }
      ]
    },
    {
      "key": "22.04.2024",
      "group": "ССА-7",
      "week": "15",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "МДК.02.02 Программное обеспечение компьютерных сетей",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "23.04.2024",
      "group": "ССА-7",
      "week": "15",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        }
      ]
    },
    {
      "key": "24.04.2024",
      "group": "ССА-7",
      "week": "15",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "25.04.2024",
      "group": "ССА-7",
      "week": "15",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "МДК.02.01 Администрирование сетевых операционных систем",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "26.04.2024",
      "group": "ССА-7",
      "week": "16",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        }
      ]
    },
    {
      "key": "27.04.2024",
      "group": "ССА-7",
      "week": "16",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "02.05.2024",
      "group": "ССА-7",
      "week": "16",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "МДК.02.01 Администрирование сетевых операционных систем",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы электротехники",
          "professor": "Коновалова Екатерина Васильевна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы электротехники",
          "professor": "Коновалова Екатерина Васильевна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        }
      ]
    },
    {
      "key": "03.05.2024",
      "group": "ССА-7",
      "week": "17",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        }
      ]
    },
    {
      "key": "04.05.2024",
      "group": "ССА-7",
      "week": "17",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Коновалова Екатерина Васильевна",
          "adress": "Московское шоссе, 120",
          "auditory": "311"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        }
      ]
    },
    {
      "key": "06.05.2024",
      "group": "ССА-7",
      "week": "17",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "432"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "МДК.02.02 Программное обеспечение компьютерных сетей",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "07.05.2024",
      "group": "ССА-7",
      "week": "17",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:10",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:20",
          "timeEnd": "10:30",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "10:40",
          "timeEnd": "11:50",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        }
      ]
    },
    {
      "key": "08.05.2024",
      "group": "ССА-7",
      "week": "17",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "10:40",
          "timeEnd": "11:50",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "12:00",
          "timeEnd": "13:10",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        },
        {
          "numOfPair": "5",
          "timeStart": "13:20",
          "timeEnd": "14:30",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "13.05.2024",
      "group": "ССА-7",
      "week": "18",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "МДК.02.02 Программное обеспечение компьютерных сетей",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "14.05.2024",
      "group": "ССА-7",
      "week": "18",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        }
      ]
    },
    {
      "key": "15.05.2024",
      "group": "ССА-7",
      "week": "18",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "16.05.2024",
      "group": "ССА-7",
      "week": "18",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы электротехники",
          "professor": "Коновалова Екатерина Васильевна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "МДК.02.01 Администрирование сетевых операционных систем",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        }
      ]
    },
    {
      "key": "17.05.2024",
      "group": "ССА-7",
      "week": "19",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы электротехники",
          "professor": "Коновалова Екатерина Васильевна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        }
      ]
    },
    {
      "key": "18.05.2024",
      "group": "ССА-7",
      "week": "19",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Коновалова Екатерина Васильевна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "",
          "auditory": ""
        }
      ]
    },
    {
      "key": "20.05.2024",
      "group": "ССА-7",
      "week": "19",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "МДК.02.02 Программное обеспечение компьютерных сетей",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "21.05.2024",
      "group": "ССА-7",
      "week": "19",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        }
      ]
    },
    {
      "key": "22.05.2024",
      "group": "ССА-7",
      "week": "19",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "23.05.2024",
      "group": "ССА-7",
      "week": "19",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "МДК.02.01 Администрирование сетевых операционных систем",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "24.05.2024",
      "group": "ССА-7",
      "week": "20",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        }
      ]
    },
    {
      "key": "25.05.2024",
      "group": "ССА-7",
      "week": "20",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Коновалова Екатерина Васильевна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        }
      ]
    },
    {
      "key": "27.05.2024",
      "group": "ССА-7",
      "week": "20",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "432"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "МДК.02.02 Программное обеспечение компьютерных сетей",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "28.05.2024",
      "group": "ССА-7",
      "week": "20",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "МДК.02.02 Программное обеспечение компьютерных сетей",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        }
      ]
    },
    {
      "key": "29.05.2024",
      "group": "ССА-7",
      "week": "20",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "30.05.2024",
      "group": "ССА-7",
      "week": "20",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы электротехники",
          "professor": "Коновалова Екатерина Васильевна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "МДК.02.01 Администрирование сетевых операционных систем",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        }
      ]
    },
    {
      "key": "31.05.2024",
      "group": "ССА-7",
      "week": "21",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "УП.02 Аппаратное обеспечение",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "УП.02 Аппаратное обеспечение",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "УП.02 Аппаратное обеспечение",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        }
      ]
    },
    {
      "key": "01.06.2024",
      "group": "ССА-7",
      "week": "21",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "УП.02 Аппаратное обеспечение",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "УП.02 Аппаратное обеспечение",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "УП.02 Аппаратное обеспечение",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        }
      ]
    },
    {
      "key": "03.06.2024",
      "group": "ССА-7",
      "week": "21",
      "schedule": [
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "УП.02 Аппаратное обеспечение",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "УП.02 Аппаратное обеспечение",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        },
        {
          "numOfPair": "6",
          "timeStart": "16:50",
          "timeEnd": "18:20",
          "predmet": "УП.02 Аппаратное обеспечение",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        }
      ]
    },
    {
      "key": "04.06.2024",
      "group": "ССА-7",
      "week": "21",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "УП.02 Системное ПО",
          "professor": "Никитин Александр Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "УП.02 Системное ПО",
          "professor": "Никитин Александр Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "УП.02 Системное ПО",
          "professor": "Никитин Александр Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        }
      ]
    },
    {
      "key": "05.06.2024",
      "group": "ССА-7",
      "week": "21",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "УП.02 Системное ПО",
          "professor": "Никитин Александр Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "УП.02 Системное ПО",
          "professor": "Никитин Александр Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "УП.02 Системное ПО",
          "professor": "Никитин Александр Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        }
      ]
    },
    {
      "key": "06.06.2024",
      "group": "ССА-7",
      "week": "21",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "УП.02 Системное ПО",
          "professor": "Никитин Александр Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "УП.02 Системное ПО",
          "professor": "Никитин Александр Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "УП.02 Системное ПО",
          "professor": "Никитин Александр Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        }
      ]
    },
    {
      "key": "07.06.2024",
      "group": "ССА-7",
      "week": "22",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "УП.02 Серверное ПО Windows",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "УП.02 Серверное ПО Windows",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "УП.02 Серверное ПО Windows",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "УП.02 Серверное ПО Windows",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        }
      ]
    },
    {
      "key": "08.06.2024",
      "group": "ССА-7",
      "week": "22",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "УП.02 Серверное ПО Windows",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "УП.02 Серверное ПО Windows",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "УП.02 Серверное ПО Windows",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "УП.02 Серверное ПО Windows",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        }
      ]
    },
    {
      "key": "10.06.2024",
      "group": "ССА-7",
      "week": "22",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "УП.02 Серверное ПО Windows",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "УП.02 Серверное ПО Windows",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "УП.02 Серверное ПО Windows",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "УП.02 Серверное ПО Windows",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        }
      ]
    },
    {
      "key": "11.06.2024",
      "group": "ССА-7",
      "week": "22",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:10",
          "predmet": "УП.02 Серверное ПО Windows",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:20",
          "timeEnd": "10:30",
          "predmet": "УП.02 Серверное ПО Windows",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "3",
          "timeStart": "10:40",
          "timeEnd": "11:50",
          "predmet": "УП.02 Серверное ПО Windows",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "4",
          "timeStart": "12:00",
          "timeEnd": "13:10",
          "predmet": "УП.02 Серверное ПО Windows",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        }
      ]
    },
    {
      "key": "13.06.2024",
      "group": "ССА-7",
      "week": "22",
      "schedule": [
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "УП.02 Серверное ПО Windows",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "УП.02 Серверное ПО Windows",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        }
      ]
    },
    {
      "key": "14.06.2024",
      "group": "ССА-7",
      "week": "23",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:00",
          "timeEnd": "12:10",
          "predmet": "УП.02 Серверное ПО Linux",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        },
        {
          "numOfPair": "4",
          "timeStart": "12:20",
          "timeEnd": "13:30",
          "predmet": "УП.02 Серверное ПО Linux",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        },
        {
          "numOfPair": "5",
          "timeStart": "13:50",
          "timeEnd": "15:00",
          "predmet": "УП.02 Серверное ПО Linux",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        }
      ]
    },
    {
      "key": "15.06.2024",
      "group": "ССА-7",
      "week": "23",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:20",
          "timeEnd": "10:30",
          "predmet": "УП.02 Серверное ПО Linux",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:00",
          "timeEnd": "12:10",
          "predmet": "УП.02 Серверное ПО Linux",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        },
        {
          "numOfPair": "4",
          "timeStart": "12:20",
          "timeEnd": "13:30",
          "predmet": "УП.02 Серверное ПО Linux",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        },
        {
          "numOfPair": "5",
          "timeStart": "13:50",
          "timeEnd": "15:00",
          "predmet": "УП.02 Серверное ПО Linux",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        }
      ]
    },
    {
      "key": "17.06.2024",
      "group": "ССА-7",
      "week": "23",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:20",
          "timeEnd": "10:30",
          "predmet": "УП.02 Серверное ПО Linux",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:00",
          "timeEnd": "12:10",
          "predmet": "УП.02 Серверное ПО Linux",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        },
        {
          "numOfPair": "4",
          "timeStart": "12:20",
          "timeEnd": "13:30",
          "predmet": "УП.02 Серверное ПО Linux",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        },
        {
          "numOfPair": "5",
          "timeStart": "13:50",
          "timeEnd": "15:00",
          "predmet": "УП.02 Серверное ПО Linux",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        }
      ]
    },
    {
      "key": "18.06.2024",
      "group": "ССА-7",
      "week": "23",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:00",
          "timeEnd": "12:10",
          "predmet": "УП.02 Серверное ПО Linux",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        },
        {
          "numOfPair": "4",
          "timeStart": "12:20",
          "timeEnd": "13:30",
          "predmet": "УП.02 Серверное ПО Linux",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        },
        {
          "numOfPair": "5",
          "timeStart": "13:50",
          "timeEnd": "15:00",
          "predmet": "УП.02 Серверное ПО Linux",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        }
      ]
    },
    {
      "key": "19.06.2024",
      "group": "ССА-7",
      "week": "23",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "УП.02 Серверное ПО Linux",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "УП.02 Серверное ПО Linux",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "УП.02 Серверное ПО Linux",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "УП.02 Серверное ПО Linux",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        }
      ]
    },
    {
      "key": "21.06.2024",
      "group": "ССА-7",
      "week": "24",
      "schedule": [
        {
          "numOfPair": "Экзамен",
          "timeStart": "09:00",
          "timeEnd": "",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "22.06.2024",
      "group": "ССА-7",
      "week": "24",
      "schedule": [
        {
          "numOfPair": "Консультация",
          "timeStart": "09:00",
          "timeEnd": "",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        }
      ]
    },
    {
      "key": "24.06.2024",
      "group": "ССА-7",
      "week": "24",
      "schedule": [
        {
          "numOfPair": "Экзамен",
          "timeStart": "09:00",
          "timeEnd": "",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        }
      ]
    },
    {
      "key": "26.06.2024",
      "group": "ССА-7",
      "week": "24",
      "schedule": [
        {
          "numOfPair": "Консультация",
          "timeStart": "09:00",
          "timeEnd": "",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        }
      ]
    },
    {
      "key": "27.06.2024",
      "group": "ССА-7",
      "week": "24",
      "schedule": [
        {
          "numOfPair": "Экзамен",
          "timeStart": "09:00",
          "timeEnd": "",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        }
      ]
    }
  ]
  
const schedule2 = [
    {
      "key": "01.09.2022",
      "group": "ССА-7",
      "week": "1",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "Классный час",
          "timeStart": "10:00",
          "timeEnd": "",
          "predmet": "Классный час",
          "professor": "Швырина Ольга Николаевна",
          "adress": "",
          "auditory": ""
        }
      ]
    },
    {
      "key": "02.09.2022",
      "group": "ССА-7",
      "week": "1",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "327"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "03.09.2022",
      "group": "ССА-7",
      "week": "1",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Иностранный язык",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "234"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        }
      ]
    },
    {
      "key": "05.09.2022",
      "group": "ССА-7",
      "week": "1",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "06.09.2022",
      "group": "ССА-7",
      "week": "1",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Русский язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "327"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "07.09.2022",
      "group": "ССА-7",
      "week": "1",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "08.09.2022",
      "group": "ССА-7",
      "week": "2",
      "schedule": [
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "09.09.2022",
      "group": "ССА-7",
      "week": "2",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "327"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "10.09.2022",
      "group": "ССА-7",
      "week": "2",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Иностранный язык",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "234"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Астрономия",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        }
      ]
    },
    {
      "key": "12.09.2022",
      "group": "ССА-7",
      "week": "2",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Иностранный язык",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "422"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "13.09.2022",
      "group": "ССА-7",
      "week": "2",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Родной язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "327"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "327"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "14.09.2022",
      "group": "ССА-7",
      "week": "2",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        }
      ]
    },
    {
      "key": "15.09.2022",
      "group": "ССА-7",
      "week": "3",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "16.09.2022",
      "group": "ССА-7",
      "week": "3",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "327"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "17.09.2022",
      "group": "ССА-7",
      "week": "3",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Иностранный язык",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "234"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        }
      ]
    },
    {
      "key": "19.09.2022",
      "group": "ССА-7",
      "week": "3",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "20.09.2022",
      "group": "ССА-7",
      "week": "3",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Русский язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "327"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "21.09.2022",
      "group": "ССА-7",
      "week": "3",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "22.09.2022",
      "group": "ССА-7",
      "week": "4",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "",
          "auditory": ""
        }
      ]
    },
    {
      "key": "23.09.2022",
      "group": "ССА-7",
      "week": "4",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "327"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "24.09.2022",
      "group": "ССА-7",
      "week": "4",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Иностранный язык",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "234"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Астрономия",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        }
      ]
    },
    {
      "key": "26.09.2022",
      "group": "ССА-7",
      "week": "4",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Иностранный язык",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "",
          "auditory": ""
        }
      ]
    },
    {
      "key": "27.09.2022",
      "group": "ССА-7",
      "week": "4",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Родной язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "327"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "327"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "28.09.2022",
      "group": "ССА-7",
      "week": "4",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "29.09.2022",
      "group": "ССА-7",
      "week": "5",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "",
          "auditory": ""
        }
      ]
    },
    {
      "key": "30.09.2022",
      "group": "ССА-7",
      "week": "5",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "327"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "Классный час",
          "timeStart": "08:30",
          "timeEnd": "",
          "predmet": "Классный час",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "01.10.2022",
      "group": "ССА-7",
      "week": "5",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Иностранный язык",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "234"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        }
      ]
    },
    {
      "key": "03.10.2022",
      "group": "ССА-7",
      "week": "5",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "",
          "auditory": ""
        }
      ]
    },
    {
      "key": "04.10.2022",
      "group": "ССА-7",
      "week": "5",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Русский язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "327"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "05.10.2022",
      "group": "ССА-7",
      "week": "5",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:20",
          "timeEnd": "10:30",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "10:40",
          "timeEnd": "11:50",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "4",
          "timeStart": "12:00",
          "timeEnd": "13:10",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "5",
          "timeStart": "13:20",
          "timeEnd": "14:30",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "06.10.2022",
      "group": "ССА-7",
      "week": "6",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "07.10.2022",
      "group": "ССА-7",
      "week": "6",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "327"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "08.10.2022",
      "group": "ССА-7",
      "week": "6",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Иностранный язык",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "234"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Астрономия",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        }
      ]
    },
    {
      "key": "10.10.2022",
      "group": "ССА-7",
      "week": "6",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Иностранный язык",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "422"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "11.10.2022",
      "group": "ССА-7",
      "week": "6",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Родной язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "12.10.2022",
      "group": "ССА-7",
      "week": "6",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "13.10.2022",
      "group": "ССА-7",
      "week": "7",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "14.10.2022",
      "group": "ССА-7",
      "week": "7",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "Классный час",
          "timeStart": "08:30",
          "timeEnd": "",
          "predmet": "Классный час",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "15.10.2022",
      "group": "ССА-7",
      "week": "7",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Иностранный язык",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "234"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        }
      ]
    },
    {
      "key": "17.10.2022",
      "group": "ССА-7",
      "week": "7",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "18.10.2022",
      "group": "ССА-7",
      "week": "7",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Русский язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "19.10.2022",
      "group": "ССА-7",
      "week": "7",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "20.10.2022",
      "group": "ССА-7",
      "week": "8",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "21.10.2022",
      "group": "ССА-7",
      "week": "8",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "22.10.2022",
      "group": "ССА-7",
      "week": "8",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Иностранный язык",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "234"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Астрономия",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        }
      ]
    },
    {
      "key": "24.10.2022",
      "group": "ССА-7",
      "week": "8",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Иностранный язык",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "422"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "25.10.2022",
      "group": "ССА-7",
      "week": "8",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Родной язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "26.10.2022",
      "group": "ССА-7",
      "week": "8",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "27.10.2022",
      "group": "ССА-7",
      "week": "9",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "28.10.2022",
      "group": "ССА-7",
      "week": "9",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "Классный час",
          "timeStart": "08:30",
          "timeEnd": "",
          "predmet": "Классный час",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "29.10.2022",
      "group": "ССА-7",
      "week": "9",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Иностранный язык",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "234"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        }
      ]
    },
    {
      "key": "31.10.2022",
      "group": "ССА-7",
      "week": "9",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "01.11.2022",
      "group": "ССА-7",
      "week": "9",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Русский язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Иностранный язык",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "210"
        }
      ]
    },
    {
      "key": "02.11.2022",
      "group": "ССА-7",
      "week": "9",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "03.11.2022",
      "group": "ССА-7",
      "week": "10",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "10:40",
          "timeEnd": "11:50",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "4",
          "timeStart": "12:00",
          "timeEnd": "13:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "5",
          "timeStart": "13:20",
          "timeEnd": "14:30",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "07.11.2022",
      "group": "ССА-7",
      "week": "10",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Иностранный язык",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "422"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "08.11.2022",
      "group": "ССА-7",
      "week": "10",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Родной язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Астрономия",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        }
      ]
    },
    {
      "key": "09.11.2022",
      "group": "ССА-7",
      "week": "10",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "10.11.2022",
      "group": "ССА-7",
      "week": "11",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "11.11.2022",
      "group": "ССА-7",
      "week": "11",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "12.11.2022",
      "group": "ССА-7",
      "week": "11",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Иностранный язык",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "234"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        }
      ]
    },
    {
      "key": "14.11.2022",
      "group": "ССА-7",
      "week": "11",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "15.11.2022",
      "group": "ССА-7",
      "week": "11",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Русский язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "16.11.2022",
      "group": "ССА-7",
      "week": "11",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "431"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "431"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "17.11.2022",
      "group": "ССА-7",
      "week": "12",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "18.11.2022",
      "group": "ССА-7",
      "week": "12",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "19.11.2022",
      "group": "ССА-7",
      "week": "12",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Иностранный язык",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "234"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Астрономия",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        }
      ]
    },
    {
      "key": "21.11.2022",
      "group": "ССА-7",
      "week": "12",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Иностранный язык",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "422"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "22.11.2022",
      "group": "ССА-7",
      "week": "12",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Родной язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "23.11.2022",
      "group": "ССА-7",
      "week": "12",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "110"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "24.11.2022",
      "group": "ССА-7",
      "week": "13",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "25.11.2022",
      "group": "ССА-7",
      "week": "13",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "26.11.2022",
      "group": "ССА-7",
      "week": "13",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Иностранный язык",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "234"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        }
      ]
    },
    {
      "key": "28.11.2022",
      "group": "ССА-7",
      "week": "13",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "29.11.2022",
      "group": "ССА-7",
      "week": "13",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Русский язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        }
      ]
    },
    {
      "key": "30.11.2022",
      "group": "ССА-7",
      "week": "13",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "01.12.2022",
      "group": "ССА-7",
      "week": "14",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "02.12.2022",
      "group": "ССА-7",
      "week": "14",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "03.12.2022",
      "group": "ССА-7",
      "week": "14",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Иностранный язык",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "234"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Астрономия",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        }
      ]
    },
    {
      "key": "05.12.2022",
      "group": "ССА-7",
      "week": "14",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Иностранный язык",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "422"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "06.12.2022",
      "group": "ССА-7",
      "week": "14",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Родной язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "07.12.2022",
      "group": "ССА-7",
      "week": "14",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "08.12.2022",
      "group": "ССА-7",
      "week": "15",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "09.12.2022",
      "group": "ССА-7",
      "week": "15",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "10.12.2022",
      "group": "ССА-7",
      "week": "15",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Иностранный язык",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "234"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        }
      ]
    },
    {
      "key": "12.12.2022",
      "group": "ССА-7",
      "week": "15",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "13.12.2022",
      "group": "ССА-7",
      "week": "15",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Русский язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "14.12.2022",
      "group": "ССА-7",
      "week": "15",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "15.12.2022",
      "group": "ССА-7",
      "week": "16",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "16.12.2022",
      "group": "ССА-7",
      "week": "16",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "17.12.2022",
      "group": "ССА-7",
      "week": "16",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Иностранный язык",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "234"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Астрономия",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        }
      ]
    },
    {
      "key": "19.12.2022",
      "group": "ССА-7",
      "week": "16",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Иностранный язык",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "422"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "20.12.2022",
      "group": "ССА-7",
      "week": "16",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Родной язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "21.12.2022",
      "group": "ССА-7",
      "week": "16",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "313"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "22.12.2022",
      "group": "ССА-7",
      "week": "17",
      "schedule": [
        {
          "numOfPair": "Консультация",
          "timeStart": "09:00",
          "timeEnd": "",
          "predmet": "Русский язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "23.12.2022",
      "group": "ССА-7",
      "week": "17",
      "schedule": [
        {
          "numOfPair": "Экзамен",
          "timeStart": "09:00",
          "timeEnd": "",
          "predmet": "Русский язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "24.12.2022",
      "group": "ССА-7",
      "week": "17",
      "schedule": [
        {
          "numOfPair": "Консультация",
          "timeStart": "09:00",
          "timeEnd": "",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "26.12.2022",
      "group": "ССА-7",
      "week": "17",
      "schedule": [
        {
          "numOfPair": "Экзамен",
          "timeStart": "09:00",
          "timeEnd": "",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "28.12.2022",
      "group": "ССА-7",
      "week": "17",
      "schedule": [
        {
          "numOfPair": "Консультация",
          "timeStart": "09:00",
          "timeEnd": "",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        }
      ]
    },
    {
      "key": "29.12.2022",
      "group": "ССА-7",
      "week": "18",
      "schedule": [
        {
          "numOfPair": "Экзамен",
          "timeStart": "09:00",
          "timeEnd": "",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        }
      ]
    },
    {
      "key": "16.01.2023",
      "group": "ССА-7",
      "week": "1",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "17.01.2023",
      "group": "ССА-7",
      "week": "1",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "18.01.2023",
      "group": "ССА-7",
      "week": "1",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Русский язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "19.01.2023",
      "group": "ССА-7",
      "week": "2",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "20.01.2023",
      "group": "ССА-7",
      "week": "2",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "213"
        }
      ]
    },
    {
      "key": "21.01.2023",
      "group": "ССА-7",
      "week": "2",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Основы предпринимательской деятельности",
          "professor": "Шамбер Лола Низамовна",
          "adress": "Московское шоссе, 120",
          "auditory": "432"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Основы предпринимательской деятельности",
          "professor": "Шамбер Лола Низамовна",
          "adress": "Московское шоссе, 120",
          "auditory": "432"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        }
      ]
    },
    {
      "key": "23.01.2023",
      "group": "ССА-7",
      "week": "2",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "24.01.2023",
      "group": "ССА-7",
      "week": "2",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "25.01.2023",
      "group": "ССА-7",
      "week": "2",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:10",
          "predmet": "Родной язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:20",
          "timeEnd": "10:30",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "10:40",
          "timeEnd": "11:50",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "26.01.2023",
      "group": "ССА-7",
      "week": "3",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "27.01.2023",
      "group": "ССА-7",
      "week": "3",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Астрономия",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "213"
        }
      ]
    },
    {
      "key": "28.01.2023",
      "group": "ССА-7",
      "week": "3",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Основы предпринимательской деятельности",
          "professor": "Шамбер Лола Низамовна",
          "adress": "Московское шоссе, 120",
          "auditory": "432"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "30.01.2023",
      "group": "ССА-7",
      "week": "3",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "31.01.2023",
      "group": "ССА-7",
      "week": "3",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "01.02.2023",
      "group": "ССА-7",
      "week": "3",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Русский язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "02.02.2023",
      "group": "ССА-7",
      "week": "4",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "03.02.2023",
      "group": "ССА-7",
      "week": "4",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "213"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "04.02.2023",
      "group": "ССА-7",
      "week": "4",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Основы предпринимательской деятельности",
          "professor": "Шамбер Лола Низамовна",
          "adress": "Московское шоссе, 120",
          "auditory": "432"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        }
      ]
    },
    {
      "key": "06.02.2023",
      "group": "ССА-7",
      "week": "4",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "07.02.2023",
      "group": "ССА-7",
      "week": "4",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "08.02.2023",
      "group": "ССА-7",
      "week": "4",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Родной язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "09.02.2023",
      "group": "ССА-7",
      "week": "5",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "10.02.2023",
      "group": "ССА-7",
      "week": "5",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Астрономия",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "",
          "auditory": ""
        }
      ]
    },
    {
      "key": "11.02.2023",
      "group": "ССА-7",
      "week": "5",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Основы предпринимательской деятельности",
          "professor": "Шамбер Лола Низамовна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "",
          "auditory": ""
        }
      ]
    },
    {
      "key": "13.02.2023",
      "group": "ССА-7",
      "week": "5",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "14.02.2023",
      "group": "ССА-7",
      "week": "5",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "321"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "15.02.2023",
      "group": "ССА-7",
      "week": "5",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Русский язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "16.02.2023",
      "group": "ССА-7",
      "week": "6",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "17.02.2023",
      "group": "ССА-7",
      "week": "6",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "213"
        }
      ]
    },
    {
      "key": "18.02.2023",
      "group": "ССА-7",
      "week": "6",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Основы предпринимательской деятельности",
          "professor": "Шамбер Лола Низамовна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "",
          "auditory": ""
        }
      ]
    },
    {
      "key": "20.02.2023",
      "group": "ССА-7",
      "week": "6",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "21.02.2023",
      "group": "ССА-7",
      "week": "6",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "403"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "22.02.2023",
      "group": "ССА-7",
      "week": "6",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:10",
          "predmet": "Родной язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:20",
          "timeEnd": "10:30",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "10:40",
          "timeEnd": "11:50",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "25.02.2023",
      "group": "ССА-7",
      "week": "7",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Астрономия",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "",
          "auditory": ""
        }
      ]
    },
    {
      "key": "27.02.2023",
      "group": "ССА-7",
      "week": "7",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "28.02.2023",
      "group": "ССА-7",
      "week": "7",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "01.03.2023",
      "group": "ССА-7",
      "week": "7",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Русский язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "02.03.2023",
      "group": "ССА-7",
      "week": "8",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        }
      ]
    },
    {
      "key": "03.03.2023",
      "group": "ССА-7",
      "week": "8",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "213"
        }
      ]
    },
    {
      "key": "04.03.2023",
      "group": "ССА-7",
      "week": "8",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Родной язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Основы предпринимательской деятельности",
          "professor": "Шамбер Лола Низамовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        }
      ]
    },
    {
      "key": "06.03.2023",
      "group": "ССА-7",
      "week": "8",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "07.03.2023",
      "group": "ССА-7",
      "week": "8",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:20",
          "timeEnd": "10:30",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "10:40",
          "timeEnd": "11:50",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        },
        {
          "numOfPair": "4",
          "timeStart": "12:00",
          "timeEnd": "13:10",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "09.03.2023",
      "group": "ССА-7",
      "week": "9",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "10.03.2023",
      "group": "ССА-7",
      "week": "9",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Астрономия",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        }
      ]
    },
    {
      "key": "11.03.2023",
      "group": "ССА-7",
      "week": "9",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Основы предпринимательской деятельности",
          "professor": "Шамбер Лола Низамовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        }
      ]
    },
    {
      "key": "13.03.2023",
      "group": "ССА-7",
      "week": "9",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "14.03.2023",
      "group": "ССА-7",
      "week": "9",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "15.03.2023",
      "group": "ССА-7",
      "week": "9",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Русский язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "16.03.2023",
      "group": "ССА-7",
      "week": "10",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "17.03.2023",
      "group": "ССА-7",
      "week": "10",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "213"
        }
      ]
    },
    {
      "key": "18.03.2023",
      "group": "ССА-7",
      "week": "10",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Основы предпринимательской деятельности",
          "professor": "Шамбер Лола Низамовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        }
      ]
    },
    {
      "key": "20.03.2023",
      "group": "ССА-7",
      "week": "10",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "21.03.2023",
      "group": "ССА-7",
      "week": "10",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "22.03.2023",
      "group": "ССА-7",
      "week": "10",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Родной язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "23.03.2023",
      "group": "ССА-7",
      "week": "11",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "24.03.2023",
      "group": "ССА-7",
      "week": "11",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Астрономия",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "213"
        }
      ]
    },
    {
      "key": "25.03.2023",
      "group": "ССА-7",
      "week": "11",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Основы предпринимательской деятельности",
          "professor": "Шамбер Лола Низамовна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "",
          "auditory": ""
        }
      ]
    },
    {
      "key": "27.03.2023",
      "group": "ССА-7",
      "week": "11",
      "schedule": [
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "28.03.2023",
      "group": "ССА-7",
      "week": "11",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "29.03.2023",
      "group": "ССА-7",
      "week": "11",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Русский язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "30.03.2023",
      "group": "ССА-7",
      "week": "12",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "31.03.2023",
      "group": "ССА-7",
      "week": "12",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "213"
        }
      ]
    },
    {
      "key": "01.04.2023",
      "group": "ССА-7",
      "week": "12",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        },
        {
          "numOfPair": "5",
          "timeStart": "14:50",
          "timeEnd": "16:20",
          "predmet": "Основы предпринимательской деятельности",
          "professor": "Шамбер Лола Низамовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        }
      ]
    },
    {
      "key": "03.04.2023",
      "group": "ССА-7",
      "week": "12",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "04.04.2023",
      "group": "ССА-7",
      "week": "12",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "05.04.2023",
      "group": "ССА-7",
      "week": "12",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Родной язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "06.04.2023",
      "group": "ССА-7",
      "week": "13",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "07.04.2023",
      "group": "ССА-7",
      "week": "13",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Астрономия",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "213"
        }
      ]
    },
    {
      "key": "08.04.2023",
      "group": "ССА-7",
      "week": "13",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Основы предпринимательской деятельности",
          "professor": "Шамбер Лола Низамовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        }
      ]
    },
    {
      "key": "10.04.2023",
      "group": "ССА-7",
      "week": "13",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "11.04.2023",
      "group": "ССА-7",
      "week": "13",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "12.04.2023",
      "group": "ССА-7",
      "week": "13",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Русский язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "13.04.2023",
      "group": "ССА-7",
      "week": "14",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Астрономия",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "14.04.2023",
      "group": "ССА-7",
      "week": "14",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        }
      ]
    },
    {
      "key": "15.04.2023",
      "group": "ССА-7",
      "week": "14",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Основы предпринимательской деятельности",
          "professor": "Шамбер Лола Низамовна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "",
          "auditory": ""
        }
      ]
    },
    {
      "key": "17.04.2023",
      "group": "ССА-7",
      "week": "14",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "18.04.2023",
      "group": "ССА-7",
      "week": "14",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "19.04.2023",
      "group": "ССА-7",
      "week": "14",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Родной язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "20.04.2023",
      "group": "ССА-7",
      "week": "15",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "21.04.2023",
      "group": "ССА-7",
      "week": "15",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Родной язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "213"
        }
      ]
    },
    {
      "key": "22.04.2023",
      "group": "ССА-7",
      "week": "15",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        },
        {
          "numOfPair": "5",
          "timeStart": "14:50",
          "timeEnd": "16:20",
          "predmet": "Основы предпринимательской деятельности",
          "professor": "Шамбер Лола Низамовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        }
      ]
    },
    {
      "key": "24.04.2023",
      "group": "ССА-7",
      "week": "15",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "25.04.2023",
      "group": "ССА-7",
      "week": "15",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "26.04.2023",
      "group": "ССА-7",
      "week": "15",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Русский язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "27.04.2023",
      "group": "ССА-7",
      "week": "16",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "28.04.2023",
      "group": "ССА-7",
      "week": "16",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "213"
        }
      ]
    },
    {
      "key": "29.04.2023",
      "group": "ССА-7",
      "week": "16",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:20",
          "timeEnd": "10:30",
          "predmet": "Основы предпринимательской деятельности",
          "professor": "Шамбер Лола Низамовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        },
        {
          "numOfPair": "3",
          "timeStart": "10:40",
          "timeEnd": "11:50",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "12:00",
          "timeEnd": "13:10",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "221"
        }
      ]
    },
    {
      "key": "02.05.2023",
      "group": "ССА-7",
      "week": "16",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "03.05.2023",
      "group": "ССА-7",
      "week": "16",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Родной язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        }
      ]
    },
    {
      "key": "04.05.2023",
      "group": "ССА-7",
      "week": "17",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:20",
          "timeEnd": "10:30",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "10:40",
          "timeEnd": "11:50",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "05.05.2023",
      "group": "ССА-7",
      "week": "17",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Астрономия",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "213"
        }
      ]
    },
    {
      "key": "06.05.2023",
      "group": "ССА-7",
      "week": "17",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:10",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:20",
          "timeEnd": "10:30",
          "predmet": "Основы предпринимательской деятельности",
          "professor": "Шамбер Лола Низамовна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "10:40",
          "timeEnd": "11:50",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "12:00",
          "timeEnd": "13:10",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        }
      ]
    },
    {
      "key": "10.05.2023",
      "group": "ССА-7",
      "week": "17",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Русский язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        }
      ]
    },
    {
      "key": "11.05.2023",
      "group": "ССА-7",
      "week": "18",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "12.05.2023",
      "group": "ССА-7",
      "week": "18",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "110"
        }
      ]
    },
    {
      "key": "13.05.2023",
      "group": "ССА-7",
      "week": "18",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Основы предпринимательской деятельности",
          "professor": "Шамбер Лола Низамовна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "",
          "auditory": ""
        }
      ]
    },
    {
      "key": "15.05.2023",
      "group": "ССА-7",
      "week": "18",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "16.05.2023",
      "group": "ССА-7",
      "week": "18",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "17.05.2023",
      "group": "ССА-7",
      "week": "18",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Родной язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "18.05.2023",
      "group": "ССА-7",
      "week": "19",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "19.05.2023",
      "group": "ССА-7",
      "week": "19",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Астрономия",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "213"
        }
      ]
    },
    {
      "key": "20.05.2023",
      "group": "ССА-7",
      "week": "19",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Основы предпринимательской деятельности",
          "professor": "Шамбер Лола Низамовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        }
      ]
    },
    {
      "key": "22.05.2023",
      "group": "ССА-7",
      "week": "19",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "23.05.2023",
      "group": "ССА-7",
      "week": "19",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "24.05.2023",
      "group": "ССА-7",
      "week": "19",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Русский язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "25.05.2023",
      "group": "ССА-7",
      "week": "20",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        }
      ]
    },
    {
      "key": "26.05.2023",
      "group": "ССА-7",
      "week": "20",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "27.05.2023",
      "group": "ССА-7",
      "week": "20",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Основы предпринимательской деятельности",
          "professor": "Шамбер Лола Низамовна",
          "adress": "Московское шоссе, 120",
          "auditory": "432"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        }
      ]
    },
    {
      "key": "29.05.2023",
      "group": "ССА-7",
      "week": "20",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "30.05.2023",
      "group": "ССА-7",
      "week": "20",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "31.05.2023",
      "group": "ССА-7",
      "week": "20",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Родной язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "01.06.2023",
      "group": "ССА-7",
      "week": "21",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "02.06.2023",
      "group": "ССА-7",
      "week": "21",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Астрономия",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "03.06.2023",
      "group": "ССА-7",
      "week": "21",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Основы предпринимательской деятельности",
          "professor": "Шамбер Лола Низамовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        }
      ]
    },
    {
      "key": "05.06.2023",
      "group": "ССА-7",
      "week": "21",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "06.06.2023",
      "group": "ССА-7",
      "week": "21",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "07.06.2023",
      "group": "ССА-7",
      "week": "21",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Русский язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "08.06.2023",
      "group": "ССА-7",
      "week": "22",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        }
      ]
    },
    {
      "key": "09.06.2023",
      "group": "ССА-7",
      "week": "22",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "10.06.2023",
      "group": "ССА-7",
      "week": "22",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:20",
          "timeEnd": "10:30",
          "predmet": "Основы предпринимательской деятельности",
          "professor": "Шамбер Лола Низамовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        },
        {
          "numOfPair": "3",
          "timeStart": "10:40",
          "timeEnd": "11:50",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "12:00",
          "timeEnd": "13:10",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        }
      ]
    },
    {
      "key": "13.06.2023",
      "group": "ССА-7",
      "week": "22",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы предпринимательской деятельности",
          "professor": "Шамбер Лола Низамовна",
          "adress": "Московское шоссе, 120",
          "auditory": "432"
        }
      ]
    },
    {
      "key": "14.06.2023",
      "group": "ССА-7",
      "week": "22",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Родной язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        }
      ]
    },
    {
      "key": "15.06.2023",
      "group": "ССА-7",
      "week": "23",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "История",
          "professor": "Семенов Антон Сергеевич",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        }
      ]
    },
    {
      "key": "16.06.2023",
      "group": "ССА-7",
      "week": "23",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Астрономия",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        }
      ]
    },
    {
      "key": "17.06.2023",
      "group": "ССА-7",
      "week": "23",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Основы предпринимательской деятельности",
          "professor": "Шамбер Лола Низамовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        }
      ]
    },
    {
      "key": "19.06.2023",
      "group": "ССА-7",
      "week": "23",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы безопасности жизнедеятельности",
          "professor": "Семенов Владимир Александрович",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Химия",
          "professor": "Андреева Елена Сергеевна",
          "adress": "Московское шоссе, 120",
          "auditory": "229"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "20.06.2023",
      "group": "ССА-7",
      "week": "23",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Обществознание",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Литература",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информатика",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "21.06.2023",
      "group": "ССА-7",
      "week": "23",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Русский язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "22.06.2023",
      "group": "ССА-7",
      "week": "24",
      "schedule": [
        {
          "numOfPair": "Консультация",
          "timeStart": "10:30",
          "timeEnd": "",
          "predmet": "Русский язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "23.06.2023",
      "group": "ССА-7",
      "week": "24",
      "schedule": [
        {
          "numOfPair": "Экзамен",
          "timeStart": "13:00",
          "timeEnd": "",
          "predmet": "Русский язык",
          "professor": "Филатова Дарья Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "24.06.2023",
      "group": "ССА-7",
      "week": "24",
      "schedule": [
        {
          "numOfPair": "Консультация",
          "timeStart": "09:00",
          "timeEnd": "",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "26.06.2023",
      "group": "ССА-7",
      "week": "24",
      "schedule": [
        {
          "numOfPair": "Экзамен",
          "timeStart": "10:30",
          "timeEnd": "",
          "predmet": "Математика",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "250"
        }
      ]
    },
    {
      "key": "27.06.2023",
      "group": "ССА-7",
      "week": "24",
      "schedule": [
        {
          "numOfPair": "Консультация",
          "timeStart": "09:00",
          "timeEnd": "",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        }
      ]
    },
    {
      "key": "28.06.2023",
      "group": "ССА-7",
      "week": "24",
      "schedule": [
        {
          "numOfPair": "Экзамен",
          "timeStart": "09:00",
          "timeEnd": "",
          "predmet": "Физика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "243"
        }
      ]
    },
    {
      "key": "29.06.2023",
      "group": "ССА-7",
      "week": "25",
      "schedule": [
        {
          "numOfPair": "Экзамен",
          "timeStart": "09:00",
          "timeEnd": "",
          "predmet": "Иностранный язык",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        }
      ]
    },
    {
      "key": "01.09.2023",
      "group": "ССА-7",
      "week": "1",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        }
      ]
    },
    {
      "key": "02.09.2023",
      "group": "ССА-7",
      "week": "1",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:10",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "2",
          "timeStart": "09:20",
          "timeEnd": "10:30",
          "predmet": "История",
          "professor": "Апанасевич Людмила Фазыляновна",
          "adress": "Московское шоссе, 120",
          "auditory": "401"
        },
        {
          "numOfPair": "3",
          "timeStart": "10:40",
          "timeEnd": "11:50",
          "predmet": "Основы электротехники",
          "professor": "Першина Елена Викторовна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        }
      ]
    },
    {
      "key": "04.09.2023",
      "group": "ССА-7",
      "week": "1",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "",
          "auditory": ""
        }
      ]
    },
    {
      "key": "05.09.2023",
      "group": "ССА-7",
      "week": "1",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Психология общения",
          "professor": "Гордеев Александр Валентинович",
          "adress": "Московское шоссе, 120",
          "auditory": "313"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы философии",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        }
      ]
    },
    {
      "key": "06.09.2023",
      "group": "ССА-7",
      "week": "1",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Основы философии",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Психология общения",
          "professor": "Гордеев Александр Валентинович",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Дискретная математика",
          "professor": "Мусаева Сона Алимовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        }
      ]
    },
    {
      "key": "07.09.2023",
      "group": "ССА-7",
      "week": "1",
      "schedule": [
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физическая культура",
          "professor": "Никифоров Михаил Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "6",
          "timeStart": "16:50",
          "timeEnd": "18:20",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "08.09.2023",
      "group": "ССА-7",
      "week": "2",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "",
          "auditory": ""
        }
      ]
    },
    {
      "key": "09.09.2023",
      "group": "ССА-7",
      "week": "2",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Апанасевич Людмила Фазыляновна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Першина Елена Викторовна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "",
          "auditory": ""
        }
      ]
    },
    {
      "key": "11.09.2023",
      "group": "ССА-7",
      "week": "2",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "12.09.2023",
      "group": "ССА-7",
      "week": "2",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Психология общения",
          "professor": "Гордеев Александр Валентинович",
          "adress": "Московское шоссе, 120",
          "auditory": "313"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы философии",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Дискретная математика",
          "professor": "Мусаева Сона Алимовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        }
      ]
    },
    {
      "key": "13.09.2023",
      "group": "ССА-7",
      "week": "2",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "История",
          "professor": "Апанасевич Людмила Фазыляновна",
          "adress": "Московское шоссе, 120",
          "auditory": "401"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Дискретная математика",
          "professor": "Мусаева Сона Алимовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "14.09.2023",
      "group": "ССА-7",
      "week": "2",
      "schedule": [
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Дискретная математика",
          "professor": "Мусаева Сона Алимовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "6",
          "timeStart": "16:50",
          "timeEnd": "18:20",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "15.09.2023",
      "group": "ССА-7",
      "week": "3",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        }
      ]
    },
    {
      "key": "16.09.2023",
      "group": "ССА-7",
      "week": "3",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "324"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Апанасевич Людмила Фазыляновна",
          "adress": "Московское шоссе, 120",
          "auditory": "401"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Першина Елена Викторовна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        }
      ]
    },
    {
      "key": "18.09.2023",
      "group": "ССА-7",
      "week": "3",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Психология общения",
          "professor": "Гордеев Александр Валентинович",
          "adress": "Московское шоссе, 120",
          "auditory": "221"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "19.09.2023",
      "group": "ССА-7",
      "week": "3",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Психология общения",
          "professor": "Гордеев Александр Валентинович",
          "adress": "Московское шоссе, 120",
          "auditory": "313"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы философии",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        }
      ]
    },
    {
      "key": "20.09.2023",
      "group": "ССА-7",
      "week": "3",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Основы философии",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Психология общения",
          "professor": "Гордеев Александр Валентинович",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Дискретная математика",
          "professor": "Мусаева Сона Алимовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        }
      ]
    },
    {
      "key": "21.09.2023",
      "group": "ССА-7",
      "week": "3",
      "schedule": [
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Психология общения",
          "professor": "Гордеев Александр Валентинович",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "6",
          "timeStart": "16:50",
          "timeEnd": "18:20",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "22.09.2023",
      "group": "ССА-7",
      "week": "4",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "327"
        }
      ]
    },
    {
      "key": "23.09.2023",
      "group": "ССА-7",
      "week": "4",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "324"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Апанасевич Людмила Фазыляновна",
          "adress": "Московское шоссе, 120",
          "auditory": "401"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Першина Елена Викторовна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        }
      ]
    },
    {
      "key": "25.09.2023",
      "group": "ССА-7",
      "week": "4",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Психология общения",
          "professor": "Гордеев Александр Валентинович",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        }
      ]
    },
    {
      "key": "26.09.2023",
      "group": "ССА-7",
      "week": "4",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Психология общения",
          "professor": "Гордеев Александр Валентинович",
          "adress": "Московское шоссе, 120",
          "auditory": "313"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы философии",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Дискретная математика",
          "professor": "Мусаева Сона Алимовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        }
      ]
    },
    {
      "key": "27.09.2023",
      "group": "ССА-7",
      "week": "4",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "История",
          "professor": "Апанасевич Людмила Фазыляновна",
          "adress": "Московское шоссе, 120",
          "auditory": "401"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Дискретная математика",
          "professor": "Мусаева Сона Алимовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "28.09.2023",
      "group": "ССА-7",
      "week": "4",
      "schedule": [
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Дискретная математика",
          "professor": "Мусаева Сона Алимовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "6",
          "timeStart": "16:50",
          "timeEnd": "18:20",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "29.09.2023",
      "group": "ССА-7",
      "week": "5",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        }
      ]
    },
    {
      "key": "30.09.2023",
      "group": "ССА-7",
      "week": "5",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "324"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Апанасевич Людмила Фазыляновна",
          "adress": "Московское шоссе, 120",
          "auditory": "401"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Першина Елена Викторовна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        }
      ]
    },
    {
      "key": "02.10.2023",
      "group": "ССА-7",
      "week": "5",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Психология общения",
          "professor": "Гордеев Александр Валентинович",
          "adress": "Московское шоссе, 120",
          "auditory": "221"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "03.10.2023",
      "group": "ССА-7",
      "week": "5",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Психология общения",
          "professor": "Гордеев Александр Валентинович",
          "adress": "Московское шоссе, 120",
          "auditory": "313"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы философии",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        }
      ]
    },
    {
      "key": "04.10.2023",
      "group": "ССА-7",
      "week": "5",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Психология общения",
          "professor": "Гордеев Александр Валентинович",
          "adress": "Московское шоссе, 120",
          "auditory": "230"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Дискретная математика",
          "professor": "Мусаева Сона Алимовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "05.10.2023",
      "group": "ССА-7",
      "week": "5",
      "schedule": [
        {
          "numOfPair": "4",
          "timeStart": "12:00",
          "timeEnd": "13:10",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "5",
          "timeStart": "13:20",
          "timeEnd": "14:30",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "6",
          "timeStart": "14:40",
          "timeEnd": "15:50",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "06.10.2023",
      "group": "ССА-7",
      "week": "6",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        }
      ]
    },
    {
      "key": "07.10.2023",
      "group": "ССА-7",
      "week": "6",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "324"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Апанасевич Людмила Фазыляновна",
          "adress": "Московское шоссе, 120",
          "auditory": "401"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Першина Елена Викторовна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        }
      ]
    },
    {
      "key": "09.10.2023",
      "group": "ССА-7",
      "week": "6",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        }
      ]
    },
    {
      "key": "10.10.2023",
      "group": "ССА-7",
      "week": "6",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Психология общения",
          "professor": "Гордеев Александр Валентинович",
          "adress": "Московское шоссе, 120",
          "auditory": "313"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы философии",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Дискретная математика",
          "professor": "Мусаева Сона Алимовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        }
      ]
    },
    {
      "key": "11.10.2023",
      "group": "ССА-7",
      "week": "6",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Основы философии",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "История",
          "professor": "Апанасевич Людмила Фазыляновна",
          "adress": "Московское шоссе, 120",
          "auditory": "401"
        }
      ]
    },
    {
      "key": "12.10.2023",
      "group": "ССА-7",
      "week": "6",
      "schedule": [
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "6",
          "timeStart": "16:50",
          "timeEnd": "18:20",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "13.10.2023",
      "group": "ССА-7",
      "week": "7",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        }
      ]
    },
    {
      "key": "14.10.2023",
      "group": "ССА-7",
      "week": "7",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "324"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Апанасевич Людмила Фазыляновна",
          "adress": "Московское шоссе, 120",
          "auditory": "401"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Першина Елена Викторовна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        }
      ]
    },
    {
      "key": "16.10.2023",
      "group": "ССА-7",
      "week": "7",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "204"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "17.10.2023",
      "group": "ССА-7",
      "week": "7",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Психология общения",
          "professor": "Гордеев Александр Валентинович",
          "adress": "Московское шоссе, 120",
          "auditory": "313"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы философии",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        }
      ]
    },
    {
      "key": "18.10.2023",
      "group": "ССА-7",
      "week": "7",
      "schedule": [
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Дискретная математика",
          "professor": "Мусаева Сона Алимовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "19.10.2023",
      "group": "ССА-7",
      "week": "7",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Дискретная математика",
          "professor": "Мусаева Сона Алимовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "6",
          "timeStart": "16:50",
          "timeEnd": "18:20",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "20.10.2023",
      "group": "ССА-7",
      "week": "8",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Психология общения",
          "professor": "Гордеев Александр Валентинович",
          "adress": "Московское шоссе, 120",
          "auditory": "309"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        }
      ]
    },
    {
      "key": "21.10.2023",
      "group": "ССА-7",
      "week": "8",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "324"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Апанасевич Людмила Фазыляновна",
          "adress": "Московское шоссе, 120",
          "auditory": "401"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Першина Елена Викторовна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        }
      ]
    },
    {
      "key": "23.10.2023",
      "group": "ССА-7",
      "week": "8",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        }
      ]
    },
    {
      "key": "24.10.2023",
      "group": "ССА-7",
      "week": "8",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "313"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы философии",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "25.10.2023",
      "group": "ССА-7",
      "week": "8",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Основы философии",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "История",
          "professor": "Апанасевич Людмила Фазыляновна",
          "adress": "Московское шоссе, 120",
          "auditory": "401"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Дискретная математика",
          "professor": "Мусаева Сона Алимовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        }
      ]
    },
    {
      "key": "26.10.2023",
      "group": "ССА-7",
      "week": "8",
      "schedule": [
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "6",
          "timeStart": "16:50",
          "timeEnd": "18:20",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "27.10.2023",
      "group": "ССА-7",
      "week": "9",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        }
      ]
    },
    {
      "key": "28.10.2023",
      "group": "ССА-7",
      "week": "9",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "324"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Апанасевич Людмила Фазыляновна",
          "adress": "Московское шоссе, 120",
          "auditory": "401"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Першина Елена Викторовна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        }
      ]
    },
    {
      "key": "30.10.2023",
      "group": "ССА-7",
      "week": "9",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "31.10.2023",
      "group": "ССА-7",
      "week": "9",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Психология общения",
          "professor": "Гордеев Александр Валентинович",
          "adress": "Московское шоссе, 120",
          "auditory": "313"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы философии",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        }
      ]
    },
    {
      "key": "01.11.2023",
      "group": "ССА-7",
      "week": "9",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Психология общения",
          "professor": "Гордеев Александр Валентинович",
          "adress": "Московское шоссе, 120",
          "auditory": "309"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Дискретная математика",
          "professor": "Мусаева Сона Алимовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "02.11.2023",
      "group": "ССА-7",
      "week": "9",
      "schedule": [
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "6",
          "timeStart": "16:50",
          "timeEnd": "18:20",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "03.11.2023",
      "group": "ССА-7",
      "week": "10",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:10",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:20",
          "timeEnd": "10:30",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        }
      ]
    },
    {
      "key": "06.11.2023",
      "group": "ССА-7",
      "week": "10",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:20",
          "timeEnd": "10:30",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "3",
          "timeStart": "10:40",
          "timeEnd": "11:50",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "4",
          "timeStart": "12:00",
          "timeEnd": "13:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "13:20",
          "timeEnd": "14:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        }
      ]
    },
    {
      "key": "07.11.2023",
      "group": "ССА-7",
      "week": "10",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Психология общения",
          "professor": "Гордеев Александр Валентинович",
          "adress": "Московское шоссе, 120",
          "auditory": "313"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы философии",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Дискретная математика",
          "professor": "Мусаева Сона Алимовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        }
      ]
    },
    {
      "key": "08.11.2023",
      "group": "ССА-7",
      "week": "10",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Основы философии",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "История",
          "professor": "Апанасевич Людмила Фазыляновна",
          "adress": "Московское шоссе, 120",
          "auditory": "401"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Дискретная математика",
          "professor": "Мусаева Сона Алимовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        }
      ]
    },
    {
      "key": "09.11.2023",
      "group": "ССА-7",
      "week": "10",
      "schedule": [
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "6",
          "timeStart": "16:50",
          "timeEnd": "18:20",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "10.11.2023",
      "group": "ССА-7",
      "week": "11",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        }
      ]
    },
    {
      "key": "11.11.2023",
      "group": "ССА-7",
      "week": "11",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Апанасевич Людмила Фазыляновна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Першина Елена Викторовна",
          "adress": "",
          "auditory": ""
        }
      ]
    },
    {
      "key": "13.11.2023",
      "group": "ССА-7",
      "week": "11",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "14.11.2023",
      "group": "ССА-7",
      "week": "11",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Психология общения",
          "professor": "Гордеев Александр Валентинович",
          "adress": "Московское шоссе, 120",
          "auditory": "313"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы философии",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        }
      ]
    },
    {
      "key": "15.11.2023",
      "group": "ССА-7",
      "week": "11",
      "schedule": [
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Дискретная математика",
          "professor": "Мусаева Сона Алимовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "16.11.2023",
      "group": "ССА-7",
      "week": "11",
      "schedule": [
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "6",
          "timeStart": "16:50",
          "timeEnd": "18:20",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "17.11.2023",
      "group": "ССА-7",
      "week": "12",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Психология общения",
          "professor": "Гордеев Александр Валентинович",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        }
      ]
    },
    {
      "key": "18.11.2023",
      "group": "ССА-7",
      "week": "12",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Апанасевич Людмила Фазыляновна",
          "adress": "Московское шоссе, 120",
          "auditory": "401"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Першина Елена Викторовна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        }
      ]
    },
    {
      "key": "20.11.2023",
      "group": "ССА-7",
      "week": "12",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы философии",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        }
      ]
    },
    {
      "key": "21.11.2023",
      "group": "ССА-7",
      "week": "12",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Психология общения",
          "professor": "Гордеев Александр Валентинович",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы философии",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Дискретная математика",
          "professor": "Мусаева Сона Алимовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        }
      ]
    },
    {
      "key": "22.11.2023",
      "group": "ССА-7",
      "week": "12",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "133"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Основы философии",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "История",
          "professor": "Апанасевич Людмила Фазыляновна",
          "adress": "Московское шоссе, 120",
          "auditory": "401"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Дискретная математика",
          "professor": "Мусаева Сона Алимовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        }
      ]
    },
    {
      "key": "23.11.2023",
      "group": "ССА-7",
      "week": "12",
      "schedule": [
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "6",
          "timeStart": "16:50",
          "timeEnd": "18:20",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "24.11.2023",
      "group": "ССА-7",
      "week": "13",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        }
      ]
    },
    {
      "key": "25.11.2023",
      "group": "ССА-7",
      "week": "13",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "324"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Апанасевич Людмила Фазыляновна",
          "adress": "Московское шоссе, 120",
          "auditory": "401"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Першина Елена Викторовна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        }
      ]
    },
    {
      "key": "27.11.2023",
      "group": "ССА-7",
      "week": "13",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "28.11.2023",
      "group": "ССА-7",
      "week": "13",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Психология общения",
          "professor": "Гордеев Александр Валентинович",
          "adress": "Московское шоссе, 120",
          "auditory": "313"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы философии",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        }
      ]
    },
    {
      "key": "29.11.2023",
      "group": "ССА-7",
      "week": "13",
      "schedule": [
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Дискретная математика",
          "professor": "Мусаева Сона Алимовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "6",
          "timeStart": "16:50",
          "timeEnd": "18:20",
          "predmet": "Психология общения",
          "professor": "Гордеев Александр Валентинович",
          "adress": "Московское шоссе, 120",
          "auditory": "312"
        }
      ]
    },
    {
      "key": "30.11.2023",
      "group": "ССА-7",
      "week": "13",
      "schedule": [
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "6",
          "timeStart": "16:50",
          "timeEnd": "18:20",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "01.12.2023",
      "group": "ССА-7",
      "week": "14",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        }
      ]
    },
    {
      "key": "02.12.2023",
      "group": "ССА-7",
      "week": "14",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "324"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Апанасевич Людмила Фазыляновна",
          "adress": "Московское шоссе, 120",
          "auditory": "401"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Першина Елена Викторовна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        }
      ]
    },
    {
      "key": "04.12.2023",
      "group": "ССА-7",
      "week": "14",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "207"
        }
      ]
    },
    {
      "key": "05.12.2023",
      "group": "ССА-7",
      "week": "14",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Психология общения",
          "professor": "Гордеев Александр Валентинович",
          "adress": "Московское шоссе, 120",
          "auditory": "313"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы философии",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Дискретная математика",
          "professor": "Мусаева Сона Алимовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        }
      ]
    },
    {
      "key": "06.12.2023",
      "group": "ССА-7",
      "week": "14",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Основы философии",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "История",
          "professor": "Апанасевич Людмила Фазыляновна",
          "adress": "Московское шоссе, 120",
          "auditory": "401"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Дискретная математика",
          "professor": "Мусаева Сона Алимовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        }
      ]
    },
    {
      "key": "07.12.2023",
      "group": "ССА-7",
      "week": "14",
      "schedule": [
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "6",
          "timeStart": "16:50",
          "timeEnd": "18:20",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "08.12.2023",
      "group": "ССА-7",
      "week": "15",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        }
      ]
    },
    {
      "key": "09.12.2023",
      "group": "ССА-7",
      "week": "15",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "324"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Апанасевич Людмила Фазыляновна",
          "adress": "Московское шоссе, 120",
          "auditory": "401"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Першина Елена Викторовна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        }
      ]
    },
    {
      "key": "11.12.2023",
      "group": "ССА-7",
      "week": "15",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "12.12.2023",
      "group": "ССА-7",
      "week": "15",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы философии",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        }
      ]
    },
    {
      "key": "13.12.2023",
      "group": "ССА-7",
      "week": "15",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Дискретная математика",
          "professor": "Мусаева Сона Алимовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        }
      ]
    },
    {
      "key": "14.12.2023",
      "group": "ССА-7",
      "week": "15",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "15.12.2023",
      "group": "ССА-7",
      "week": "16",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:10",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "133"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:20",
          "timeEnd": "10:30",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        }
      ]
    },
    {
      "key": "16.12.2023",
      "group": "ССА-7",
      "week": "16",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "133"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "История",
          "professor": "Апанасевич Людмила Фазыляновна",
          "adress": "Московское шоссе, 120",
          "auditory": "401"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Першина Елена Викторовна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "133"
        }
      ]
    },
    {
      "key": "18.12.2023",
      "group": "ССА-7",
      "week": "16",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "19.12.2023",
      "group": "ССА-7",
      "week": "16",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы философии",
          "professor": "Тананыхина Надежда Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "402"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Дискретная математика",
          "professor": "Мусаева Сона Алимовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        }
      ]
    },
    {
      "key": "20.12.2023",
      "group": "ССА-7",
      "week": "16",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "История",
          "professor": "Апанасевич Людмила Фазыляновна",
          "adress": "Московское шоссе, 120",
          "auditory": "401"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Воронцова Екатерина Владиславовна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        }
      ]
    },
    {
      "key": "21.12.2023",
      "group": "ССА-7",
      "week": "16",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "22.12.2023",
      "group": "ССА-7",
      "week": "17",
      "schedule": [
        {
          "numOfPair": "Консультация",
          "timeStart": "09:00",
          "timeEnd": "",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "133"
        }
      ]
    },
    {
      "key": "23.12.2023",
      "group": "ССА-7",
      "week": "17",
      "schedule": [
        {
          "numOfPair": "Экзамен",
          "timeStart": "09:00",
          "timeEnd": "",
          "predmet": "Операционные системы и среды",
          "professor": "Алёхин Иван Николаевич",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        }
      ]
    },
    {
      "key": "25.12.2023",
      "group": "ССА-7",
      "week": "17",
      "schedule": [
        {
          "numOfPair": "Консультация",
          "timeStart": "09:00",
          "timeEnd": "",
          "predmet": "Дискретная математика с элементами математической логики",
          "professor": "Мусаева Сона Алимовна",
          "adress": "Московское шоссе, 120",
          "auditory": "433"
        }
      ]
    },
    {
      "key": "26.12.2023",
      "group": "ССА-7",
      "week": "17",
      "schedule": [
        {
          "numOfPair": "Экзамен",
          "timeStart": "10:30",
          "timeEnd": "",
          "predmet": "Дискретная математика с элементами математической логики",
          "professor": "Мусаева Сона Алимовна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "12.01.2024",
      "group": "ССА-7",
      "week": "1",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        }
      ]
    },
    {
      "key": "13.01.2024",
      "group": "ССА-7",
      "week": "1",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Першина Елена Викторовна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        }
      ]
    },
    {
      "key": "15.01.2024",
      "group": "ССА-7",
      "week": "1",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "МДК.02.02 Программное обеспечение компьютерных сетей",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "16.01.2024",
      "group": "ССА-7",
      "week": "1",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "17.01.2024",
      "group": "ССА-7",
      "week": "1",
      "schedule": [
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "18.01.2024",
      "group": "ССА-7",
      "week": "1",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "МДК.02.01 Администрирование сетевых операционных систем",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "19.01.2024",
      "group": "ССА-7",
      "week": "2",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        }
      ]
    },
    {
      "key": "20.01.2024",
      "group": "ССА-7",
      "week": "2",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Першина Елена Викторовна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        }
      ]
    },
    {
      "key": "22.01.2024",
      "group": "ССА-7",
      "week": "2",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "МДК.02.02 Программное обеспечение компьютерных сетей",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "23.01.2024",
      "group": "ССА-7",
      "week": "2",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Основы электротехники",
          "professor": "Першина Елена Викторовна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        }
      ]
    },
    {
      "key": "24.01.2024",
      "group": "ССА-7",
      "week": "2",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "25.01.2024",
      "group": "ССА-7",
      "week": "2",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "МДК.02.01 Администрирование сетевых операционных систем",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы электротехники",
          "professor": "Першина Елена Викторовна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        }
      ]
    },
    {
      "key": "26.01.2024",
      "group": "ССА-7",
      "week": "3",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "131"
        }
      ]
    },
    {
      "key": "27.01.2024",
      "group": "ССА-7",
      "week": "3",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Першина Елена Викторовна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        }
      ]
    },
    {
      "key": "29.01.2024",
      "group": "ССА-7",
      "week": "3",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:20",
          "timeEnd": "10:30",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "3",
          "timeStart": "10:40",
          "timeEnd": "11:50",
          "predmet": "МДК.02.02 Программное обеспечение компьютерных сетей",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "4",
          "timeStart": "12:00",
          "timeEnd": "13:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "13:20",
          "timeEnd": "14:30",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "30.01.2024",
      "group": "ССА-7",
      "week": "3",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        }
      ]
    },
    {
      "key": "31.01.2024",
      "group": "ССА-7",
      "week": "3",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "01.02.2024",
      "group": "ССА-7",
      "week": "3",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "МДК.02.01 Администрирование сетевых операционных систем",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "02.02.2024",
      "group": "ССА-7",
      "week": "4",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        }
      ]
    },
    {
      "key": "03.02.2024",
      "group": "ССА-7",
      "week": "4",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Коновалова Екатерина Васильевна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        }
      ]
    },
    {
      "key": "05.02.2024",
      "group": "ССА-7",
      "week": "4",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "МДК.02.02 Программное обеспечение компьютерных сетей",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "06.02.2024",
      "group": "ССА-7",
      "week": "4",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        }
      ]
    },
    {
      "key": "07.02.2024",
      "group": "ССА-7",
      "week": "4",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "08.02.2024",
      "group": "ССА-7",
      "week": "4",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "МДК.02.01 Администрирование сетевых операционных систем",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы электротехники",
          "professor": "Коновалова Екатерина Васильевна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы электротехники",
          "professor": "Коновалова Екатерина Васильевна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        }
      ]
    },
    {
      "key": "09.02.2024",
      "group": "ССА-7",
      "week": "5",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        }
      ]
    },
    {
      "key": "10.02.2024",
      "group": "ССА-7",
      "week": "5",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Коновалова Екатерина Васильевна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        }
      ]
    },
    {
      "key": "12.02.2024",
      "group": "ССА-7",
      "week": "5",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "МДК.02.02 Программное обеспечение компьютерных сетей",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "13.02.2024",
      "group": "ССА-7",
      "week": "5",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        }
      ]
    },
    {
      "key": "14.02.2024",
      "group": "ССА-7",
      "week": "5",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "15.02.2024",
      "group": "ССА-7",
      "week": "5",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "МДК.02.01 Администрирование сетевых операционных систем",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "16.02.2024",
      "group": "ССА-7",
      "week": "6",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        }
      ]
    },
    {
      "key": "17.02.2024",
      "group": "ССА-7",
      "week": "6",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Коновалова Екатерина Васильевна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "",
          "auditory": ""
        }
      ]
    },
    {
      "key": "19.02.2024",
      "group": "ССА-7",
      "week": "6",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "МДК.02.02 Программное обеспечение компьютерных сетей",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "20.02.2024",
      "group": "ССА-7",
      "week": "6",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        }
      ]
    },
    {
      "key": "21.02.2024",
      "group": "ССА-7",
      "week": "6",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "22.02.2024",
      "group": "ССА-7",
      "week": "6",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:10",
          "predmet": "МДК.02.01 Администрирование сетевых операционных систем",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:20",
          "timeEnd": "10:30",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "3",
          "timeStart": "10:40",
          "timeEnd": "11:50",
          "predmet": "Основы электротехники",
          "professor": "Коновалова Екатерина Васильевна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        },
        {
          "numOfPair": "4",
          "timeStart": "12:00",
          "timeEnd": "13:10",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        }
      ]
    },
    {
      "key": "26.02.2024",
      "group": "ССА-7",
      "week": "7",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "МДК.02.02 Программное обеспечение компьютерных сетей",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "27.02.2024",
      "group": "ССА-7",
      "week": "7",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        }
      ]
    },
    {
      "key": "28.02.2024",
      "group": "ССА-7",
      "week": "7",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "29.02.2024",
      "group": "ССА-7",
      "week": "7",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "МДК.02.01 Администрирование сетевых операционных систем",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "01.03.2024",
      "group": "ССА-7",
      "week": "8",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        }
      ]
    },
    {
      "key": "02.03.2024",
      "group": "ССА-7",
      "week": "8",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Коновалова Екатерина Васильевна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        }
      ]
    },
    {
      "key": "04.03.2024",
      "group": "ССА-7",
      "week": "8",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "МДК.02.02 Программное обеспечение компьютерных сетей",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "05.03.2024",
      "group": "ССА-7",
      "week": "8",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        }
      ]
    },
    {
      "key": "06.03.2024",
      "group": "ССА-7",
      "week": "8",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "07.03.2024",
      "group": "ССА-7",
      "week": "8",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:10",
          "predmet": "МДК.02.01 Администрирование сетевых операционных систем",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:20",
          "timeEnd": "10:30",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "3",
          "timeStart": "10:40",
          "timeEnd": "11:50",
          "predmet": "Основы электротехники",
          "professor": "Коновалова Екатерина Васильевна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        }
      ]
    },
    {
      "key": "11.03.2024",
      "group": "ССА-7",
      "week": "9",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "МДК.02.02 Программное обеспечение компьютерных сетей",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "101"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "12.03.2024",
      "group": "ССА-7",
      "week": "9",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "13.03.2024",
      "group": "ССА-7",
      "week": "9",
      "schedule": [
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "14.03.2024",
      "group": "ССА-7",
      "week": "9",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "МДК.02.01 Администрирование сетевых операционных систем",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "15.03.2024",
      "group": "ССА-7",
      "week": "10",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        }
      ]
    },
    {
      "key": "16.03.2024",
      "group": "ССА-7",
      "week": "10",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Коновалова Екатерина Васильевна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "",
          "auditory": ""
        }
      ]
    },
    {
      "key": "18.03.2024",
      "group": "ССА-7",
      "week": "10",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "МДК.02.02 Программное обеспечение компьютерных сетей",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "19.03.2024",
      "group": "ССА-7",
      "week": "10",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "133"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "20.03.2024",
      "group": "ССА-7",
      "week": "10",
      "schedule": [
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "21.03.2024",
      "group": "ССА-7",
      "week": "10",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "МДК.02.01 Администрирование сетевых операционных систем",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы электротехники",
          "professor": "Коновалова Екатерина Васильевна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        }
      ]
    },
    {
      "key": "22.03.2024",
      "group": "ССА-7",
      "week": "11",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        }
      ]
    },
    {
      "key": "23.03.2024",
      "group": "ССА-7",
      "week": "11",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Коновалова Екатерина Васильевна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        }
      ]
    },
    {
      "key": "25.03.2024",
      "group": "ССА-7",
      "week": "11",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "МДК.02.02 Программное обеспечение компьютерных сетей",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "26.03.2024",
      "group": "ССА-7",
      "week": "11",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "27.03.2024",
      "group": "ССА-7",
      "week": "11",
      "schedule": [
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "28.03.2024",
      "group": "ССА-7",
      "week": "11",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "МДК.02.01 Администрирование сетевых операционных систем",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "29.03.2024",
      "group": "ССА-7",
      "week": "12",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "324"
        }
      ]
    },
    {
      "key": "30.03.2024",
      "group": "ССА-7",
      "week": "12",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Коновалова Екатерина Васильевна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "",
          "auditory": ""
        }
      ]
    },
    {
      "key": "01.04.2024",
      "group": "ССА-7",
      "week": "12",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "МДК.02.02 Программное обеспечение компьютерных сетей",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        }
      ]
    },
    {
      "key": "02.04.2024",
      "group": "ССА-7",
      "week": "12",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "218"
        }
      ]
    },
    {
      "key": "03.04.2024",
      "group": "ССА-7",
      "week": "12",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "04.04.2024",
      "group": "ССА-7",
      "week": "12",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "МДК.02.01 Администрирование сетевых операционных систем",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы электротехники",
          "professor": "Коновалова Екатерина Васильевна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        }
      ]
    },
    {
      "key": "05.04.2024",
      "group": "ССА-7",
      "week": "13",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        }
      ]
    },
    {
      "key": "06.04.2024",
      "group": "ССА-7",
      "week": "13",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Коновалова Екатерина Васильевна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        }
      ]
    },
    {
      "key": "08.04.2024",
      "group": "ССА-7",
      "week": "13",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "МДК.02.02 Программное обеспечение компьютерных сетей",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "09.04.2024",
      "group": "ССА-7",
      "week": "13",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        }
      ]
    },
    {
      "key": "10.04.2024",
      "group": "ССА-7",
      "week": "13",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "11.04.2024",
      "group": "ССА-7",
      "week": "13",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "МДК.02.01 Администрирование сетевых операционных систем",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "12.04.2024",
      "group": "ССА-7",
      "week": "14",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        }
      ]
    },
    {
      "key": "13.04.2024",
      "group": "ССА-7",
      "week": "14",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Коновалова Екатерина Васильевна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        }
      ]
    },
    {
      "key": "15.04.2024",
      "group": "ССА-7",
      "week": "14",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "МДК.02.02 Программное обеспечение компьютерных сетей",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "16.04.2024",
      "group": "ССА-7",
      "week": "14",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        }
      ]
    },
    {
      "key": "17.04.2024",
      "group": "ССА-7",
      "week": "14",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "18.04.2024",
      "group": "ССА-7",
      "week": "14",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "МДК.02.01 Администрирование сетевых операционных систем",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы электротехники",
          "professor": "Коновалова Екатерина Васильевна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        }
      ]
    },
    {
      "key": "19.04.2024",
      "group": "ССА-7",
      "week": "15",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "20.04.2024",
      "group": "ССА-7",
      "week": "15",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Коновалова Екатерина Васильевна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "",
          "auditory": ""
        }
      ]
    },
    {
      "key": "22.04.2024",
      "group": "ССА-7",
      "week": "15",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "МДК.02.02 Программное обеспечение компьютерных сетей",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "23.04.2024",
      "group": "ССА-7",
      "week": "15",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        }
      ]
    },
    {
      "key": "24.04.2024",
      "group": "ССА-7",
      "week": "15",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "25.04.2024",
      "group": "ССА-7",
      "week": "15",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "МДК.02.01 Администрирование сетевых операционных систем",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "26.04.2024",
      "group": "ССА-7",
      "week": "16",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        }
      ]
    },
    {
      "key": "27.04.2024",
      "group": "ССА-7",
      "week": "16",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "416"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "02.05.2024",
      "group": "ССА-7",
      "week": "16",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "МДК.02.01 Администрирование сетевых операционных систем",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы электротехники",
          "professor": "Коновалова Екатерина Васильевна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы электротехники",
          "professor": "Коновалова Екатерина Васильевна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        }
      ]
    },
    {
      "key": "03.05.2024",
      "group": "ССА-7",
      "week": "17",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        }
      ]
    },
    {
      "key": "04.05.2024",
      "group": "ССА-7",
      "week": "17",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Коновалова Екатерина Васильевна",
          "adress": "Московское шоссе, 120",
          "auditory": "311"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        }
      ]
    },
    {
      "key": "06.05.2024",
      "group": "ССА-7",
      "week": "17",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "432"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "МДК.02.02 Программное обеспечение компьютерных сетей",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "07.05.2024",
      "group": "ССА-7",
      "week": "17",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:10",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:20",
          "timeEnd": "10:30",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "10:40",
          "timeEnd": "11:50",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        }
      ]
    },
    {
      "key": "08.05.2024",
      "group": "ССА-7",
      "week": "17",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "10:40",
          "timeEnd": "11:50",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "12:00",
          "timeEnd": "13:10",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        },
        {
          "numOfPair": "5",
          "timeStart": "13:20",
          "timeEnd": "14:30",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "13.05.2024",
      "group": "ССА-7",
      "week": "18",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "МДК.02.02 Программное обеспечение компьютерных сетей",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "14.05.2024",
      "group": "ССА-7",
      "week": "18",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        }
      ]
    },
    {
      "key": "15.05.2024",
      "group": "ССА-7",
      "week": "18",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "16.05.2024",
      "group": "ССА-7",
      "week": "18",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы электротехники",
          "professor": "Коновалова Екатерина Васильевна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "МДК.02.01 Администрирование сетевых операционных систем",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        }
      ]
    },
    {
      "key": "17.05.2024",
      "group": "ССА-7",
      "week": "19",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Основы электротехники",
          "professor": "Коновалова Екатерина Васильевна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        }
      ]
    },
    {
      "key": "18.05.2024",
      "group": "ССА-7",
      "week": "19",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Коновалова Екатерина Васильевна",
          "adress": "",
          "auditory": ""
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "",
          "auditory": ""
        }
      ]
    },
    {
      "key": "20.05.2024",
      "group": "ССА-7",
      "week": "19",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "МДК.02.02 Программное обеспечение компьютерных сетей",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "21.05.2024",
      "group": "ССА-7",
      "week": "19",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        }
      ]
    },
    {
      "key": "22.05.2024",
      "group": "ССА-7",
      "week": "19",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "23.05.2024",
      "group": "ССА-7",
      "week": "19",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "МДК.02.01 Администрирование сетевых операционных систем",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "24.05.2024",
      "group": "ССА-7",
      "week": "20",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        }
      ]
    },
    {
      "key": "25.05.2024",
      "group": "ССА-7",
      "week": "20",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "Основы электротехники",
          "professor": "Коновалова Екатерина Васильевна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        }
      ]
    },
    {
      "key": "27.05.2024",
      "group": "ССА-7",
      "week": "20",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Иностранный язык в профессиональной деятельности",
          "professor": "Абрамова Светлана Геннадьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "432"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "МДК.02.02 Программное обеспечение компьютерных сетей",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Физическая культура",
          "professor": "Чернов Валентин Иванович",
          "adress": "Московское шоссе, 120",
          "auditory": "Спортзал"
        }
      ]
    },
    {
      "key": "28.05.2024",
      "group": "ССА-7",
      "week": "20",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "МДК.02.02 Программное обеспечение компьютерных сетей",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Инженерная компьютерная графика",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        }
      ]
    },
    {
      "key": "29.05.2024",
      "group": "ССА-7",
      "week": "20",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы теории информации",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "Теория вероятностей и математическая статистика",
          "professor": "Кусаева Зарина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "310"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "Основы проектирования баз данных",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        }
      ]
    },
    {
      "key": "30.05.2024",
      "group": "ССА-7",
      "week": "20",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "Архитектура аппаратных средств",
          "professor": "Терёхин Дмитрий Вячеславович",
          "adress": "Московское шоссе, 120",
          "auditory": "201"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "Основы электротехники",
          "professor": "Коновалова Екатерина Васильевна",
          "adress": "Московское шоссе, 120",
          "auditory": "329"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "МДК.02.01 Администрирование сетевых операционных систем",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        }
      ]
    },
    {
      "key": "31.05.2024",
      "group": "ССА-7",
      "week": "21",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "УП.02 Аппаратное обеспечение",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "УП.02 Аппаратное обеспечение",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "УП.02 Аппаратное обеспечение",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        }
      ]
    },
    {
      "key": "01.06.2024",
      "group": "ССА-7",
      "week": "21",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "УП.02 Аппаратное обеспечение",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "УП.02 Аппаратное обеспечение",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "УП.02 Аппаратное обеспечение",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        }
      ]
    },
    {
      "key": "03.06.2024",
      "group": "ССА-7",
      "week": "21",
      "schedule": [
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "УП.02 Аппаратное обеспечение",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "УП.02 Аппаратное обеспечение",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        },
        {
          "numOfPair": "6",
          "timeStart": "16:50",
          "timeEnd": "18:20",
          "predmet": "УП.02 Аппаратное обеспечение",
          "professor": "Сиднина Юлия Валерьевна",
          "adress": "Московское шоссе, 120",
          "auditory": "129"
        }
      ]
    },
    {
      "key": "04.06.2024",
      "group": "ССА-7",
      "week": "21",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "УП.02 Системное ПО",
          "professor": "Никитин Александр Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "УП.02 Системное ПО",
          "professor": "Никитин Александр Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "УП.02 Системное ПО",
          "professor": "Никитин Александр Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        }
      ]
    },
    {
      "key": "05.06.2024",
      "group": "ССА-7",
      "week": "21",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "УП.02 Системное ПО",
          "professor": "Никитин Александр Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "УП.02 Системное ПО",
          "professor": "Никитин Александр Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "УП.02 Системное ПО",
          "professor": "Никитин Александр Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        }
      ]
    },
    {
      "key": "06.06.2024",
      "group": "ССА-7",
      "week": "21",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "УП.02 Системное ПО",
          "professor": "Никитин Александр Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "УП.02 Системное ПО",
          "professor": "Никитин Александр Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "УП.02 Системное ПО",
          "professor": "Никитин Александр Михайлович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        }
      ]
    },
    {
      "key": "07.06.2024",
      "group": "ССА-7",
      "week": "22",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "УП.02 Серверное ПО Windows",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "УП.02 Серверное ПО Windows",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "УП.02 Серверное ПО Windows",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "УП.02 Серверное ПО Windows",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        }
      ]
    },
    {
      "key": "08.06.2024",
      "group": "ССА-7",
      "week": "22",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "УП.02 Серверное ПО Windows",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "УП.02 Серверное ПО Windows",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:30",
          "timeEnd": "13:00",
          "predmet": "УП.02 Серверное ПО Windows",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:10",
          "timeEnd": "14:40",
          "predmet": "УП.02 Серверное ПО Windows",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        }
      ]
    },
    {
      "key": "10.06.2024",
      "group": "ССА-7",
      "week": "22",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "УП.02 Серверное ПО Windows",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "УП.02 Серверное ПО Windows",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "УП.02 Серверное ПО Windows",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "УП.02 Серверное ПО Windows",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        }
      ]
    },
    {
      "key": "11.06.2024",
      "group": "ССА-7",
      "week": "22",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:10",
          "predmet": "УП.02 Серверное ПО Windows",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:20",
          "timeEnd": "10:30",
          "predmet": "УП.02 Серверное ПО Windows",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "3",
          "timeStart": "10:40",
          "timeEnd": "11:50",
          "predmet": "УП.02 Серверное ПО Windows",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "4",
          "timeStart": "12:00",
          "timeEnd": "13:10",
          "predmet": "УП.02 Серверное ПО Windows",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        }
      ]
    },
    {
      "key": "13.06.2024",
      "group": "ССА-7",
      "week": "22",
      "schedule": [
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "УП.02 Серверное ПО Windows",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        },
        {
          "numOfPair": "5",
          "timeStart": "15:10",
          "timeEnd": "16:40",
          "predmet": "УП.02 Серверное ПО Windows",
          "professor": "Ермолаева Галина Владимировна",
          "adress": "Московское шоссе, 120",
          "auditory": "103"
        }
      ]
    },
    {
      "key": "14.06.2024",
      "group": "ССА-7",
      "week": "23",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:00",
          "timeEnd": "12:10",
          "predmet": "УП.02 Серверное ПО Linux",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        },
        {
          "numOfPair": "4",
          "timeStart": "12:20",
          "timeEnd": "13:30",
          "predmet": "УП.02 Серверное ПО Linux",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        },
        {
          "numOfPair": "5",
          "timeStart": "13:50",
          "timeEnd": "15:00",
          "predmet": "УП.02 Серверное ПО Linux",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        }
      ]
    },
    {
      "key": "15.06.2024",
      "group": "ССА-7",
      "week": "23",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:20",
          "timeEnd": "10:30",
          "predmet": "УП.02 Серверное ПО Linux",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:00",
          "timeEnd": "12:10",
          "predmet": "УП.02 Серверное ПО Linux",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        },
        {
          "numOfPair": "4",
          "timeStart": "12:20",
          "timeEnd": "13:30",
          "predmet": "УП.02 Серверное ПО Linux",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        },
        {
          "numOfPair": "5",
          "timeStart": "13:50",
          "timeEnd": "15:00",
          "predmet": "УП.02 Серверное ПО Linux",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        }
      ]
    },
    {
      "key": "17.06.2024",
      "group": "ССА-7",
      "week": "23",
      "schedule": [
        {
          "numOfPair": "2",
          "timeStart": "09:20",
          "timeEnd": "10:30",
          "predmet": "УП.02 Серверное ПО Linux",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:00",
          "timeEnd": "12:10",
          "predmet": "УП.02 Серверное ПО Linux",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        },
        {
          "numOfPair": "4",
          "timeStart": "12:20",
          "timeEnd": "13:30",
          "predmet": "УП.02 Серверное ПО Linux",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        },
        {
          "numOfPair": "5",
          "timeStart": "13:50",
          "timeEnd": "15:00",
          "predmet": "УП.02 Серверное ПО Linux",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        }
      ]
    },
    {
      "key": "18.06.2024",
      "group": "ССА-7",
      "week": "23",
      "schedule": [
        {
          "numOfPair": "3",
          "timeStart": "11:00",
          "timeEnd": "12:10",
          "predmet": "УП.02 Серверное ПО Linux",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        },
        {
          "numOfPair": "4",
          "timeStart": "12:20",
          "timeEnd": "13:30",
          "predmet": "УП.02 Серверное ПО Linux",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        },
        {
          "numOfPair": "5",
          "timeStart": "13:50",
          "timeEnd": "15:00",
          "predmet": "УП.02 Серверное ПО Linux",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        }
      ]
    },
    {
      "key": "19.06.2024",
      "group": "ССА-7",
      "week": "23",
      "schedule": [
        {
          "numOfPair": "1",
          "timeStart": "08:00",
          "timeEnd": "09:30",
          "predmet": "УП.02 Серверное ПО Linux",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        },
        {
          "numOfPair": "2",
          "timeStart": "09:40",
          "timeEnd": "11:10",
          "predmet": "УП.02 Серверное ПО Linux",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        },
        {
          "numOfPair": "3",
          "timeStart": "11:40",
          "timeEnd": "13:10",
          "predmet": "УП.02 Серверное ПО Linux",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        },
        {
          "numOfPair": "4",
          "timeStart": "13:20",
          "timeEnd": "14:50",
          "predmet": "УП.02 Серверное ПО Linux",
          "professor": "Новопольцев Дмитрий Владимирович",
          "adress": "Московское шоссе, 120",
          "auditory": "136"
        }
      ]
    },
    {
      "key": "21.06.2024",
      "group": "ССА-7",
      "week": "24",
      "schedule": [
        {
          "numOfPair": "Экзамен",
          "timeStart": "09:00",
          "timeEnd": "",
          "predmet": "Информационные технологии",
          "professor": "Федотова Елена Дмитриевна",
          "adress": "Московское шоссе, 120",
          "auditory": "212"
        }
      ]
    },
    {
      "key": "22.06.2024",
      "group": "ССА-7",
      "week": "24",
      "schedule": [
        {
          "numOfPair": "Консультация",
          "timeStart": "09:00",
          "timeEnd": "",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        }
      ]
    },
    {
      "key": "24.06.2024",
      "group": "ССА-7",
      "week": "24",
      "schedule": [
        {
          "numOfPair": "Экзамен",
          "timeStart": "09:00",
          "timeEnd": "",
          "predmet": "Элементы высшей математики",
          "professor": "Швырина Ольга Николаевна",
          "adress": "Московское шоссе, 120",
          "auditory": "244"
        }
      ]
    },
    {
      "key": "26.06.2024",
      "group": "ССА-7",
      "week": "24",
      "schedule": [
        {
          "numOfPair": "Консультация",
          "timeStart": "09:00",
          "timeEnd": "",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        }
      ]
    },
    {
      "key": "27.06.2024",
      "group": "ССА-7",
      "week": "24",
      "schedule": [
        {
          "numOfPair": "Экзамен",
          "timeStart": "09:00",
          "timeEnd": "",
          "predmet": "Технологии физического уровня передачи данных",
          "professor": "Фомин Александр Васильевич",
          "adress": "Московское шоссе, 120",
          "auditory": "430"
        }
      ]
    }
  ]
  
  

function compareJSONSchedules(schedule1, schedule2) {
  return isEqual(schedule1, schedule2);
}

const areSchedulesEqual = compareJSONSchedules(schedule1, schedule2);
console.log("Расписания одинаковы:", areSchedulesEqual);