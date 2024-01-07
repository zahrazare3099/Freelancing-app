import React from "react";
import { HiArrowRight } from "react-icons/hi";
import useMoveBack from "../hooks/useMoveBack";
export default function NotFound() {
  return (
    <div className="container xl:max-w-screen-xl p-5 flex flex-col">
      <div className="bg-red-100 p-5 rounded-xl">
        <div className="bg-red-200 p-5 rounded-xl">
          <button
            className="btn btn--secondary px-0 flex items-center justify-center gap-1 text-xs w-20"
            onClick={useMoveBack()}
          >
            <HiArrowRight /> بازگشت
          </button>
          <h2 className="font-bold py-5 text-center text-secondary-600">
            صفحه ای که به دنبالش بودید یافت نشد
          </h2>
        </div>
      </div>
    </div>
  );
}
