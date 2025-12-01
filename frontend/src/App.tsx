import { useState } from 'react'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h1 className="text-3xl font-bold text-blue-600 mb-4">
                    Optimized Class Timetable Generator
                </h1>
                <p className="text-gray-600 mb-6">
                    Welcome to the frontend application.
                </p>
                <button
                    onClick={() => setCount((count) => count + 1)}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                    count is {count}
                </button>
            </div>
        </div>
    )
}

export default App
