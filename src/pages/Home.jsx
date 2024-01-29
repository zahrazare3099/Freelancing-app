import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import DarkModeToggle from "../UI/DarkModeToggle";
import { HiOutlineLogin } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="bg-primary-100 h-screen flex flex-col justify-between">
      <div className="flex items-center gap-x-2 p-4 flex-row-reverse">
        <HiOutlineLogin
          className="h-4 w-4 text-primary-600 cursor-pointer hover:text-primary-800"
          onClick={() => navigate("/auth")}
        />
        <DarkModeToggle />
      </div>
      <div className="pt-5 pb-20 flex flex-col items-center justify-center">
        <h1 className="font-bold p-5">خانه</h1>
        <div>در حال راه اندازی سایت</div>
      </div>
      <footer className="bg-slate-800 text-gray-300 p-8">
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="text-lg font-bold mb-2">درباره ما</h3>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
                nec, ultricies sed, dolor.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">ارتباط با ما</h3>
              <ul className="text-sm flex flex-col items-center gap-y-1">
                <li>68/5 پاسداران, شیراز, ایران</li>
                <li>شماره تلفن: 09175131130</li>
                <li>ایمیل پشتیبانی: zahrazare3099@gmail.com</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">ما را دنبال کنید</h3>
              <ul className="text-sm flex flex-col items-center gap-y-1">
                <li className="flex items-center justify-center gap-x-2">
                  <FaFacebook className="w-5 h-5" />
                  <a href="#">Facebook</a>
                </li>
                <li className="flex items-center justify-center gap-x-2">
                  <AiFillTwitterCircle className="w-6 h-6" />
                  <a href="#">Twitter</a>
                </li>
                <li className="flex items-center justify-center gap-x-2">
                  <FaInstagram className="w-5 h-5" />
                  <a href="#">Instagram</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-6">
            <p className="text-sm">
              © تمام حقوق مادی و معنوی این سایت متعلق است به tickjob
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
