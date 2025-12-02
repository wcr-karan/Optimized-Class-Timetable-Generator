import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const Sidebar = () => {
    const location = useLocation();
    const { user } = useAuth();

    const menuItems = [
        { path: '/dashboard', label: 'Dashboard', icon: '📊' },
        { path: '/dashboard/departments', label: 'Departments', icon: '🏢' },
        { path: '/dashboard/faculty', label: 'Faculty', icon: '👨‍🏫' },
        { path: '/dashboard/classrooms', label: 'Classrooms', icon: '🏫' },
        { path: '/dashboard/subjects', label: 'Subjects', icon: '📚' },
        { path: '/dashboard/timetable', label: 'Generate Timetable', icon: '📅' },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <div className="w-64 bg-gray-900 text-white min-h-screen flex flex-col">
            <div className="p-6 border-b border-gray-800">
                <h1 className="text-xl font-bold">Timetable System</h1>
                <p className="text-sm text-gray-400 mt-1">Admin Panel</p>
            </div>

            <nav className="flex-1 p-4">
                <ul className="space-y-2">
                    {menuItems.map((item) => (
                        <li key={item.path}>
                            <Link
                                to={item.path}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive(item.path)
                                        ? 'bg-blue-600 text-white'
                                        : 'text-gray-300 hover:bg-gray-800'
                                    }`}
                            >
                                <span className="text-xl">{item.icon}</span>
                                <span>{item.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="p-4 border-t border-gray-800">
                <div className="text-sm text-gray-400">
                    <p>Logged in as:</p>
                    <p className="font-medium text-white">{user?.email || 'Admin'}</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
