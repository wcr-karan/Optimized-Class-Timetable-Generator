import { create } from 'zustand';

interface TimetableState {
    timetables: any[];
    currentTimetable: any | null;
    setTimetables: (timetables: any[]) => void;
    setCurrentTimetable: (timetable: any) => void;
}

export const useTimetableStore = create<TimetableState>((set) => ({
    timetables: [],
    currentTimetable: null,
    setTimetables: (timetables) => set({ timetables }),
    setCurrentTimetable: (currentTimetable) => set({ currentTimetable }),
}));
