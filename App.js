const heading = React.createElement(
  "h1",
  {
    id: "title",
    className: "title",
    style: { color: "tomato", border: "2px solid gold" },
  },
  "Namaste React"
);

const heading2 = React.createElement(
  "h1",
  {
    id: "title",
    className: "title",
    style: { color: "tomato", border: "2px solid tomato" },
  },
  "Namaste React 2"
);
//   console.log(heading);
const container = React.createElement("div", {}, [heading, heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
