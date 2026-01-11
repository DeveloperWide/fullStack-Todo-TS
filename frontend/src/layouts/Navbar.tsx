import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="h-15 w-full flex justify-between px-8 py-3 bg-white  shadow-2xl/20  font-semibold italic items-center">
      <div className="logo">
        <h1 className="font-bold text-3xl text-teal-800">Todos</h1>
      </div>

      <div className="links text-black">
        <Link to="/" className="pr-5 hover:text-blue-800">
          Todos
        </Link>
        <Link to="/create" className="pr-5 hover:text-blue-800">
          Create Todo
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
