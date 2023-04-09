const heading = React.createElement(
  "h1",
  { id: "heading", className: "root" },
  "Hello React"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
