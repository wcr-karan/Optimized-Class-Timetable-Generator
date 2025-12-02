import api from '../../services/api';
import { ApiResponse, PaginatedResponse } from '../../types/types';
import { Department, CreateDepartmentDto, UpdateDepartmentDto } from './department.types';

export const departmentApi = {
    getAll: async (): Promise<Department[]> => {
        const response = await api.get<ApiResponse<Department[]>>('/departments');
        return response.data.data || [];
    },

    getById: async (id: number): Promise<Department> => {
        const response = await api.get<ApiResponse<Department>>(`/departments/${id}`);
        return response.data.data!;
    },

    create: async (data: CreateDepartmentDto): Promise<Department> => {
        const response = await api.post<ApiResponse<Department>>('/departments', data);
        return response.data.data!;
    },

    update: async (id: number, data: UpdateDepartmentDto): Promise<Department> => {
        const response = await api.put<ApiResponse<Department>>(`/departments/${id}`, data);
        return response.data.data!;
    },

    delete: async (id: number): Promise<void> => {
        await api.delete(`/departments/${id}`);
    },

    getPaginated: async (page: number = 1, pageSize: number = 10): Promise<PaginatedResponse<Department>> => {
        const response = await api.get<ApiResponse<PaginatedResponse<Department>>>(
            `/departments/paginated?page=${page}&pageSize=${pageSize}`
        );
        return response.data.data!;
    },
};
