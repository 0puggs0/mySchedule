export interface Professor {
  name: string;
}

export interface Room {
  auditory: string | null;
  name: string;
}

export interface Group {
  name: string
}

export interface Subject {
  name: string;
}

export interface Day {
  key: string,
  group: string,
  week: string,
  schedule: ScheduleItem
}

export interface Days{
  schedule: Day[]
}

export interface ScheduleItem {
  date: string;
  group: string;
  pairNumber: string;
  professor: Professor;
  room: Room;
  subject: Subject;
  timeEnd: string;
  timeStart: string;
  week: string | null;
}

export interface ProfessorScheduleItem {
    date: string,
    group: Group,
    pairNumber: string,
    professor: Professor,
    room: Room,
    subject: Subject,
    timeEnd: string,
    timeStart: string,
    week: string | null
}

export interface ScheduleArrayInterface {
  [index: number]: Array<ScheduleItem>
}

export interface ProfessorScheduleArrayInterface {
  [index: number]: Array<ProfessorScheduleItem>
}

export interface ScheduleType {
    schedule: Array<ScheduleItem>;
  }

  export interface ProfessorScheduleType {
    professors: Array<ProfessorScheduleItem>;
  }

  export interface NewProfessorSchedule {
    title: string,
    data: Array<ProfessorScheduleItem>,
    
  }
  
  export interface NewProfessorScheduleArray{
    [index: number]: NewProfessorSchedule
  }


export type RootStackParamList = {
  Login: undefined;
  Schedule: undefined;
  Splash: undefined,
  BottomTabsSchedule: undefined,
  ProfessorSchedule: undefined,
  Info: undefined
};
  
