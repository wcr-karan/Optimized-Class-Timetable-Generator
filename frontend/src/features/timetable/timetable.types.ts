import { BaseEntity, TimetableStatus, DayOfWeek } from '../../types/types';

export interface TimetableSlot extends BaseEntity {
    dayOfWeek: DayOfWeek;
    startTime: string;
    endTime: string;
    subjectId: number;
    facultyId: number;
    classroomId: number;
    departmentId: number;
    isFixed: boolean;
    timetableId?: number;
}

export interface Timetable extends BaseEntity {
    name: string;
    generatedById: number;
    status: TimetableStatus;
    scoreJson?: Record<string, any>;
    slots: TimetableSlot[];
}

export interface GenerateTimetableDto {
    departmentId: number;
    semester: number;
    maxClassesPerDay: number;
    startTime: string;
    endTime: string;
    breakDuration: number;
    fixedSlots?: Partial<TimetableSlot>[];
}

export interface ApproveTimetableDto {
    timetableId: number;
    comments?: string;
}

export interface TimetableConstraints {
    departmentId: number;
    semester: number;
    maxClassesPerDay: number;
    startTime: string;
    endTime: string;
    breakDuration: number;
    avoidBackToBackLabs?: boolean;
    preferredDaysOff?: DayOfWeek[];
}
