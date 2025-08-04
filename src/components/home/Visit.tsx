import "./home.css"

const Visit = () => {
    return (
        <div className="flex-center">
            <h3 className="text-6xl font-bold mb-4 text-center">Visit Our Restaurant</h3>
            <p className="mb-9  w-[97vw] sm:w-[70vw] xl:w-[35vw] text-center ">
                Quality country-style menu selection, friendly and efficient service, combined with genuine value has kept Our Best serving families like yours for over 28.
            </p>
            <div className="flex flex-col lg:flex-row items-start gap-7">
                <div className="flex flex-col items-center gap-7">
                    <div className="visit-image-div">
                        <img src="https://i.ibb.co/nq4rK3bh/637dae75fb4b6d377f54614a-Rectangle-77.png" alt="our restaurant" 
                        className="  image-visit " />
                    </div>
                    <div className="visit-image-div">
                        <img src="https://i.ibb.co/4Zxh0CRb/637daea06029730be63878bc-Rectangle-80.png" alt="our restaurant" 
                        className="  image-visit " />
                    </div>
                </div>
                <div>
                    <div className="visit-image-div-center">
                        <img src="https://i.ibb.co/KjkRHKJR/637daeaf0c998d31d6755dd8-Rectangle-78.png" alt="our restaurant" 
                        className="  image-visit " />
                    </div>
                </div>
                <div className="flex flex-col items-center gap-7">
                    <div className="visit-image-div">
                        <img src="https://i.ibb.co/q31ywz7s/637daec060297333a0387c05-Rectangle-79.png" alt="our restaurant" 
                        className=" image-visit  " />
                    </div>
                    <div className="visit-image-div">
                        <img src="https://i.ibb.co/gMXH4gyn/637daed33e538d3989f24832-Rectangle-81.png" alt="our restaurant" 
                        className="  image-visit " />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Visit;