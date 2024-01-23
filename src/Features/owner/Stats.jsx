import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";

export default function Stats({ projects }) {
  const numOfProjects = projects.length;
  const numOfAcceptedProjects = projects.map((p) => p.Status === 2).length;
  //projects.proposals
  const numOfEachProposalsProjects = projects.reduce(
    (acc, curr) => curr?.proposals?.length + acc,
    0,
  );
  const statsBox = [
    {
      title: "پروژه ها",
      value: numOfProjects,
      icon: (
        <HiOutlineViewGrid className="w-20 h-20 text-primary-500 rounded-full" />
      ),
      color: "primary",
    },
    {
      title: "پروژه های واگذار شده",
      value: numOfAcceptedProjects,
      icon: (
        <HiCurrencyDollar className="w-20 h-20 text-green-400 rounded-full" />
      ),
      color: "green",
    },
    {
      title: "درخواست ها",
      value: numOfEachProposalsProjects,
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
