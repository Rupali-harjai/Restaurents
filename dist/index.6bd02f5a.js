// const heading = React.createElement("h1",{id:'heading', xyz: "abc"}, "Hello World");
const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {
            id: "h1"
        }, "I am h1 tag"),
        React.createElement("h2", {
            id: "h2"
        }, "I am h tag")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {
            id: "h1"
        }, "I am h1 tag"),
        React.createElement("h2", {
            id: "h2"
        }, "I am h tag")
    ])
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
