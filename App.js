import React from 'react';
import ReactDOM from 'react-dom/client';
const heading1 = React.createElement(
  "h1",
  {
    id: "heading1",
    className: "title",
    style: { color: "tomato", border: "2px solid gold" },
  },
  "Namaste React 1"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "heading2",
    className: "title",
    style: { color: "tomato", border: "2px solid green" },
  },
  "Namaste React from Parcel"
);
//   console.log(heading);
const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
