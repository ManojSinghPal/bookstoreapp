import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          // alert("Login successfull");
          toast.success("Login successfull");
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("User", JSON.stringify(res.data.user));
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          // alert("error :" + err.response.data.message);
          toast.error("error :" + err.response.data.message);
          setTimeout(() => {}, 1000);
        }
      });
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box dark:bg-slate-900 dark:text-white">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}

            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login !</h3>
            {/* Email Input Field */}
            <div className="mt-4 space-y-2 ">
              <span>Email</span>
              <br />
              <input
                className="w-80 rounded-md outline-none px-3 y-1 hover:scale-105"
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
                className="w-80 rounded-md outline-none px-3 y-1 hover:scale-105"
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
              <button className="bg-pink-500 hover:bg-green-600 duration-300 px-3 gap-y-2 rounded-md">
                Login
              </button>
              <p className="font-bold">
                Not Registerd ?{" "}
                <Link
                  to="/signup"
                  className="cursor-pointer bg-slate-500 hover:bg-green-700 underline px-3 y-2 rounded-md"
                >
                  SignUp
                </Link>
              </p>
            </div>
            {/* <input type="submit" /> */}
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
