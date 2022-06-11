import SearchIcon from "../../images/Search.png";
import BurgerIcon from "../../images/Burger.png";

const Header = () => {
  return (
    <div className="flex py-4 justify-between">
      <div>
        <span className="bg-black text-white p-3 rounded-md mr-3">News</span>
        <span className="text-lg">Portal</span>
      </div>
      <div className="flex">
        <img src={SearchIcon} alt="search" className="w-[16px] h-[16px] mr-5" />
        <img src={BurgerIcon} alt="burger" className="w-[16px] h-[16px]" />
      </div>
    </div>
  );
};

export default Header;
