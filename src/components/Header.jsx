
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContex";

const Header = () => {
  const navigate = useNavigate();

  const { user, logout } = useContext(UserContext);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className=" w-[90vw]  text-white  py-6 flex justify-between items-center  m-auto">
      <div className="w-1/5">
        <Link className="text-5xl font-semibold text-white">Keeper</Link>
      </div>

      <div className="w-1/5">
        {user && (
          <div className="flex items-center space-x-4">
            <h2 className="font-semibold text-2xl">{user.name}</h2>
            <button className="px-4 py-2 rounded-md" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
