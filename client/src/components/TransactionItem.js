import React from 'react';

const TransactionItem = ({ transfer, onClick }) => {
    const handleItemClick = () => {
        onClick(transfer);
    };

    // TODO: Create a constant or utility function to create messages depending  on transfer type
    const amountWithSign =
        transfer.type === 'OUTGOING' ? '-' + transfer.amount : transfer.amount;
    const userNameWithSign =
        transfer.type === 'INCOMING'
            ? 'Від: ' + transfer.username
            : transfer.username;
    const amountClass = transfer.type === 'INCOMING' ? 'incoming' : 'outgoing';
    const avatarClass =
        transfer.type === 'INCOMING' ? 'avatar-incoming' : 'avatar-outgoing';

    return (
        <div className="trans-item" onClick={handleItemClick}>
            <div className="user-data">
                <div className={`avatar ${avatarClass}`}></div>
                <div className="username">{userNameWithSign}</div>
            </div>
            <div className={`amount ${amountClass}`}>{amountWithSign}</div>
        </div>
    );
};

export default TransactionItem;
