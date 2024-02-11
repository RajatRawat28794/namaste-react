
    // const heading = React.createElement(
    //     "h1",
    //     {id: "heading", xyz: "abc"},
    //     "Hello React, I am learning you"
    //     );
    //     console.log(heading);//object
    //     //Basically this heading is react element.
    //     //react element is nothing but a JS object.
    //  // {} object is place where you will give attributes to ur tags.
    //  // {id: "heading1"}
    // const root = ReactDOM.createRoot(document.getElementById("root"));
    // root.render(heading);
    //here is render is responsible to take this object and put it up and converted
    //into heading tag and put it up in DOM
// This render method is converting object into h1 tag and putting it there tag , console.


//How do we create nested element in react ?
/**
 * 
 * <div id="parent">
 * <div id="child">
 * <h1>I am h1 tag</h1>
 * </div>
 * </div>
 * 
 */
// const parent = React.createElement(
//     "div",
//     { id: "parent" },
//     React.createElement(
//         "div", 
//         { id: "child" },
//         React.createElement("h1", {}, "I am h1 tag")
//     )
// );

// console.log(parent);
//   const root = ReactDOM.createRoot(document.getElementById("root"));
//    root.render(parent);

 
// Lets say if we have siblings in div id=child

{/* <div id="parent">
 * <div id="child">
 * <h1>I am h1 tag</h1>
 * <h2>I am h2 tag</h2>
 * </div>
 * </div> */}

//  const parent = React.createElement(
//     "div",
//     { id: "parent" },
//     React.createElement(
//         "div", 
//         { id: "child" },
//         //we will put square brackets at line no 60.
//        [React.createElement("h1", {}, "I am h1 tag"),
//        React.createElement("h2", {}, "I am h2 tag")
//        ]
//     )
// );

// console.log(parent);
//   const root = ReactDOM.createRoot(document.getElementById("root"));
//    root.render(parent);

// 2nd Case:
//----------------

//  <div id="parent">
//   <div id="child1">
//   <h1>I am h1 tag</h1>
//   <h2>I am h2 tag</h2>
//   </div>
//   <div id="child2">
//   <h1>I am h1 tag</h1>
//   <h2>I am h2 tag</h2>
//   </div>
//  </div> 

const parent = React.createElement("div",{ id: "parent" },
    React.createElement("div", { id: "child1" },
        //we will put square brackets at line no 60.
       [React.createElement("h1", {}, "I am h1 tag"),
       React.createElement("h2", {}, "I am h2 tag")
       ]),
       React.createElement("div", { id: "child2" },
       //we will put square brackets at line no 60.
      [React.createElement("h1", {}, "I am h1 tag"),
      React.createElement("h2", {}, "I am h2 tag")
      ]),   
);

//JSX

console.log(parent);
  const root = ReactDOM.createRoot(document.getElementById("root"));
   root.render(parent);