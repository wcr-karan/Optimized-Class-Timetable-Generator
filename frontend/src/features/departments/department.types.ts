import { BaseEntity } from '../../types/types';

export interface Department extends BaseEntity {
    name: string;
    code: string;
    headOfDepartment?: string;
    totalFaculty: number;
    totalStudents: number;
}

export interface CreateDepartmentDto {
    name: string;
    code: string;
    headOfDepartment?: string;
}

export interface UpdateDepartmentDto {
    name?: string;
    code?: string;
    headOfDepartment?: string;
}
