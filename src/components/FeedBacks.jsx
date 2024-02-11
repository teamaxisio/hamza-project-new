import React from "react";
const FeedBacks = ({ feedbacks_arary }) => {
  return (
    <>
      {feedbacks_arary.map((feedback) => (
        <div
          key={feedback[0].user_name.toString() + Math.random.toString()}
          className={`block w-full pt-[20px]`}
        >
          <div className="inline-block min-w-[50%] lg:min-w-[30%]">
            <span
              className={`rounded-full inline-block w-[30px] h-[30px] mr-[20px]`}
            >
              <img
                src={feedback[0].dpUrl}
                alt={feedback[0].user_name}
                className="rounded-full inline w-full h-full"
              />
            </span>
            <h3 className="inline-block text-md font-bold capitalize">
              {feedback[0].user_name}
            </h3>
          </div>
          <div className="inline-block px-[20px]">
            <div className="flex">
              <svg
                className={`w-4 h-4 ${feedback[0].rating > 0 ? `text-yellow-500` : "text-[#dadada]"} ms-1`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className={`w-4 h-4 ${feedback[0].rating > 1 ? `text-yellow-500` : "text-[#dadada]"} ms-1`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className={`w-4 h-4 ${feedback[0].rating > 2 ? `text-yellow-500` : "text-[#dadada]"} ms-1`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className={`w-4 h-4 ${feedback[0].rating > 3 ? `text-yellow-500` : "text-[#dadada]"} ms-1`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className={`w-4 h-4 ${feedback[0].rating > 4 ? `text-yellow-500` : "text-[#dadada]"} ms-1`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
          </div>
          <div className="block mt-[5px]">
            <h3 className="text-gray-700">{feedback[0].message}</h3>
          </div>
          <div
            id="tray"
            className="flex mt-[10px] justify-between max-w-[80%] md:max-w-[40%] lg:max-w-[25%] min-w-[30%]"
          >
            <span className="max-w-[60px] flex justify-center items-center">
              {feedback[0].likes > 0 && (
                <span className="inline-block px-[5px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="red"
                    className="w-[20px] h-[20px]"
                  >
                    {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                    <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                  </svg>
                </span>
              )}
              {feedback[0].likes == 0 && (
                <span className="inline-block px-[5px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-[20px] h-[20px]"
                  >
                    {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                    <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
                  </svg>
                </span>
              )}
              {feedback[0].likes}
            </span>
            <span className="text-gray-500">Reply</span>
            <span className="text-gray-">{feedback[0].uploaded_on}</span>
          </div>
          {/* Reply Section */}

          {feedback[1] != undefined && (
            <div className="ml-[20px] rounded-full bg-gray-200 px-[30px] py-[10px] mt-[20px]">
              <div className="inline-block min-w-[50%] lg:min-w-[30%]">
                <span
                  className={`rounded-full inline-block w-[30px] h-[30px] mr-[20px]`}
                >
                  <img
                    src={feedback[1].dpUrl}
                    alt={feedback[1].user_name}
                    className="rounded-full inline w-full h-full"
                  />
                </span>
                <h3 className="inline-block text-md font-bold capitalize">
                  {feedback[1].user_name}
                </h3>
              </div>
              <div className="block mt-[5px]">
                <h3 className="text-gray-700">{feedback[1].message}</h3>
              </div>
            </div>
          )}

          {/* create an admin response */}

          {feedback[1] == undefined && (
            <div className="ml-[20px] mt-[20px] flex items-center">
              <span
                className={`rounded-full inline-block w-[30px] h-[30px] mr-[20px]`}
              >
                <img
                  src={`https://randomuser.me/api/portraits/men/31.jpg`}
                  alt={"Admin DP"}
                  className="rounded-full inline w-full h-full"
                />
              </span>
              <div className="block mt-[5px] relative md:w-[80%] w-[70%]">
                <input
                  type="text"
                  className="ml-[20px] w-full rounded-md border border-1 border-gray-500 bg-gray-200 px-[30px] py-[10px]"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="#0071bb"
                  className="w-[20px] h-[20px] absolute right-[10px] top-[10px]"
                >
                  {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                  <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
                </svg>
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
};
export default FeedBacks;
