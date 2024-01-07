import React from "react";
import { ThreeDots } from "react-loader-spinner";

export default function Pending({ height = "40", width = "75" }) {
  return (
    <ThreeDots
      height={height}
      width={width}
      radius={9}
      color="rgb(var(--color-primary-900))"
      wrapperClass="flex justify-content-center"
      visible={true}
    />
  );
}
