import React from 'react';

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card bg-white dark:bg-slate-800 dark:text-white dark:border w-92 shadow-xl cursor-pointer hover:scale-105 duration-200">
          <figure>
            <img src={item.image} alt={item.name} className="rounded-t-md" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge bg-blue-700 text-white dark:text-white">
                {item.category}
              </div>
            </h2>
            <p className="dark:text-gray-300">{item.title}</p>
            <div className="card-actions justify-between">
              <div className="px-3 py-1 rounded-full border-[2px] dark:border-gray-600 font-semibold">
                ${item.price}
              </div>
              <div className="cursor-pointer px-3 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white dark:hover:bg-pink-600 font-semibold duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
