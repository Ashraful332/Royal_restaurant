import "../../index.css";

const About = () => {
  return (
    <section className="flex-center justify-center mx-auto py-12 px-4 mb-sec">
      <div className="flex flex-col lg:flex-row items-center gap-8 max-w-6xl w-full">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <img
            src="https://i.ibb.co.com/RTnzB1Yb/hotel.png"
            alt="Royal Restaurant"
            className="w-full sm:w-[500px] h-auto sm:h-[350px] object-cover rounded-2xl "
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-header lg:text-start mb-4 ">About Us</h2>
          <p className="text-base leading-relaxed mb-4 italic">
            For over <span className="font-semibold">16 years</span>, Royal
            Restaurant has proudly served Narayanganj, earning the reputation as
            the city's leading{" "}
            <span className="font-semibold">5-star restaurant</span>. With{" "}
            <span className="font-semibold">7 skilled chefs</span> and{" "}
            <span className="font-semibold">4 dedicated waiters</span>, we bring
            passion and excellence to every meal.
          </p>
          <p className="text-base leading-relaxed italic">
            Our <span className="font-semibold">70+ menu items</span> offer
            variety for every taste, while our clean and welcoming environment
            ensures comfort for families, friends, and food lovers. We are proud
            to be recognized as the{" "}
            <span className="font-semibold">best restaurant in Narayanganj</span>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
