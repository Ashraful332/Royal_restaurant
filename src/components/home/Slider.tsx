import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import "./home.css"

const AutoSlider = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 3000, // Slower transition for smoothness
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0, // Continuous without pause
        cssEase: 'linear', // Linear easing for consistent speed
        pauseOnHover: false, // Never stop
        pauseOnFocus: false,
        swipe: false, // Disable user interaction
        touchMove: false,
    };

    return (
        <div className="mt-primary">
            <div className="smooth-slider-wrapper">
                <Slider {...settings}>
                    <div className="bg-primary py-4 flex flex-col items-center">
                        <img src="https://i.ibb.co/60MHFz5K/Group.png" alt="logo" />
                        <p>Best Food</p>
                    </div>
                    <div className="bg-primary py-4 flex flex-col items-center">
                        <img src="https://i.ibb.co/60MHFz5K/Group.png" alt="logo" />
                        <p>Fast Delivery</p>
                    </div>
                    <div className="bg-primary py-4 flex flex-col items-center">
                        <img src="https://i.ibb.co/60MHFz5K/Group.png" alt="logo" />
                        <p>Free Test</p>
                    </div>
                    <div className="bg-primary py-4 flex flex-col items-center">
                        <img src="https://i.ibb.co/60MHFz5K/Group.png" alt="logo" />
                        <p>Best Service</p>
                    </div>
                    {/* Duplicate slides for better loop */}
                    <div className="bg-primary py-4 flex flex-col items-center">
                        <img src="https://i.ibb.co/60MHFz5K/Group.png" alt="logo" />
                        <p>Best Food</p>
                    </div>
                    <div className="bg-primary py-4 flex flex-col items-center">
                        <img src="https://i.ibb.co/60MHFz5K/Group.png" alt="logo" />
                        <p>Fast Delivery</p>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default AutoSlider;