import FoodCard from "../../../components/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

const OrderTab = ({items}) => {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      };
    
    return (
        <div>
            <Swiper
                pagination={pagination}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {items.reduce((accumulator, item, index) => {
                    if (index % 6 === 0) {
                    accumulator.push([]);
                    }
                    accumulator[accumulator.length - 1].push(item);
                    return accumulator;
                }, []).map((group, index) => (
                    <SwiperSlide key={index}>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3">
                        {group.map((item) => (
                        <FoodCard key={item._id} item={item}></FoodCard>
                        ))}
                    </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-pagination"></div>
        </div>
    );
};

export default OrderTab;