import React from "react";

export class Content extends React.Component {
    render() {
        return (

            <div>
                {/* hello world & date */}
                <h1>Hello Worl :3</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

//