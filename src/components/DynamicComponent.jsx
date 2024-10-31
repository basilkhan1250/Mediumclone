import React from "react";

const DynamicComponent = (props) => {

    return (
        <div className="dynamic-data">
            <p className="name">{props.names}</p>
            <h2 className="title">{props.title}</h2>
            <p className="content">{props.content}</p>

            <span className="data-line"></span>
        </div>
    )

}

export default DynamicComponent;