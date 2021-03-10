import React, {Component, Fragment} from "react";
import Password from "./Password";

let strengthText = [
    {
        text: "Very Weak ☹",
        bgColor: "#e40808"
    },
    {
        text: "Weak ☹",
        bgColor: "#e40808"
    }, {
        text: "Medium ☹",
        bgColor: "#ffd800"
    }, {
        text: "Strong ☺",
        bgColor: "#2cb117"
    }, {
        text: "Very Strong ☻",
        bgColor: "#2cb117"
    }
];

class App extends Component {
    render() {
        return (
            <Fragment>
                <Password strength={strengthText}/>
            </Fragment>
        );

    }
}

export default App;