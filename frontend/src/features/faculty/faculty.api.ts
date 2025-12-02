import api from '../../services/api';
import { ApiResponse, PaginatedResponse } from '../../types/types';
import { Faculty, CreateFacultyDto, UpdateFacultyDto } from './faculty.types';

export const facultyApi = {
    getAll: async (): Promise<Faculty[]> => {
        const response = await api.get<ApiResponse<Faculty[]>>('/faculty');
        return response.data.data || [];
    },

    getById: async (id: number): Promise<Faculty> => {
        const response = await api.get<ApiResponse<Faculty>>(`/faculty/${id}`);
        return response.data.data!;
    },

    getByDepartment: async (departmentId: number): Promise<Faculty[]> => {
        const response = await api.get<ApiResponse<Faculty[]>>(`/faculty/department/${departmentId}`);
        return response.data.data || [];
    },

    create: async (data: CreateFacultyDto): Promise<Faculty> => {
        const response = await api.post<ApiResponse<Faculty>>('/faculty', data);
        return response.data.data!;
    },

    update: async (id: number, data: UpdateFacultyDto): Promise<Faculty> => {
        const response = await api.put<ApiResponse<Faculty>>(`/faculty/${id}`, data);
        return response.data.data!;
    },

    delete: async (id: number): Promise<void> => {
        await api.delete(`/faculty/${id}`);
    },

    getPaginated: async (page: number = 1, pageSize: number = 10): Promise<PaginatedResponse<Faculty>> => {
        const response = await api.get<ApiResponse<PaginatedResponse<Faculty>>>(
            `/faculty/paginated?page=${page}&pageSize=${pageSize}`
        );
        return response.data.data!;
    },
};
