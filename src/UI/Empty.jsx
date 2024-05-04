import React from "react";

export default function Empty({ label }) {
  return (
    <div className="px-1 py-2 flex items-center justify-center rounded-lg bg-secondary-200 text-primary-100">
      {label} ای یافت نشد
    </div>
  );
}
