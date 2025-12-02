import api from '../../services/api';
import { ApiResponse } from '../../types/types';
import { Timetable, GenerateTimetableDto, ApproveTimetableDto, TimetableSlot } from './timetable.types';

export const timetableApi = {
    generate: async (data: GenerateTimetableDto): Promise<Timetable[]> => {
        const response = await api.post<ApiResponse<Timetable[]>>('/timetables/generate', data);
        return response.data.data || [];
    },

    getById: async (id: number): Promise<Timetable> => {
        const response = await api.get<ApiResponse<Timetable>>(`/timetables/${id}`);
        return response.data.data!;
    },

    getByDepartment: async (departmentId: number): Promise<Timetable[]> => {
        const response = await api.get<ApiResponse<Timetable[]>>(`/timetables/department/${departmentId}`);
        return response.data.data || [];
    },

    approve: async (data: ApproveTimetableDto): Promise<Timetable> => {
        const response = await api.post<ApiResponse<Timetable>>('/timetables/approve', data);
        return response.data.data!;
    },

    reject: async (timetableId: number, comments?: string): Promise<void> => {
        await api.post('/timetables/reject', { timetableId, comments });
    },

    export: async (timetableId: number, format: 'pdf' | 'csv' | 'ical'): Promise<Blob> => {
        const response = await api.get(`/timetables/${timetableId}/export?format=${format}`, {
            responseType: 'blob',
        });
        return response.data;
    },

    getSlots: async (timetableId: number): Promise<TimetableSlot[]> => {
        const response = await api.get<ApiResponse<TimetableSlot[]>>(`/timetables/${timetableId}/slots`);
        return response.data.data || [];
    },

    delete: async (id: number): Promise<void> => {
        await api.delete(`/timetables/${id}`);
    },
};
