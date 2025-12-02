import api from '../../services/api';
import { ApiResponse, PaginatedResponse } from '../../types/types';
import { Classroom, CreateClassroomDto, UpdateClassroomDto } from './classroom.types';

export const classroomApi = {
    getAll: async (): Promise<Classroom[]> => {
        const response = await api.get<ApiResponse<Classroom[]>>('/classrooms');
        return response.data.data || [];
    },

    getById: async (id: number): Promise<Classroom> => {
        const response = await api.get<ApiResponse<Classroom>>(`/classrooms/${id}`);
        return response.data.data!;
    },

    getByDepartment: async (departmentId: number): Promise<Classroom[]> => {
        const response = await api.get<ApiResponse<Classroom[]>>(`/classrooms/department/${departmentId}`);
        return response.data.data || [];
    },

    create: async (data: CreateClassroomDto): Promise<Classroom> => {
        const response = await api.post<ApiResponse<Classroom>>('/classrooms', data);
        return response.data.data!;
    },

    update: async (id: number, data: UpdateClassroomDto): Promise<Classroom> => {
        const response = await api.put<ApiResponse<Classroom>>(`/classrooms/${id}`, data);
        return response.data.data!;
    },

    delete: async (id: number): Promise<void> => {
        await api.delete(`/classrooms/${id}`);
    },

    getPaginated: async (page: number = 1, pageSize: number = 10): Promise<PaginatedResponse<Classroom>> => {
        const response = await api.get<ApiResponse<PaginatedResponse<Classroom>>>(
            `/classrooms/paginated?page=${page}&pageSize=${pageSize}`
        );
        return response.data.data!;
    },
};
