import React from 'react';

const Button = () => {
  return (
    <section className="flex justify-center items-center min-h-[100vh]">
      <div className="border-2 border-primary p-3 rounded-full flex justify-between items-center gap-x-5">
        <button className="w-8 h-8 border-2 text-primary border-primary p-2 text-2xl font-semibold rounded-full flex justify-center items-center hover:bg-primary hover:text-white duration-500">
          -
        </button>
        <h5 className="text-xl text-center font-bold mx-auto !focus:shadow-none whitespace-nowrap">
          AED 2000
        </h5>
        <button className="w-8 h-8 border-2 text-primary border-primary p-2 text-2xl font-semibold rounded-full flex justify-center items-center hover:bg-primary hover:text-white duration-500">
          +
        </button>
      </div>
    </section>
  );
};

export default Button;
