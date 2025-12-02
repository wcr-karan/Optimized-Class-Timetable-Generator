import { BaseEntity, SubjectType } from '../../types/types';

export interface Subject extends BaseEntity {
    code: string;
    name: string;
    departmentId: number;
    credits: number;
    type: SubjectType;
    lecturesPerWeek: number;
    labsPerWeek?: number;
    semester: number;
    durationPerClass: number;
    allowedRoomTypes?: string[];
    prerequisites?: string[];
}

export interface CreateSubjectDto {
    code: string;
    name: string;
    departmentId: number;
    credits: number;
    type: SubjectType;
    lecturesPerWeek: number;
    labsPerWeek?: number;
    semester: number;
    durationPerClass: number;
    allowedRoomTypes?: string[];
    prerequisites?: string[];
}

export interface UpdateSubjectDto {
    code?: string;
    name?: string;
    departmentId?: number;
    credits?: number;
    type?: SubjectType;
    lecturesPerWeek?: number;
    labsPerWeek?: number;
    semester?: number;
    durationPerClass?: number;
    allowedRoomTypes?: string[];
    prerequisites?: string[];
}
