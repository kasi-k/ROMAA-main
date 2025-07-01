
import LOGO from "../assets/images/romaa logo.png";
import { Search } from "lucide-react";
import { HiOutlineBell } from "react-icons/hi";
import { useSearch } from "../components/SearchBar";
import ThemeToggle from "../components/ThemeToggle";
import { HiOutlineTicket } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Headers = () => {
  const { searchTerm, setSearchTerm } = useSearch();
  const navigate = useNavigate();
  return (
    <div className=" w-full z-10 font-roboto-flex flex justify-between items-center dark:bg-white pt-2 px-2 h-1/12">
      <div className="flex gap-4  ">
        <img src={LOGO} className="w-36 ml-8 -mt-1" alt="Logo Image" />
        <div className="flex items-center gap-2 px-2 h-10 rounded-md  bg-light-blue">
          <Search className="size-5 text-darkest-blue" />
          <input
            type="text"
            className="w-56 placeholder:text-darkest-blue outline-0"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="flex justify-center lg:p-2 md:p-2 p-1.5 lg:gap-3 md:gap-2 gap-1.5 bg-layout-light dark:bg-layout-dark items-center text-center dark:text-white rounded-full">
        <div className=" flex  items-center gap-2 text-sm font-extralight text-nowrap text-darkest-blue ">
          Profile name
          <div className="">
            <button className="bg-light-blue text-darkest-blue font-medium w-9 h-9 text-sm rounded-full flex items-center justify-center"
            onClick={()=>{navigate('/dashboard/profile')}}>
              KA
            </button>
          </div>
        </div>
        <p className="bg-light-blue w-9 h-9 lg:p-2 md:p-2 p-1.5 rounded-full">
          <HiOutlineBell className=" size-5 text-darkest-blue" />
        </p>
        <p className="bg-light-blue w-9 h-9 lg:p-2 md:p-2 p-1.5 rounded-full"
        onClick={()=>{navigate('/dashboard/tickets')}}>
          <HiOutlineTicket className=" size-5 text-darkest-blue" />
        </p>

        <div className="pb-0.5 ">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Headers;
