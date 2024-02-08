
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
const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div", 
        { id: "child" },
        React.createElement("h1", {}, "I am h1 tag")
    )
);

console.log(parent);
  const root = ReactDOM.createRoot(document.getElementById("root"));
   root.render(parent);



