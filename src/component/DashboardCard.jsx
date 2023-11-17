import React from "react";
import stats from "../lib/const/stats";

function DashboardCard() {
  return (
    <div className="flex w-full gap-4 px-8 flex-wrap">
      {stats.map((stat) => (
        <BoxWrapper key={stat.key}>
          <div className="flex flex-col gap-2">
            <i className="rounded-full shadow-slate-300 ring-neutral-400 pt-2">
              {stat.icon}
            </i>

            <h3 className="font-semibold text-[20px]">{stat.value}</h3>
            <p className="text-[14px] text-gray-500 mt-1">{stat.label}</p>
          </div>
        </BoxWrapper>
      ))}
    </div>
  );
}

export default DashboardCard;

function BoxWrapper({ children }) {
  return (
    <div className="flex item-center justify-start gap-4 bg-white rounded-sm p-4 flex-1 border border-gray-200 items-center shadow-sm ">
      {children}
    </div>
  );
}
