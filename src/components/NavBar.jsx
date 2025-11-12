import { FiHome, FiStar, FiMessageCircle, FiUser } from "react-icons/fi";

const navbar = () => {
  return (
    <div className="h-14 fixed bottom-0 w-[416px]   backdrop-blur-lg py-4 px-8 m-auto flex justify-between items-center self-start">
      <FiHome size={20} className="hover:cursor-pointer opacity-70" />
      <FiStar size={20} className="hover:cursor-pointer opacity-70" />
      <FiMessageCircle size={20} className="hover:cursor-pointer opacity-70" />
      <FiUser size={20} className="hover:cursor-pointer opacity-70" />
    </div>
  );
};

export default navbar;
