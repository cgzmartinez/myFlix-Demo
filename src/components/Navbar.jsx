import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex items-center m-7">
      <Link to={"/"} className="text-2xl font-sans font-bold pr-5">
        myFlix
      </Link>
      <Link to={"/"} className="px-5">
        Movies
      </Link>
      <Link to={"/profile"} className="px-5">
        Profile
      </Link>
      <Link to={"/"} className="ml-auto flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>
        <h3 className="md:block hidden pl-2">Logout</h3>
      </Link>
    </div>
  );
}
