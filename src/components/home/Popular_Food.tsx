import Photo1 from "../../assets/image/Popular/1.png";
import star from "../../assets/image/Popular/star.svg";
import Arrow from "../../assets/image/Popular/arrow.svg";


const Popular_Food = () => {
    return (
        <div className="flex-center text-white max-w-[1170px]  h-auto mx-auto pb-9 bg-amber-200 ">
            <h3 className=" text-header mb-7 pt-16">Most popular food</h3>
            <p className=" w-[80vw] sm:w-[60%] lg:w-[35%] text-center mb-[50px] ">
                A list of most popular Bangladeshi food including mains, drinks, and deserts you must try while in Bangladesh, for an authentic experience. Check now!
            </p>
            <div className="flex flex-col xl:flex-row gap-7">
                <div className="w-[370px] ">
                    <div className="w-[370px] h-[300px] overflow-hidden object-center relative ">
                        <img src={Photo1} alt="photo 1" className="hover-image-popular " />
                    </div>
                    <div>
                        <div className="mt-5 flex justify-between text-2xl">
                            <h4>Schezwan Noodles</h4>
                            <p>$49</p>
                        </div>
                        <p className="text-[var(--pTx-color)] pt-[6px] pb-4 text-center ">
                            Fresh toasted sourdough bread with olive oil and pomegranate.
                        </p>
                        <div className="flex justify-between">
                            <button className="Order-btn">
                                Order Now
                            </button>
                            <div className="flex-row-center gap-[2px] ">
                                <img src={star} alt="photo star" />
                                <img src={star} alt="photo star" />
                                <img src={star} alt="photo star" />
                                <img src={star} alt="photo star" />
                                <img src={star} alt="photo star" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[370px] ">
                    <div className="w-[370px] h-[300px] overflow-hidden object-center relative ">
                        <img src={Photo1} alt="photo 1" className="hover-image-popular " />
                    </div>
                    <div>
                        <div className="mt-5 flex justify-between text-2xl">
                            <h4>Schezwan Noodles</h4>
                            <p>$49</p>
                        </div>
                        <p className="text-[var(--pTx-color)] pt-[6px] pb-4 text-center ">
                            Fresh toasted sourdough bread with olive oil and pomegranate.
                        </p>
                        <div className="flex justify-between">
                            <button className="Order-btn">
                                Order Now
                            </button>
                            <div className="flex-row-center gap-[2px] ">
                                <img src={star} alt="photo star" />
                                <img src={star} alt="photo star" />
                                <img src={star} alt="photo star" />
                                <img src={star} alt="photo star" />
                                <img src={star} alt="photo star" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[370px] ">
                    <div className="w-[370px] h-[300px] overflow-hidden object-center relative ">
                        <img src={Photo1} alt="photo 1" className="hover-image-popular " />
                    </div>
                    <div>
                        <div className="mt-5 flex justify-between text-2xl">
                            <h4>Schezwan Noodles</h4>
                            <p>$49</p>
                        </div>
                        <p className="text-[var(--pTx-color)] pt-[6px] pb-4 text-center ">
                            Fresh toasted sourdough bread with olive oil and pomegranate.
                        </p>
                        <div className="flex justify-between">
                            <button className="Order-btn">
                                Order Now
                            </button>
                            <div className="flex-row-center gap-[2px] ">
                                <img src={star} alt="photo star" />
                                <img src={star} alt="photo star" />
                                <img src={star} alt="photo star" />
                                <img src={star} alt="photo star" />
                                <img src={star} alt="photo star" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="mt-10 flex justify-center mx-auto Explore-btn ">
                Explore All Food
                <img src={Arrow} alt="star" className="ml-2" />
            </button>
        </div>
    );
};

export default Popular_Food;