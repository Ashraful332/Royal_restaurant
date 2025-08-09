

const Offers = () => {
    return (
        <div className="flex-center mt-high mx-auto max-w-[1170px]">
            <h2 className="text-header mb-10">Our Daily Offers</h2>
            <div className="flex flex-col lg:flex-row gap-8 ">
                <div className="w-full lg:w-[50%] relative ">
                    <div>
                        <img src="https://i.ibb.co/s99P8STc/63819251c50a511441758a4f-Rectangle-27.png" alt="offer"
                        className="object-cover" />
                    </div>
                    <div className="absolute top-3 sm:top-10 left-5">
                        <h3 className="text-lg sm:text-2xl font-semibold text-white">Lunch Time</h3>
                        <p className="text-xl font-bold">
                            <span className="text-[var(--primary)] text-2xl sm:text-6xl italic ">30%</span>
                            off
                        </p>
                        <p className="mt-3 sm:mt-6 text-sm">We love food, lots of different and food, just like you.</p>
                        <button className="mt-3 sm:mt-6 bg-primary text-white text-sm sm:text-xl py-1 px-3 sm:py-3 sm:px-7 ">Order Now</button>
                    </div>
                </div>
                <div className="w-full lg:w-[50%] flex flex-col gap-6 ">
                    <div className=" flex items-start h-auto sm:h-[130px] gap-3 ">
                        <div>
                            <img src="https://i.ibb.co/spwh3cQd/63786d3454cc507817e7bd6c-1.png" alt="food"  
                            className=" w-auto sm:w-[130px] h-auto sm:h-[120px] object-cover "/>
                        </div>
                        <div className="flex flex-col justify-between" >
                            <div className="flex items-center justify-between w-auto sm:w-[60%] ">
                                <p className=" text-sm sm:text-lg font-bold">cheese burger</p>
                                <p className=" text-sm sm:text-lg font-bold">$32</p>
                            </div>
                            <p className="text-[#ffffff9d] w-auto sm:w-[60%] mt-4 text-sm sm:text-lg ">mutton, chcken and vegetable fried rolls served with lettuce wraps</p>
                        </div>
                    </div>
                    <div className=" flex items-start h-auto sm:h-[130px] gap-3 ">
                        <div>
                            <img src="https://i.ibb.co/Pv03dxfm/63ba6d059d5ae7789894d6ed-Rectangle-10.png" alt="food" 
                            className="w-auto sm:w-[130px] h-auto sm:h-[120px] object-cover  " />
                        </div>
                        <div className="flex flex-col justify-between" >
                            <div className="flex items-center justify-between w-auto sm:w-[60%] ">
                                <p className="text-sm sm:text-lg font-bold">Spicy Club</p>
                                <p className="text-sm sm:text-lg font-bold">$42</p>
                            </div>
                            <p className="text-[#ffffff9d] w-auto sm:w-[60%] mt-4  text-sm sm:text-lg ">mutton, chcken and vegetable fried rolls served with lettuce wraps</p>
                        </div>
                    </div>
                    <div className=" flex items-start h-auto sm:h-[130px] gap-3 ">
                        <div>
                            <img src="https://i.ibb.co/Hf1h7Ncs/63ba6d50d2f5f52a5dbba9c7-Rectangle-12.png" alt="food" 
                            className="w-auto sm:w-[130px] h-auto sm:h-[120px] object-cover  " />
                        </div>
                        <div className="flex flex-col justify-between" >
                            <div className="flex items-center justify-between w-auto sm:w-[60%] ">
                                <p className="text-sm sm:text-lg font-bold">fruit sandwich</p>
                                <p className="text-sm sm:text-lg font-bold">$12</p>
                            </div>
                            <p className="text-[#ffffff9d] w-auto sm:w-[60%] mt-4 text-sm sm:text-lg ">mutton, chcken and vegetable fried rolls served with lettuce wraps</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;