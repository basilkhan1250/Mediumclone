import React from "react";

const DynamicComponent = (props) => {

    return (
        <div className="dynamic-data">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </div>
    )

}

export default DynamicComponent;