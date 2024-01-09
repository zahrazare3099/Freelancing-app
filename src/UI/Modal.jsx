import { HiOutlineX } from "react-icons/hi";
import useOutSideClick from "../hooks/useOutSideClick";

export default function Modal({ open, children, onClose, title }) {
  // hande click out Side of modal
  const { ref } = useOutSideClick(onClose);
  return (
    open && (
      <div
        className="backdrop-blur-md fixed top-0 left-0 w-full h-screen
     bg-secondary-900 bg-opacity-35 z-50"
      >
        <div
          ref={ref}
          className="fixed w-[calc(100vw-8rem)] md:max-w-lg max-h-[calc(100vh-5rem)] overflow-y-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
         rounded-xl bg-secondary-0 p-4 shadow-sm transition-all duration-500 ease-out"
        >
          {/* header */}
          <div className="flex mb-3 pb-3 justify-between border-b border-b-secondary-300">
            <p className="text-secondary-700 font-bold">{title}</p>
            <button onClick={onClose}>
              <HiOutlineX className="w-5 h-5 text-error" />
            </button>
          </div>
          {/* body */}
          {children}
        </div>
      </div>
    )
  );
}
