import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle";
import { useForm } from 'react-hook-form';

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddItem = () => {
    const [axiosSecure] = useAxiosSecure();

    const { register, handleSubmit } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
  const onSubmit = data => {
    const formData = new FormData();
    formData.append('image', data.image[0]);

    fetch(img_hosting_url,{
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then(imgResponse => {
        console.log(imgResponse);
        if(imgResponse.success){
            const imgURL = imgResponse.data.display_url;
            const {name, price, category, recipe} = data;
            const newItem = {name, price: parseFloat(price), category, recipe, image:imgURL};
            console.log(newItem);

            axiosSecure.post('/menu', newItem)
            .then(data => {
                console.log('after posting new menu item', data.data)
                if(data.data.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Menu Item Added Successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
    })
};

    // console.log(img_hosting_token)
    return (
        <div className="w-full px-10">
            <SectionTitle subHeading={"What's New"} heading={"Add An Item"}></SectionTitle>

            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full ">
                <label className="label">
                    <span className="label-text font-semibold">Recipe Name</span>
                </label>
                <input type="text" placeholder="Recipe Name" className="input input-bordered w-full "  {...register("name", {required: true, maxLength: 120})} />
            </div>

            <div className="flex my-4">
            <div className="form-control w-full ">
                <label className="label">
                    <span className="label-text">Category*</span>
                </label>
                <select defaultValue={"Pick One"} {...register("category", { required: true })} className="select select-bordered">
                    <option disabled>Pick one</option>
                    <option>Pizza</option>
                    <option>Soup</option>
                    <option>Salad</option>
                    <option>Drinks</option>
                    <option>Dessert</option>
                    <option>Desi</option>
                </select>
            </div>

            <div className="form-control w-full ml-4">
                <label className="label">
                    <span className="label-text font-semibold">Price</span>
                </label>
                <input type="number" placeholder="Type here" className="input input-bordered w-full "  {...register("price", {required: true, maxLength: 80})} />
            </div>
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text-alt">Recipe Details</span>
                </label>
                <textarea className="textarea textarea-bordered h-24" placeholder="Bio" {...register("recipe", {required: true})} ></textarea>
                </div>

                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text-alt">Item Image</span>
                    </label>
                    <input type="file" className="file-input file-input-bordered w-full " {...register("image", {required: true})} />
                </div>

                <input className="btn btn-sm my-4" type="submit" value="Add Item"/>
            </form>
        </div>
    );
};

export default AddItem;