// import React from "react";
// import ReactDOM from "react-dom/client";

// //React.createElement => Object => HTMLElement(render)

// const heading = React.createElement("h1",{id:"heading"},"Namaste React");

// //JSX - is not HTML in JS , HTML like or XML like syntax
// //JSX is transpiled by Parcel with Babel before it reaches the JS
// // JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)
// const jsxHeading = <h1 className="head">Namaste React using JSX</h1>;

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);

// -------------------------------------------------------------------------------------------------------------------

// import React from "react";
// import ReactDOM from "react-dom/client";

// const Title = () => (
//   <h1 className="head" tabIndex="5">
//     Namaste React using JSX
//   </h1>
// );

// //React Functional Component
// const HeadingComponent = () => (
//   <div id="container">
//     <Title />
//     <h1 className="heading">Namaste React Functional Component</h1>
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent />);

// -------------------------------------------------------------------------------------------------------------------

import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span>React Element</span>;

const Title = () => (
  <h1 className="head" tabIndex="5">
    {elem}
    Namaste React using JSX
  </h1>
);

const Title2 = (
    <h1 className="head" tabIndex="5">
      {elem}
      Namaste React using JSX
    </h1>
  );

const HeadingComponent = () => (
  <div id="container">
    {Title()}
    <Title />
    <Title></Title>
    {Title2}
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
