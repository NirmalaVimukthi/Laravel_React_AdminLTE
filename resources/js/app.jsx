import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import AuthLayout from './Layouts/Auth/LayoutComponent';
import MainLayout from './Layouts/MainLayoutComponent';




import axios from 'axios';

const Dashboard = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem('token');

            if (token) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                try {
                    const response = await axios.get('/api/user');
                    console.log(response.data);
                    setUser(response.data);

                } catch (error) {
                    console.error('Failed to fetch user', error);
                }
            }
        };

        fetchUser();
    }, []);

    if (!user) {
        console.log("Login to...");
        return <AuthLayout />;
    }

    return (
        <div>
                 <MainLayout user={user}/>
        </div>
    );
};

export default Dashboard;
ReactDOM.createRoot(document.getElementById('app')).render(<Dashboard />);
