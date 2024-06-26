import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import BackButton from '../components/BackButton';
import { useAuth } from '../contexts/authContext';
import { useBankService } from '../services/bankService';
import create_bank_cat from '../assets/images/create-bank-cat.jpg';

const CreateBank = () => {
    const { currentUser } = useAuth();
    const { createBank } = useBankService();
    const user = JSON.parse(currentUser);

    const [formData, setFormData] = useState({
        user_id: user?.id || '',
        name: 'На ',
        goal_amount: 0,
    });

    // TODO: Replace useState with react-router-dom useNavigate hook
    const [redirect, setRedirect] = useState(false);
    const [isNameEntered, setIsNameEntered] = useState(false);

    const handleChangeName = (e) => {
        const newName = e.target.value;
        setFormData((prevFormData) => ({ ...prevFormData, name: newName }));
        setIsNameEntered(newName.trim() !== '' && newName.trim() !== 'На');
    };

    const handleChangeGoalAmount = (e) => {
        const newGoalAmount = parseFloat(e.target.value) || 0;
        setFormData((prevFormData) => ({
            ...prevFormData,
            goal_amount: newGoalAmount,
        }));
    };

    const handleCreatingBank = async (e) => {
        e.preventDefault();
        try {
            // TODO: Make use of .then() and .catch() to perform any actions after data submission
            await createBank(formData);
            setRedirect(true);
        } catch (error) {
            alert(error.message);
        }
    };

    if (redirect) {
        return <Navigate to="/savings" />;
    }

    return (
        <form className="create-bank" onSubmit={handleCreatingBank}>
            <div className="header">
                <BackButton to="/savings" color="#e75f5b" />
                <img src={create_bank_cat} alt="cat"></img>
            </div>
            <div className="input-con">
                <label>На що накопичуємо?</label>
                <input
                    name="name"
                    value={formData.name}
                    onChange={handleChangeName}
                ></input>
            </div>
            <div className="input-con">
                <label>Бажана сума накопичення?</label>
                <input
                    name="goal_amount"
                    value={formData.goal_amount}
                    onChange={handleChangeGoalAmount}
                    inputMode="numeric"
                ></input>
            </div>
            <button
                type="submit"
                className="submit-btn"
                disabled={!isNameEntered}
            >
                Створити банку
            </button>
        </form>
    );
};

export default CreateBank;
