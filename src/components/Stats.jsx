import React from "react";
import { Link } from "react-router-dom";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import dummyRevenueData from "../dummy_revenue_data.json";
import dummyInsights from "../dummy_new_contributors.json";
export default function Stats() {
  return (
    <>
      <div className="w-full h-full block">
        <div className="rounded-sm w-full p-[20px] bg-[whitesmoke]">
          <Link to="/stats">
            <span
              className={`text-[#0071bb] font-bold border-b-2 pb-[5px] border-[#0071bb] px-[10px]`}
            >
              Stats
            </span>
          </Link>
          <Link to="/dashboard">
            <span className={`text-gray-500 px-[10px]`}>All invoices</span>
          </Link>
        </div>
        <div className="w-full flex flex-row justify-between px-[20px] mt-[30px]">
          <div className="w-[50%] mr-[50px]">
            <div className="flex justify-between">
              <h2 className="text-xl font-bold text-[#662d90]">
                Visitor Insights
              </h2>
              <select
                name="insights_duration"
                id="insights_duration"
                className="border-1 border-[#662d90] rounded-md outline-none bg-gray-100 px-[10px]"
              >
                <option value="monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
            {/* Chart */}
            <Line
              data={{
                labels: dummyInsights.map((map) => map.label),
                datasets: [
                  {
                    label: "Visitor Insights",
                    data: dummyInsights.map((data) => data.new_contributors),
                    backgroundColor: "#662d90",
                    borderColor: "#662d90",
                  },
                ],
              }}
            />
          </div>
          <div className="w-[50%] mr-[50px]">
            <div className="flex justify-between">
              <h2 className="text-xl font-bold text-[#662d90]">Revenue</h2>
              <select
                name="revenue_insights_duration"
                id="revenue_insights_duration"
                className="border-1 border-[#662d90] rounded-md outline-none bg-gray-100 px-[10px]"
              >
                <option value="monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
            {/* Chart */}
            <Line
              data={{
                labels: dummyRevenueData.map((map) => map.label),
                datasets: [
                  {
                    label: "Revenue",
                    data: dummyRevenueData.map((data) => data.revenue),
                    backgroundColor: "#662d90",
                    borderColor: "#662d90",
                  },
                ],
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
