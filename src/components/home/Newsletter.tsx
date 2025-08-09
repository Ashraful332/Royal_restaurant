

const Newsletter = () => {
    return (
        <div className="mt-high mb-sec data-main  ">
            <div className="flex flex-col sm:flex-row items-center justify-center w-[90vw] xl:w-[60vw] max-w-[1170px] sm:gap-[30%] lg:gap-[60%] mx-auto">
                <div className="flex flex-col text-center sm:text-start gap-2" >
                    <h2 className="text-white font-bold text-xl sm:text-3xl">Newsletter</h2>
                    <p className="text-sm ">Subscribe to our newsletter and receive 15% discount from your order.</p>
                </div>
                <div className="form-control pr-4 ">
                    <input type="text" required />
                    <label>
                        <span style={{ transitionDelay: '0ms' }}>E</span>
                        <span style={{ transitionDelay: '50ms' }}>m</span>
                        <span style={{ transitionDelay: '100ms' }}>a</span>
                        <span style={{ transitionDelay: '150ms' }}>i</span>
                        <span style={{ transitionDelay: '200ms' }}>l</span>
                        <span style={{ transitionDelay: '250ms' }}> </span>
                        <span style={{ transitionDelay: '300ms' }}>a</span>
                        <span style={{ transitionDelay: '350ms' }}>d</span>
                        <span style={{ transitionDelay: '400ms' }}>d</span>
                        <span style={{ transitionDelay: '450ms' }}>r</span>
                        <span style={{ transitionDelay: '500ms' }}>e</span>
                        <span style={{ transitionDelay: '550ms' }}>s</span>
                        <span style={{ transitionDelay: '600ms' }}>s</span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;