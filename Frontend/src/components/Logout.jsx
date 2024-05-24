import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";

const Logout = () => {
  const [authUser, setAuthuser] = useAuth();
  const handleLogout = () => {
    try {
      setAuthuser({
        ...authUser,
        User: null,
      });

      localStorage.removeItem("User");
      toast.success("Logout successful");
      //   document.getElementById("my_modal_3").close();
      //   window.location.reload();
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      toast.error("error : " + error.message);
      setTimeout(() => {}, 1000);
    }
  };
  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
