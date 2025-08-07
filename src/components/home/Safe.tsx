

const Cook = () => {
    return (
        <div className="mt-primary flex-center">
            <h2 className="text-6xl font-bold text-center mb-9">They will cook for you</h2>
            <p className="text-center mb-9  w-[97vw] sm:w-[70vw] xl:w-[35vw]">
                Our Diners can enjoy cooking for themselves, or visiting a curated selection of restaurants in the area. They will cook for you and make sure you have a home away from home at all times.
            </p>
            <div className="flex flex-row w-[60vw] justify-between ">
                <div className="flex flex-col items-center gap-1">
                    <img src="https://i.ibb.co.com/svgd09w6/6371cfd801967374d6cfa502-Rectangle-82.png" alt="cook" />
                    <h3 className="mt-2 font-semibold text-2xl">Jubed Ahmed</h3>
                    <p>Chef</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <img src="https://i.ibb.co.com/WdGLrsV/6371d01163d653e97e91b571-Rectangle-83.png" alt="cook" />
                    <h3 className="mt-2 font-semibold text-2xl">Delwar Hussen</h3>
                    <p>Assistant Chef</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <img src="https://i.ibb.co.com/QF8hCb06/6371d02225366f2747f263c7-Rectangle-84.png" alt="cook" />
                    <h3 className="mt-2 font-semibold text-2xl">Tajul Islam</h3>
                    <p>Chef</p>
                </div>
            </div>
        </div>
    );
};

export default Cook;