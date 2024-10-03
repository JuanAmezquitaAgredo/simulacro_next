import FormRegister from '@/components/FormRegister/FormRegister';
import React from 'react';

const RegisterPage: React.FC = () => {
    return (
        <div style={{ padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <FormRegister />
        </div>
    );
};

export default RegisterPage;
