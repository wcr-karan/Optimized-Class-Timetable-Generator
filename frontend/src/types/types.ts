// Shared types and interfaces for the timetable system

export enum Role {
    SUPERADMIN = 'SUPERADMIN',
    TIMETABLE_ADMIN = 'TIMETABLE_ADMIN',
    HOD = 'HOD',
    FACULTY = 'FACULTY',
    VIEWER = 'VIEWER',
}

export enum TimetableStatus {
    PENDING = 'PENDING',
    APPROVED = 'APPROVED',
    REJECTED = 'REJECTED',
}

export enum ApprovalStatus {
    PENDING = 'PENDING',
    APPROVED = 'APPROVED',
    REJECTED = 'REJECTED',
}

export enum SubjectType {
    LECTURE = 'LECTURE',
    LAB = 'LAB',
    TUTORIAL = 'TUTORIAL',
}

export enum ClassroomType {
    LECTURE = 'LECTURE',
    LAB = 'LAB',
    TUTORIAL = 'TUTORIAL',
}

export enum DayOfWeek {
    MONDAY = 'MONDAY',
    TUESDAY = 'TUESDAY',
    WEDNESDAY = 'WEDNESDAY',
    THURSDAY = 'THURSDAY',
    FRIDAY = 'FRIDAY',
    SATURDAY = 'SATURDAY',
}

export interface BaseEntity {
    id: number;
    createdAt: string;
    updatedAt: string;
}

export interface User extends BaseEntity {
    name: string;
    email: string;
    role: Role;
    departmentId?: number;
    isActive: boolean;
}

export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    message?: string;
    error?: string;
}

export interface PaginatedResponse<T> {
    data: T[];
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
}
