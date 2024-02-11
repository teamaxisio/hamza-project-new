import { useState } from "react";
import logo from "./logo.svg";
import FeedBacks from "./components/FeedBacks";
import Reviews from "./components/Reviews";

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
  return (
    <div className="bg-white-100 m-[10px] p-[20px] shadow-md block w-[100%] h-[100%] oveflow-auto">
      <Reviews>
        <FeedBacks feedbacks_arary={feedbacks_arary} />
      </Reviews>
    </div>
  );
};

export default App;
