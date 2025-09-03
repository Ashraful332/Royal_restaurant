import star from "../../assets/image/Popular/star.svg";
import Arrow from "../../assets/image/Popular/arrow.svg";
import { Link } from "react-router";
import OrderNow from "../ui/order/OrderNow";

const Popular_Food = () => {
    // 👉 All data in one variable
    const PopulerMenu = [
        {
            _id: "68b7e78ad44644f456bb2391",
            id: 1,
            foodName: "Cake",
            price: 486,
            details: "Sweetie cake with unlimited creme ,chocolate and vanilla flavor.",
            PhotoUrl: "https://i.ibb.co.com/8nfvPnkk/pexels-dhayaeddart-5276663.jpg",
            rating: 5,
        },
        {
            _id: "68b7e65dd44644f456bb238e",
            id: 2,
            foodName: "Egg Rice",
            price: 248,
            details: "Egg rice and pasta with pure vegetable healthy and tasty for just 248",
            PhotoUrl: "https://i.ibb.co.com/Csnfks3d/pexels-lum3n-44775-1410236.jpg",
            rating: 5,
        },
        {
            _id: "",
            id: 3,
            foodName: "chicken kebab",
            price: 260,
            details: "spicy flavor and crunchy test with hot chili souse fell like assume just for you .",
            PhotoUrl: "https://i.ibb.co.com/3mJmwKcB/victoria-shes-UC0-HZd-Uit-WY-unsplash.jpg",
            rating: 5,
        },
    ];

    return (
        <div className="flex-center text-white max-w-[1170px] h-auto mx-auto pb-9 ">
            <h3 className=" text-header mb-7 pt-16">Most popular food</h3>
            <p className=" w-[80vw] sm:w-[60%] lg:w-[35%] text-center mb-[50px] ">
                A list of most popular Bangladeshi food including mains, drinks, and deserts you must try while in Bangladesh, for an authentic experience. Check now!
            </p>

            {/* 👉 Loop through popular menu */}
            <div className="flex flex-col xl:flex-row gap-7">
                {PopulerMenu.map((item) => (
                    <div key={item.id} className="w-[97vw] sm:w-[370px] ">
                        <div className="w-[97vw] sm:w-[370px] h-auto sm:h-[300px] overflow-hidden object-center relative ">
                            <img src={item.PhotoUrl} alt={item.foodName} className="hover-image-popular " />
                        </div>
                        <div>
                            <div className="mt-5 flex justify-between text-2xl">
                                <h4>{item.foodName}</h4>
                                <p>${item.price}</p>
                            </div>
                            <p className="text-[var(--pTx-color)] pt-[6px] pb-12 ">
                                {item.details}
                            </p>
                            <div className="flex justify-between">
                                <OrderNow
                                    _id={item._id}
                                    foodName={item.foodName}
                                    price={item.price}
                                    details={item.details}
                                    photo={item.PhotoUrl || "photo is not loading"}
                                />
                                <div className="flex-row-center gap-[2px] ">
                                    {Array.from({ length: item.rating }).map((_, i) => (
                                        <img key={i} src={star} alt="star" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Link to='/blog' className="mt-10 flex justify-center mx-auto Explore- pb-10 ">
                Explore All Food
                <img src={Arrow} alt="star" className="ml-2" />
            </Link>
        </div>
    );
};

export default Popular_Food;
