import FoodCard from "../../../components/FoodCard";


const OrderTab = ({items}) => {
    return (
        <div>
            {
                    items.map(item => <FoodCard 
                        key={item._id}
                    item={item}
                    >
                    
                    </FoodCard>)
                }
        </div>
    );
};

export default OrderTab;