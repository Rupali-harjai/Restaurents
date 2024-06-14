import ComingSoon from "../images/coming_soon.png";

const Grocerymart = () => {
  return (
    <div className="flex flex-col items-center m-4">
      <h1 className="font-bold text-3xl text-center pb-5 mb-5 underline">
        GroceryMart
      </h1>
      <h2 className="text-xs sm:text-lg lg:text-2xl font-medium md:font-semibold text-center text-white bg-[#cb7631] p-4 m-4 rounded-md">
        Unlock the Secrets of Flavorful Food with New Experience
      </h2>
      <img
        className="scale-125 h-72 sm:h-96 p-4 m-6"
        src={ComingSoon}
        alt="Coming Soon"
      />
    </div>
  );
};

export default Grocerymart;
