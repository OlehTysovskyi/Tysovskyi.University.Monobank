import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import BackButton from '../components/BackButton';
import { useAuth } from '../contexts/authContext';
import { useCardService } from '../services/cardService';

const CreateCard = () => {
    const { currentUser } = useAuth();
    const { createCard, getUserCards } = useCardService();
    const user = JSON.parse(currentUser);

    const [userCards, setUserCards] = useState([]);
    // TODO: Remove unused vars and functions or replace them with planned functionality
    // ANTILAB 2: Agree with TODO comment
    const [showMessage, setShowMessage] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const [cardsLoaded, setCardsLoaded] = useState(false);

    useEffect(() => {
        const fetchUserCards = async () => {
            const cards = await getUserCards(user.id);
            setUserCards(cards);
            setCardsLoaded(true);
        };

        fetchUserCards();
    }, [user.id]);

    const handleCreatingCard = async (type) => {
        try {
            await createCard({ user_id: user.id, type: type, balance: 0 });
            setRedirect(true);
        } catch (error) {
            alert(error.message);
        }
    };

    if (redirect) {
        return <Navigate to="/" />;
    }

    return (
        <div className="create-card">
            <BackButton to="/cards-and-accounts" color="#e75f5b" />
            <div className="header">Відкрити картку або рахунок</div>
            <div className="cards-container">
                {cardsLoaded && (
                    <React.Fragment>
                        <div className="container-header">
                            {userCards.length === 2 ? (
                                <>
                                    Немає доступних карток <br /> для створення
                                </>
                            ) : (
                                'Картки'
                            )}
                        </div>
                        {!userCards.some((card) => card.type === 'BLACK') && (
                            <div
                                className="card black-card"
                                onClick={() => handleCreatingCard('BLACK')}
                            >
                                <div className="stripe"></div>
                                <div className="stripe"></div>
                                Створити чорну картку
                            </div>
                        )}
                        {!userCards.some((card) => card.type === 'WHITE') && (
                            <div
                                className="card white-card"
                                onClick={() => handleCreatingCard('WHITE')}
                            >
                                <div className="stripe"></div>
                                <div className="stripe"></div>
                                Створити білу картку
                            </div>
                        )}
                    </React.Fragment>
                )}
            </div>
        </div>
    );
};

export default CreateCard;
