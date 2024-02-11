import React from "react";
import { Link } from "react-router-dom";
export default function Dashboard({ invoices }) {
  return (
    <>
      <div className="w-full h-full block">
        <div className="rounded-sm w-full p-[20px] bg-[whitesmoke]">
          <Link to="/stats">
            <a className={`text-gray-500 px-[10px]`}>Stats</a>
          </Link>
          <Link to="/dashboard">
            <a
              className={`text-[#0071bb] font-bold border-b-2 pb-[5px] border-[#0071bb] px-[10px]`}
            >
              All invoices
            </a>
          </Link>
        </div>

        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3"></th>
                <th scope="col" className="px-6 py-3">
                  INVOICE #
                </th>
                <th scope="col" className="px-6 py-3">
                  START DATE
                </th>
                <th scope="col" className="px-6 py-3">
                  END DATE
                </th>
                <th scope="col" className="px-6 py-3">
                  NUMBER OF CLIENTS
                </th>
                <th scope="col" className="px-6 py-3">
                  INVOICE AMOUNT
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice) => (
                <tr
                  key={invoice.sr_no}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <span className="bg-white-100 shadow-md w-[40px] h-[40px] flex justify-center text-center items-center text-2xl font-bold">
                      +
                    </span>
                  </td>
                  <td className="px-6 py-4">{invoice.sr_no}</td>
                  <td className="px-6 py-4">{invoice.start_date.toString()}</td>
                  <td className="px-6 py-4">{invoice.end_date.toString()}</td>
                  <td className="px-6 py-4">{invoice.clients_count}</td>
                  <td className="px-6 py-4">{invoice.amount}</td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <span className="bg-white-100 px-[10px] rounded-sm shadow-md w-auto h-[40px] font-md flex justify-center text-center items-center font-bold">
                      <svg
                        className="w-[10px h-[10px]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                        <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
                      </svg>
                      &ensp; Download
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
