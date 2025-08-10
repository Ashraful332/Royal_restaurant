

const Our_Menu = () => {

const menuData = {
  leftColumn: [
    {
      name: "Chawl Beans and Mint Burger",
      price: "$11",
      image: "https://i.ibb.co/ZRmL8Hgg/637cb9ba322617428493829d-1111.png"
    },
    {
      name: "Chawli Beans and Mint Burger",
      price: "$11",
      image: "https://i.ibb.co/ZRmL8Hgg/637cb9ba322617428493829d-1111.png"
    },
    {
      name: "Chawli Beans and Mint Burger",
      price: "$11",
      image: "https://i.ibb.co/ZRmL8Hgg/637cb9ba322617428493829d-1111.png"
    },
    {
      name: "Chawli Beans and Mint Burger",
      price: "$11",
      image: "https://i.ibb.co/ZRmL8Hgg/637cb9ba322617428493829d-1111.png"
    }
  ],
  rightColumn: [
    {
      name: "Chawli Beans and Mint Burger",
      price: "$11",
      image: "https://i.ibb.co/ZRmL8Hgg/637cb9ba322617428493829d-1111.png"
    },
    {
      name: "Chawli Beans and Mint Burger",
      price: "$11",
      image: "https://i.ibb.co/ZRmL8Hgg/637cb9ba322617428493829d-1111.png"
    },
    {
      name: "Chawli Beans and Mint Burger",
      price: "$11",
      image: "https://i.ibb.co/ZRmL8Hgg/637cb9ba322617428493829d-1111.png"
    },
    {
      name: "Chawli Beans and Mint Burger",
      price: "$11",
      image: "https://i.ibb.co/ZRmL8Hgg/637cb9ba322617428493829d-1111.png"
    }
  ]
};

const MenuColumn = ({ items }) => (
  <div className="flex-1 space-y-4">
    {items.map((item, index) => (
      <div key={index}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="w-[100px] h-[100px] flex-shrink-0 overflow-hidden object-cover relative">
            <img
              src={item.image}
              alt={item.name}
              className="hover-image-menu-out w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between flex-1 text-lg sm:text-2xl">
            <p>{item.name}</p>
            <p className="sm:ml-4">{item.price}</p>
          </div>
        </div>
        <hr className="mt-2" />
      </div>
    ))}
  </div>
);


    return (
        <div className="flex-center max-w-[1170px] mx-auto mb-high ">
            <p>Our Menu</p>
            <h3 className="text-header mb-10 mt-3 ">
                Choose & Taste What You Like
            </h3>
            <p className="mb-primary  w-[80vw] sm:w-[60%] lg:w-[55%] text-center ">
                A list of top Bangladeshi food including mains, drinks, and deserts you must try while in Bangladesh, for an authentic experience. Check now!
            </p>
            <div className="flex items-center gap-11 text-3xl pb-6 overflow-x-scroll sm:overflow-auto w-[100vw] sm:w-auto mx-auto ">
                <p>All</p>
                <p>Appetizer</p>
                <p>Soup</p>
                <p>Dessert</p>
                <p>Drinks</p>
            </div>
            <hr className="w-[87%] mb-12 h-[1.5px] text-[var(#FB8F2C)] bg-amber-400 brightness-50 "/>
            <div className="flex flex-col md:flex-row md:h-[500px] gap-4">
                {/* Left Column */}
                <MenuColumn items={menuData.leftColumn} />

                {/* Divider */}
                <div className="hidden md:block w-[1.5px] bg-[#ffffffd8] "></div>

                {/* Right Column */}
                <MenuColumn items={menuData.rightColumn} />
            </div>                   
        </div>
    );
};

export default Our_Menu;