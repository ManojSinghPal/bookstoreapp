/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const Cards = ({ item }) => {
  console.log(item);
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between mt-4">
              <div className="cursor-pointer px-3 py-1 rounded-md bg-slate-400 hover:bg-green-400 duration-300">
                Rs.{item.price}
              </div>
              <div className=" cursor-pointer px-3 py-1 rounded-md bg-slate-400 hover:bg-pink-400 duration-300">
                {item.category}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
