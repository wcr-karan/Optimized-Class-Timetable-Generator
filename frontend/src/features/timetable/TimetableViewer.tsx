import { Timetable, TimetableSlot } from './timetable.types';
import { DayOfWeek } from '../../types/types';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

interface TimetableViewerProps {
    timetable: Timetable;
    onApprove?: () => void;
    onReject?: () => void;
    onExport?: (format: 'pdf' | 'csv' | 'ical') => void;
}

const TimetableViewer = ({ timetable, onApprove, onReject, onExport }: TimetableViewerProps) => {
    const days = [DayOfWeek.MONDAY, DayOfWeek.TUESDAY, DayOfWeek.WEDNESDAY, DayOfWeek.THURSDAY, DayOfWeek.FRIDAY];

    // Group slots by day and time
    const slotsByDay: Record<string, TimetableSlot[]> = {};
    timetable.slots.forEach((slot) => {
        if (!slotsByDay[slot.dayOfWeek]) {
            slotsByDay[slot.dayOfWeek] = [];
        }
        slotsByDay[slot.dayOfWeek].push(slot);
    });

    // Get unique time slots
    const timeSlots = Array.from(
        new Set(timetable.slots.map((slot) => `${slot.startTime}-${slot.endTime}`))
    ).sort();

    return (
        <Card
            title={timetable.name}
            actions={
                <div className="flex gap-2">
                    {onExport && (
                        <>
                            <Button size="sm" variant="secondary" onClick={() => onExport('pdf')}>
                                📄 PDF
                            </Button>
                            <Button size="sm" variant="secondary" onClick={() => onExport('csv')}>
                                📊 CSV
                            </Button>
                            <Button size="sm" variant="secondary" onClick={() => onExport('ical')}>
                                📅 iCal
                            </Button>
                        </>
                    )}
                    {onReject && (
                        <Button size="sm" variant="danger" onClick={onReject}>
                            Reject
                        </Button>
                    )}
                    {onApprove && (
                        <Button size="sm" variant="success" onClick={onApprove}>
                            Approve
                        </Button>
                    )}
                </div>
            }
        >
            <div className="mb-4 flex gap-4 text-sm">
                <div>
                    <span className="font-medium">Status:</span>{' '}
                    <span
                        className={`px-2 py-1 rounded text-xs ${timetable.status === 'APPROVED'
                                ? 'bg-green-100 text-green-800'
                                : timetable.status === 'REJECTED'
                                    ? 'bg-red-100 text-red-800'
                                    : 'bg-yellow-100 text-yellow-800'
                            }`}
                    >
                        {timetable.status}
                    </span>
                </div>
                {timetable.scoreJson && (
                    <div>
                        <span className="font-medium">Score:</span> {timetable.scoreJson.overall || 'N/A'}%
                    </div>
                )}
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-4 py-2 font-medium text-gray-700">Time</th>
                            {days.map((day) => (
                                <th key={day} className="border border-gray-300 px-4 py-2 font-medium text-gray-700">
                                    {day}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {timeSlots.map((timeSlot) => (
                            <tr key={timeSlot}>
                                <td className="border border-gray-300 px-4 py-2 font-medium bg-gray-50 whitespace-nowrap">
                                    {timeSlot}
                                </td>
                                {days.map((day) => {
                                    const slot = slotsByDay[day]?.find(
                                        (s) => `${s.startTime}-${s.endTime}` === timeSlot
                                    );

                                    return (
                                        <td key={day} className="border border-gray-300 px-4 py-2">
                                            {slot ? (
                                                <div className="text-sm">
                                                    <div className="font-medium text-blue-600">Subject #{slot.subjectId}</div>
                                                    <div className="text-gray-600">Faculty #{slot.facultyId}</div>
                                                    <div className="text-gray-500 text-xs">Room #{slot.classroomId}</div>
                                                    {slot.isFixed && (
                                                        <span className="inline-block mt-1 px-1 py-0.5 bg-orange-100 text-orange-800 text-xs rounded">
                                                            Fixed
                                                        </span>
                                                    )}
                                                </div>
                                            ) : (
                                                <div className="text-center text-gray-400 text-sm">-</div>
                                            )}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
    );
};

export default TimetableViewer;
