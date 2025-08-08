const Opening_Times = () => {
    return (
        <div className="mt-[var(--margin-high)] mb-high flex-center max-w-[1170px] mx-auto">
            <div className="flex flex-col sm:flex-row mx-auto w-full h-[500px] sm:h-[423px]">
                {/* Left: Image Background Card */}
                <div className="w-[100%] sm:w-1/2 h-full">
                    <div className="opening-image-div">
                        <h3 className="text-2xl font-semibold mb-2">Find Us Here</h3>
                        <p>Avenue Marina 34568 NY</p>
                        <p>(U.S)+0123 456</p>
                        <p>7890hellouihut@gmail.com</p>
                    </div>
                </div>

                {/* Right: Red Background Card */}
                <div className="w-[100%] sm:w-1/2 h-full bg-[var(--primary)] text-black flex flex-col px-6 py-6">
                    <h2 className="text-center text-3xl font-bold mb-6">Opening Times</h2>
                    <div className="flex flex-grow items-center justify-center gap-10 text-center text-sm sm:text-lg ">
                        <div className="space-y-2">
                        <p>Mon</p>
                        <p>Wed</p>
                        <p>Thu</p>
                        <p>Fri</p>
                        <p>Sat/Sun</p>
                        </div>
                        <div className="space-y-2">
                        <p>17:00 to 23:00</p>
                        <p>19:00 to 24:00</p>
                        <p>14:00 to 18:00</p>
                        <p>16:00 to 24:00</p>
                        <p>20:00 to 4:00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Opening_Times;
