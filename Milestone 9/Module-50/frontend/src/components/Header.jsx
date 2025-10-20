import logo from "../assets/logo.png";
import { format } from "date-fns";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 md:mt-[30px]">
      <img src={logo} alt="" />
      <p className="text-base-200">Journalism Without Fear or Favour</p>
      {format(new Date(), "EEEE, LLLL dd, yyyy")}
      <div className="flex gap-4 p-4 items-center justify-center bg-base-300">
        <button className="bg-primary text-white text-[20px] py-[9px] px-[24px]">
          Latest
        </button>
        <Marquee>
          <p className="font-bold">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default Header;
