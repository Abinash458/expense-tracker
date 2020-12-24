import React from 'react';

const isIncome = Math.round(Math.random())

const InfoCard = () => {
    return (
        <div style={{ textAlign: 'center', padding: '0 10%' }}>
            Try Saying: <br />
            Add {isIncome ? 'Income ' : 'Expense '}
            for {isIncome ? '$100 ' : '$50 '}
            in catagory {isIncome ? 'Business ' : 'House '}
            from {isIncome ? 'Monday' : 'Next Tuesday'}...
        </div>
    )
}

export default InfoCard
