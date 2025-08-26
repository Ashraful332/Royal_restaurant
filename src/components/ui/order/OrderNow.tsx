import { useState } from "react";

type OrderNowProps = {
    _id: string
    foodName: string;
    price: number;
    details: string;
    photo: string;
};

export default function OrderNow({ _id, foodName, price, details, photo }: OrderNowProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            {/* Order Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="Order-btn"
            >
                Order Now
            </button>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 bg-[#08080898] bg-opacity-60 flex items-center justify-center z-50">
                    <div className="bg-[#ffffffe8] rounded-2xl shadow-lg p-6 w-[90%] sm:w-[500px] relative">

                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-1 right-1 text-xl w-10 h-10  rounded-full bg-white "
                        >
                            ✕
                        </button>

                        {/* Food Details */}
                        <img src={photo} alt={foodName} className="w-full h-48 object-cover rounded-lg mb-4" />
                        <h2 className="text-2xl font-semibold mb-2">{foodName}</h2>
                        <p className="text-gray-600 mb-4">{details}</p>
                        <p className="hidden">{_id}</p>
                        <p className="text-lg font-bold mb-6">${price}</p>

                        {/* Checkout Button */}
                        <button
                            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-amber-600 transition"
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
