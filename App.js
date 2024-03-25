// const heading = React.createElement(
//     "h1",
//     {id:"heading"},
//     "You are using React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent= React.createElement("div",{id:"parent"}, [
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"Inside Child-1"),
        React.createElement("h4",{},"Inside Child-1")]
    ),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"Inside Child-2 h1"), 
        React.createElement("h4",{},"Inside Child-2 h1")])
    ]);
    
console.log(parent);
const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

