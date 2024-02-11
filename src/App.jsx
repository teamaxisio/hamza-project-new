import { useState } from "react";
import logo from "./logo.svg";
import FeedBacks from "./components/FeedBacks";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <h1 className="text-3xl font-bold underline">
      <FeedBacks feedbacks_arary={[1, 2, 3]} />
    </h1>
  );
};

export default App;
