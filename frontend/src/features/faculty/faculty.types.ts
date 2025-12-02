import { BaseEntity, DayOfWeek } from '../../types/types';

export interface Faculty extends BaseEntity {
    name: string;
    email: string;
    phone?: string;
    departmentId: number;
    maxWeeklyLoad: number;
    averageLeavesPerMonth: number;
    availableDays: DayOfWeek[];
    preferredSlots?: string[];
}

export interface CreateFacultyDto {
    name: string;
    email: string;
    phone?: string;
    departmentId: number;
    maxWeeklyLoad: number;
    averageLeavesPerMonth?: number;
    availableDays: DayOfWeek[];
    preferredSlots?: string[];
}

export interface UpdateFacultyDto {
    name?: string;
    email?: string;
    phone?: string;
    departmentId?: number;
    maxWeeklyLoad?: number;
    averageLeavesPerMonth?: number;
    availableDays?: DayOfWeek[];
    preferredSlots?: string[];
}
