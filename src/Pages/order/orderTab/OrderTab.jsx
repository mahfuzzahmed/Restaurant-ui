import React from 'react';
import FoodCard from '../../../Components/FoodCard';

const OrderTab = ({items}) => {
    return (
        <div>
            <div className="grid md:grid-cols-3 gap-5">
                {
                    items.map(item => <FoodCard item={item}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default OrderTab;