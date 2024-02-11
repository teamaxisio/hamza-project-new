import { useState } from "react";
import logo from "./logo.svg";
import FeedBacks from "./components/FeedBacks";
import Reviews from "./components/Reviews";
import Dashboard from "./components/Dashboard";
import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  const feedbacks_arary = [
    [
      {
        user_name: "first_user",
        dpUrl: "https://randomuser.me/api/portraits/men/31.jpg",
        rating: 3,
        message: "hello, my name is First User",
        likes: 120,
        uploaded_on: "1 month ago",
      },
      {
        user_name: "Admin",
        dpUrl: "https://randomuser.me/api/portraits/men/31.jpg",
        message: "hello, my name is First User",
        uploaded_on: "1 month ago",
      },
    ],
    [
      {
        user_name: "second_user",
        dpUrl: "https://randomuser.me/api/portraits/men/31.jpg",
        rating: 5,
        message: "hello",
        likes: 0,
        uploaded_on: "2 month ago",
      },
    ],
  ];

  const invoices = [
    {
      sr_no: "216872634787",
      start_date: new Date(),
      end_date: new Date(),
      clients_count: 20,
      amount: "1000 USD",
    },
    {
      sr_no: "5676872634787",
      start_date: new Date(),
      end_date: new Date(),
      clients_count: 20,
      amount: "1000 USD",
    },
    {
      sr_no: "321872634787",
      start_date: new Date(),
      end_date: new Date(),
      clients_count: 20,
      amount: "1000 USD",
    },
    {
      sr_no: "123872634787",
      start_date: new Date(),
      end_date: new Date(),
      clients_count: 20,
      amount: "1000 USD",
    },
  ];

  return (
    <div className="bg-white-100 m-[10px] p-[20px] shadow-md block w-[100%] h-[100%] oveflow-auto">
      <Routes>
        <Route path="/" element={<h1>Hi</h1>}></Route>
      </Routes>
      <Routes>
        <Route
          path="/feedbacks"
          element={
            <>
              <Reviews>
                <FeedBacks feedbacks_arary={feedbacks_arary} />
              </Reviews>
            </>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <>
              <Dashboard invoices={invoices} />
            </>
          }
        ></Route>
      </Routes>

      <Link to={`/feedbacks`}>Go to feedbacks page</Link>
      <Link to={`/dashboard`}>Go to dashboad page</Link>
    </div>
  );
};

export default App;
