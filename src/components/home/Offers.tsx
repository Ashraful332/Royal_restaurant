

const Offers = () => {
    return (
        <div className="flex-center mt-high mx-auto max-w-[1170px]">
            <h2 className="text-6xl font-bold text-center mb-10">Our Daily Offers</h2>
            <div className="flex flex-col lg:flex-row gap-8 ">
                <div className="w-[50%] relative ">
                    <div>
                        <img src="https://i.ibb.co/s99P8STc/63819251c50a511441758a4f-Rectangle-27.png" alt="offer"
                        className="object-cover" />
                    </div>
                    <div className="absolute top-10 left-5">
                        <h3 className="text-2xl font-semibold text-white">Lunch Time</h3>
                        <p className="text-xl font-bold">
                            <span className="text-[var(--primary)] text-6xl italic ">30%</span>
                            off
                        </p>
                        <p className="mt-6 text-sm">We love food, lots of different and food, just like you.</p>
                        <button className="mt-6 bg-primary text-white text-xl py-3 px-7 ">Order Now</button>
                    </div>
                </div>
                <div className="w-[50%] flex flex-col gap-6 ">
                    <div className=" flex items-start h-[130px] gap-3 ">
                        <div>
                            <img src="https://i.ibb.co/spwh3cQd/63786d3454cc507817e7bd6c-1.png" alt=""  
                            className="w-[130px] h-[120px] object-cover "/>
                        </div>
                        <div className="flex flex-col justify-between" >
                            <div className="flex items-center justify-between w-[60%] ">
                                <p className="text-lg font-bold">cheese burger</p>
                                <p className="text-lg font-bold">$32</p>
                            </div>
                            <p className="text-[#ffffff9d] w-[60%] mt-4 ">mutton, chcken and vegetable fried rolls served with lettuce wraps</p>
                        </div>
                    </div>
                    <div className=" flex items-start h-[130px] gap-3 ">
                        <div>
                            <img src="https://i.ibb.co/Pv03dxfm/63ba6d059d5ae7789894d6ed-Rectangle-10.png" alt="" 
                            className="w-[130px] h-[120px] object-cover " />
                        </div>
                        <div className="flex flex-col justify-between" >
                            <div className="flex items-center justify-between w-[60%] ">
                                <p className="text-lg font-bold">Spicy Club</p>
                                <p className="text-lg font-bold">$42</p>
                            </div>
                            <p className="text-[#ffffff9d] w-[60%] mt-4 ">mutton, chcken and vegetable fried rolls served with lettuce wraps</p>
                        </div>
                    </div>
                    <div className=" flex items-start h-[130px] gap-3 ">
                        <div>
                            <img src="https://i.ibb.co/Hf1h7Ncs/63ba6d50d2f5f52a5dbba9c7-Rectangle-12.png" alt="" 
                            className="w-[130px] h-[120px] object-cover " />
                        </div>
                        <div className="flex flex-col justify-between" >
                            <div className="flex items-center justify-between w-[60%] ">
                                <p className="text-lg font-bold">fruit sandwich</p>
                                <p className="text-lg font-bold">$12</p>
                            </div>
                            <p className="text-[#ffffff9d] w-[60%] mt-4 ">mutton, chcken and vegetable fried rolls served with lettuce wraps</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;