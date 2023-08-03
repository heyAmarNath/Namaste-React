import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "title", className: "heading", key: "h1" },
  "Namaste React"
);

const subheading = React.createElement(
  "h2",
  { id: "subtitle", className: "heading", key: "h2" },
  "From Zero to Hero"
);

// JSX => React.createElement => Object => HTML(DOM)
const author = (
  <h3 id="author" key="h3" className="author-name">
    Amar Nath
  </h3>
);

const container = React.createElement(
  "div",
  { id: "container", style: { backgroundColor: "gold" , border:"5px solid tomato"} },
  [heading, subheading, author]
);

//REACT COMPONENT
// -FUNCTIONAL COMPONENT
// -CLASS BASED COMPONENT(OLD)

const HeaderComponent = () => {
  return (
    <div style={{ backgroundColor: "tomato" }}>
      <h1>Component A</h1>
      <h2>Component B</h2>
    </div>
  );
};

// Mostly use this method (skip "return")
const HeaderComponent2 = () => (
  <div style={{ backgroundColor: "dodgerblue" }}>
    {/* calling a react element inside react Component */}
    {container}

    {/* calling a react Component inside another react Component */}
    <HeaderComponent />

    {/* another method to do same as Functional component is a javascript function at the end */}
    {HeaderComponent()}

    <h1>Component A2</h1>
    <h2>Component B2</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// How to render a react element
// root.render(container);

// How to render React Component
root.render(<HeaderComponent2 />);
