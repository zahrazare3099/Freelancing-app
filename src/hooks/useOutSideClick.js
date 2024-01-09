import { useEffect, useRef } from "react";

export default function useOutSideClick(fn, listenCapturing = true) {
  const ref = useRef();
  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        fn();
      }
    }
    document.addEventListener("click", handleClick, listenCapturing);
    () => document.removeEventListener("click", handleClick, listenCapturing);
  }, [fn, listenCapturing]);
  return { ref };
}
