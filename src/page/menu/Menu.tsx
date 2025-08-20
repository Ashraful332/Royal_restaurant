import Footer from "../../components/navigation/Footer";
import Navbar from "../../components/navigation/Navbar";
import Photo1 from "../../assets/image/Popular/1.png";
import star from "../../assets/image/Popular/star.svg";
import line from "../../assets/icon/line.png";
import "../page.css"


const Menu = () => {
    return (
        <div >
            <Navbar/>
            <div className="flex-center text-primary max-w-screen overflow-x-hidden px-[14px] sm:px-[30px] ">
                <div className="flex flex-col items-center mb-high">
                    <h2 className="text-header">Popular Menu</h2>
                    <img src={line} alt="logo" className="mb-primary mt-3 " />
                    <div className="flex flex-col lg:flex-row items-start gap-5">
                        <div className=" w-[97vw] sm:w-[370px] ">
                            <div className="w-[97vw] sm:w-[370px] h-auto sm:h-[300px] overflow-hidden object-center relative ">
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
                                    <button className="Order-btn ">
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
                        <div className=" w-[97vw] sm:w-[370px] ">
                            <div className="w-[97vw] sm:w-[370px] h-auto sm:h-[300px] overflow-hidden object-center relative ">
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
                                    <button className="Order-btn ">
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
                        <div className=" w-[97vw] sm:w-[370px] ">
                            <div className="w-[97vw] sm:w-[370px] h-auto sm:h-[300px] overflow-hidden object-center relative ">
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
                                    <button className="Order-btn ">
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
                </div>
                <div className="menu-div-2 mb-high ">
                    <div className="w-[90vw] sm:w-[70vw] lg:w-[50vw] xl:w-[40vw]  bg-[#0000007e] p-6 flex flex-col items-center text-center gap-5 ">
                        <h2 className="text-header">Food is not just eating energy</h2>
                        <p>It's an experience.</p>
                        <button className="bg-primary text-white px-5 py-3  hover:bg-amber-600">Order Now</button>
                    </div>
                </div>
                <div className="flex flex-col items-center mb-high">
                    <h2 className="text-header">All Menu</h2>
                    <img src={line} alt="logo" className="mb-primary mt-3 " />
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                        <div className=" w-[97vw] sm:w-[370px] ">
                            <div className="w-[97vw] sm:w-[370px] h-auto sm:h-[300px] overflow-hidden object-center relative ">
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
                                    <button className="Order-btn ">
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
                        <div className=" w-[97vw] sm:w-[370px] ">
                            <div className="w-[97vw] sm:w-[370px] h-auto sm:h-[300px] overflow-hidden object-center relative ">
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
                                    <button className="Order-btn ">
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
                        <div className=" w-[97vw] sm:w-[370px] ">
                            <div className="w-[97vw] sm:w-[370px] h-auto sm:h-[300px] overflow-hidden object-center relative ">
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
                                    <button className="Order-btn ">
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
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Menu;