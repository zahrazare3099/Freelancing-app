import React from "react";
import { HiArrowRight } from "react-icons/hi";
import useMoveBack from "../hooks/useMoveBack";
export default function NotFound() {
  return (
    <div className="container xl:max-w-screen-xl h-screen p-5 pt-12 flex flex-col bg-secondary-0 text-secondary-800">
      <div className="bg-secondary-200 p-5 rounded-xl">
        <div className="bg-secondary-300 p-5 rounded-xl">
          <button
            className="btn btn--secondary px-0 flex items-center justify-center gap-1 text-xs w-20"
            onClick={useMoveBack()}
          >
            <HiArrowRight className="text-red-600 w-4 h-4" /> بازگشت
          </button>
          <h2 className="font-bold py-5 text-center">
            صفحه ای که به دنبالش بودید یافت نشد
          </h2>
        </div>
      </div>
    </div>
  );
}
