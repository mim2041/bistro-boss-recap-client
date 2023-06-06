import SectionTitle from "../../../components/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured-item text-white pt-8 my-20">
            <SectionTitle subHeading={"check it out"} heading={"Featured Item"}></SectionTitle>

            <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">where can i get some?</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem unde accusamus, atque molestiae quisquam sapiente sed inventore, alias deleniti ut maxime repellendus. Nostrum ducimus quisquam deserunt est modi atque perferendis porro nesciunt ab soluta! Et similique temporibus, rerum possimus dolorum praesentium quisquam quaerat quo soluta perspiciatis accusantium ab. Vel, dolores.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-8">View Full Menu</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;