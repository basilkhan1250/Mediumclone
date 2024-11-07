import React from "react";
import img1 from "./assets/content1-img.jpg"

const DynamicComponent = (props) => {

    return (
        <div className="dynamic-data">
            <div className="text-content">
                <p className="name">{props.names}</p>
                <h2 className="title">{props.title}</h2>
                <p className="content">{props.content}</p>
                <div className="other-data">
                    <p>{props.date}</p>
                    <p>{props.likes}</p>
                    <p>{props.comments}</p>
                </div>
            </div>
            <div className="img-div">
                <img src={props.image} alt="imgaes" />
            </div>
        </div>
    )

}

export default DynamicComponent;