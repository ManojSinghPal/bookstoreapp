import { useForm } from "react-hook-form";
import Navbar from "./Navbar";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Navbar />
      <div>
        <div id="" className="flex h-screen items-center justify-center ">
          <div className="modal-box dark:bg-slate-900 dark:text-white">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              <h3 className="font-bold text-3xl text-center">Contact Us !</h3>
              {/* Full NAme */}
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  className="w-80 rounded-md outline-none px-3 y-1"
                  type="text"
                  placeholder="Enter Full Name"
                  {...register("name", { required: true })}
                />
                <br />
                {errors.name && (
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
                <span>Text</span>
                <br />
                <textarea
                  className="w-80 rounded-md outline-none px-3 y-1"
                  type="text"
                  placeholder="Enter Your Password"
                  {...register("textarea", { required: true })}
                />
              </div>

              {/* Button */}
              <div className="flex justify-around mt-4">
                <button className="bg-pink-500 hover:bg-green-600 duration-300 px-4 y-4 ">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
