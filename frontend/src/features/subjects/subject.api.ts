import api from '../../services/api';
import { ApiResponse, PaginatedResponse } from '../../types/types';
import { Subject, CreateSubjectDto, UpdateSubjectDto } from './subject.types';

export const subjectApi = {
    getAll: async (): Promise<Subject[]> => {
        const response = await api.get<ApiResponse<Subject[]>>('/subjects');
        return response.data.data || [];
    },

    getById: async (id: number): Promise<Subject> => {
        const response = await api.get<ApiResponse<Subject>>(`/subjects/${id}`);
        return response.data.data!;
    },

    getByDepartment: async (departmentId: number): Promise<Subject[]> => {
        const response = await api.get<ApiResponse<Subject[]>>(`/subjects/department/${departmentId}`);
        return response.data.data || [];
    },

    getBySemester: async (semester: number): Promise<Subject[]> => {
        const response = await api.get<ApiResponse<Subject[]>>(`/subjects/semester/${semester}`);
        return response.data.data || [];
    },

    create: async (data: CreateSubjectDto): Promise<Subject> => {
        const response = await api.post<ApiResponse<Subject>>('/subjects', data);
        return response.data.data!;
    },

    update: async (id: number, data: UpdateSubjectDto): Promise<Subject> => {
        const response = await api.put<ApiResponse<Subject>>(`/subjects/${id}`, data);
        return response.data.data!;
    },

    delete: async (id: number): Promise<void> => {
        await api.delete(`/subjects/${id}`);
    },

    getPaginated: async (page: number = 1, pageSize: number = 10): Promise<PaginatedResponse<Subject>> => {
        const response = await api.get<ApiResponse<PaginatedResponse<Subject>>>(
            `/subjects/paginated?page=${page}&pageSize=${pageSize}`
        );
        return response.data.data!;
    },
};
