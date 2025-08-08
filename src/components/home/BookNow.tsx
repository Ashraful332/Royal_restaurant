

const BookNow = () => {
    return (
        <div className="flex-center max-w-[1170px] mx-auto mt-high">
            <div className="flex flex-col sm:flex-col text-black mx-auto ">
                <div className="flex flex-col bg-primary pl-10 pt-5 w-full sm:w-[50%] ">
                    <h2 className="text-2xl lg:text-4xl font-bold ">Reserve ! Book Now</h2>
                    <button className="text-xl">Set Date</button>
                    <button className="w-[60%] bg-black text-white py-1 ">Book now</button>
                </div>
                <div className="w-full sm:w-[50%]">
                    <img src="https://i.ibb.co/YF266N2s/638192069f6b477481e3a33f-Group-284.png" alt="coffee"
                    className="w-auto h-auto" />
                </div>
            </div>
        </div>
    );
};

export default BookNow;