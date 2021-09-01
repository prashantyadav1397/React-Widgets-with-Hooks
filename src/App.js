import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "What is React?",
    content: "React is a frontend application JS framework",
  },
  {
    title: "Why use React?",
    content: "React is a great frontend application JS library among engineers",
  },
  {
    title: "How to create a new React app?",
    content: "Use npx create-react-app _app_name_ to create a new app",
  },
];

const App = () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default App;
