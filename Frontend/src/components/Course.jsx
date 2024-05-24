import { Link } from "react-router-dom";
// import list from "../../public/list.json";
import Cards from "./Cards";
import { useEffect, useState } from "react";
import axios from "axios";

const Course = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="justify-center items-center text-center">
          <h1 className="mt-28  text-2xl md:text-4xl font-semibold">
            We are delight to have{" "}
            <span className="text-pink-500">here :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
          <Link to="/">
            <button className="bg-slate-500 hover:bg-pink-500 px-3 py-2 mt-6 duration-300 rounded-md">
              Back
            </button>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
