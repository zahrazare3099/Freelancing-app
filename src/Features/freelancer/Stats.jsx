import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import toPersianNumber from "../../utils/toPersianNumber";

export default function Stats({ proposals = [] }) {
  const numOfproposals = proposals.length;
  const acceptedproposals = proposals.filter((p) => p.Status === 2);
  //proposals = price => total price Accepted
  // proposals.map(p=>p.status === 2).reduce()
  const balance = acceptedproposals.reduce((acc, curr) => acc + curr.price, 0);

  const statsBox = [
    {
      title: "درخواست ها",
      value: numOfproposals,
      icon: (
        <HiOutlineViewGrid className="w-20 h-20 text-primary-500 rounded-full" />
      ),
      color: "primary",
    },
    {
      title: "کیف پول",
      value: toPersianNumber(balance),
      icon: (
        <HiCurrencyDollar className="w-20 h-20 text-green-400 rounded-full" />
      ),
      color: "green",
    },
    {
      title: "درخواست های تایید شده",
      value: acceptedproposals.length,
      icon: <HiCollection className="w-20 h-20 text-orange-400 rounded-full" />,
      color: "orange",
    },
  ];
  const colors = {
    primary: "text-primary-900 bg-primary-900",
    green: "text-green-900 bg-green-900",
    orange: "text-amber-500 bg-orange-900",
  };
  return (
    <div className="w-[100vw-30rem] gap-3 flex flex-col sm:flex-row flex-wrap items-center">
      {statsBox.map((state, index) => {
        return (
          <div
            className={`rounded-lg p-2 bg-secondary-300 flex items-center justify-center gap-x-3 flex-initial w-72`}
            key={index + 1}
          >
            <div className={`rounded-full p-2 ${colors[state.color]}`}>
              {state.icon}
            </div>
            <div className="flex flex-col flex-1 gap-2 font-bold">
              <p className="flex">{state.title}</p>
              <p className="flex">{state.value}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
