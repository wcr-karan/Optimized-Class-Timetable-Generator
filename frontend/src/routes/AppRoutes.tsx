import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Settings from '../pages/Settings';
import Login from '../features/auth/login';
import Signup from '../features/auth/signup';
import DashboardLayout from '../components/layouts/DashboardLayout';
import Dashboard from '../features/dashboard/Dashboard';
import DepartmentManagement from '../features/departments/DepartmentManagement';
import FacultyManagement from '../features/faculty/FacultyManagement';
import ClassroomManagement from '../features/classrooms/ClassroomManagement';
import SubjectManagement from '../features/subjects/SubjectManagement';
import TimetableGenerator from '../features/timetable/TimetableGenerator';
import { useAuth } from '../hooks/useAuth';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

                {/* Protected Dashboard Routes */}
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <DashboardLayout>
                                <Dashboard />
                            </DashboardLayout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/dashboard/departments"
                    element={
                        <ProtectedRoute>
                            <DashboardLayout>
                                <DepartmentManagement />
                            </DashboardLayout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/dashboard/faculty"
                    element={
                        <ProtectedRoute>
                            <DashboardLayout>
                                <FacultyManagement />
                            </DashboardLayout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/dashboard/classrooms"
                    element={
                        <ProtectedRoute>
                            <DashboardLayout>
                                <ClassroomManagement />
                            </DashboardLayout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/dashboard/subjects"
                    element={
                        <ProtectedRoute>
                            <DashboardLayout>
                                <SubjectManagement />
                            </DashboardLayout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/dashboard/timetable"
                    element={
                        <ProtectedRoute>
                            <DashboardLayout>
                                <TimetableGenerator />
                            </DashboardLayout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/settings"
                    element={
                        <ProtectedRoute>
                            <DashboardLayout>
                                <Settings />
                            </DashboardLayout>
                        </ProtectedRoute>
                    }
                />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
