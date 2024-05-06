import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";

function Header() {
  return (
    <header className="border-b-2 border-b-orange-500 py-6">
      <div className="container flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-bold tracking-tight text-orange-500"
        >
          MernEats.com
        </Link>
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

export default Header;
