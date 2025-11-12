import Link from "next/link";
import { FiBell } from "react-icons/fi";
const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <Link href="/">
        <span className="font-extrabold tracking-tighter text-black text-lg">DummyFriends</span>
      </Link>
      <FiBell size={20} color="black"  className="hover:cursor-pointer opacity-70" />
    </header>
  );
};

export default Header;
