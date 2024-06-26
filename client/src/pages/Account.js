import React, { useEffect } from 'react';
import Dashboard from '../components/Dashboard';
import TransactionHistory from '../components/TransactionHistory';
import { useAuthentication } from '../services/authService';

const Account = () => {
    const { fetchUserProfile } = useAuthentication();

    // TODO: Remove unnecessary console.log

    useEffect(() => {
        fetchUserProfile().then((res) => {
            console.log(res);
        });
    }, []);

    return (
        <>
            <Dashboard />
            <TransactionHistory />
        </>
    );
};

export default Account;
