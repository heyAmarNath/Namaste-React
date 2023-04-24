const heading1 = React.createElement("h1", {
    id: "heading1",
    className: "title",
    style: {
        color: "tomato",
        border: "2px solid gold"
    }
}, "Namaste React 1");
const heading2 = React.createElement("h2", {
    id: "heading2",
    className: "title",
    style: {
        color: "tomato",
        border: "2px solid tomato"
    }
}, "Namaste React from O");
//   console.log(heading);
const container = React.createElement("div", {
    id: "container"
}, [
    heading1,
    heading2
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

//# sourceMappingURL=index.6bd02f5a.js.map
