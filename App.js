const heading = React.createElement(
  "h1",
  { id: "title", className: "heading" },
  "Namaste React"
);

const subheading = React.createElement(
  "h2",
  { id: "subtitle", className: "heading" },
  "From Zero to Hero"
);

const container = React.createElement("div", { id: "container" }, [
  heading,
  subheading,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
