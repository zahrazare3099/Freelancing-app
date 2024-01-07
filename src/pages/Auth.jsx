import AuthContainer from "../Features/Authentication/AuthContainer";

export default function Auth() {
  return (
    <div className="w-full flex items-center justify-center pt-5 ">
      {/*container xl:max-w-screen-xl */}
      <AuthContainer />
    </div>
  );
}
