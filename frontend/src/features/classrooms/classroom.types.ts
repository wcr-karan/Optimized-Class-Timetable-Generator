import { BaseEntity, ClassroomType } from '../../types/types';

export interface Classroom extends BaseEntity {
    name: string;
    capacity: number;
    type: ClassroomType;
    departmentId: number;
    year?: number;
    semester?: number;
}

export interface CreateClassroomDto {
    name: string;
    capacity: number;
    type: ClassroomType;
    departmentId: number;
    year?: number;
    semester?: number;
}

export interface UpdateClassroomDto {
    name?: string;
    capacity?: number;
    type?: ClassroomType;
    departmentId?: number;
    year?: number;
    semester?: number;
}
