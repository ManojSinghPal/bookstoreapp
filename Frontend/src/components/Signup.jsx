import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.form?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          // alert("signup successfull");
          toast.success("Signup successfull");
          setTimeout(() => {
            navigate(from, { replace: true });
            window.location.reload();
          }, 1000);
        }
        localStorage.setItem("User", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          // alert("error :" + err.response.data.message);
          toast.error("error :" + err.response.data.message);
        }
      });
  };

  return (
    <>
      <div>
        <div id="" className="flex h-screen items-center justify-center ">
          <div className="modal-box hover:scale-105 dark:bg-slate-900 dark:text-white">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <Link to="/">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </Link>
              <h3 className="font-bold text-3xl text-center">Sign Up !</h3>
              {/* Full NAme */}
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  className="w-80 rounded-md outline-none px-3 y-1"
                  type="text"
                  placeholder="Enter Full Name"
                  {...register("fullname", { required: true })}
                />
                <br />
                {errors.fullname && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              {/* Email Input Field */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  className="w-80 rounded-md outline-none px-3 y-1"
                  type="email"
                  placeholder="Enter Your Email"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              {/* Password Input Field */}
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  className="w-80 rounded-md outline-none px-3 y-1"
                  type="text"
                  placeholder="Enter Your Password"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              {/* Button */}
              <div className="flex justify-around mt-4">
                <button className="bg-pink-500 hover:bg-green-600 duration-300 px-4 y-4 ">
                  Submit
                </button>

                <p className="font-bold">
                  have Account ?{" "}
                  <a
                    className="btn cursor-pointer text-md bg-slate-500 hover:bg-green-700 underline"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </a>
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
