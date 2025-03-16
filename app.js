const heading = React.createElement(
    "h1",
    {id:"heading"},
    "hello worl from the react inside"
  );
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(heading);