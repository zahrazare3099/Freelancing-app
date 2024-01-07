import React from "react";

export default function Empty({ label }) {
  return (
    <div className="px-1 py-2 flex items-center justify-center rounded-lg bg-secondary-0">
      {label} ای یافت نشد
    </div>
  );
}
