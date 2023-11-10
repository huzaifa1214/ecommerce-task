import Link from "next/link";
import { HeaderLinks } from "../Header/constants";

const MobileMenu = () => {
  return (
    <div className="absolute top-full left-0 z-50 w-full bg-white border border-gray-100 rounded-md shadow-lg">
      <div className="container mx-auto p-2">
        {HeaderLinks.map((headerLink, index) => (
          <Link
            key={index}
            href={headerLink.path}
            className="block py-2 text-center text-sm text-gray-500 border-b border-gray-200 hover:bg-gray-50 hover:text-gray-700"
          >
            {headerLink.title}
          </Link>
        ))}
        <Link
          href={"#"}
          className="block py-2 text-center text-sm text-gray-500 border-b border-gray-200 hover:bg-gray-50 hover:text-gray-700"
        >
          Wishlist
        </Link>
        <Link
          href={"#"}
          className="block py-2 text-center text-sm text-gray-500 border-b border-gray-200 hover:bg-gray-50 hover:text-gray-700"
        >
          Profile
        </Link>
        <Link
          href={"#"}
          className="block py-2 text-center text-sm text-gray-500 border-b border-gray-200 hover:bg-gray-50 hover:text-gray-700"
        >
          Cart
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
