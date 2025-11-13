import { FiStar } from "react-icons/fi";
import { GoStarFill } from "react-icons/go";

const IconButton = () => {
  return (
    <div className="star-icon p-1 bg-white/30 w-fit rounded-full  absolute top-3 right-3">
      <FiStar size={20} color="white" className="" />
    </div>
  );
};

export default IconButton;
