import React from "react";
import DynamicComponent from "./DynamicComponent";

const DataComponent = () => {

    const componentsData = [
        {
            title: "Noobdy wants to use these HTML tags 😭",
            content: "Trust me, you can do MUCH better than <div> <a> and <p>.",
        },
        {
            title: "16 little UI design tips that make a big impact",
            content: "A step by step UI design case study to quickly fix an example user interface using login-driven UI design tips",
        },
        {
            title: "Was Rust Worth It?",
            content: "From javaScript to Rust,three years in.",
        },
        // { title: "Component 1 ", content: "content of component 1" },
        // { title: "Component 2 ", content: "content of component 2" },
    ]
    return (
        <div>
            {componentsData.map((value, i) => (
                <DynamicComponent key={i} {...value} />
            ))}
        </div>
    )

}

export default DataComponent;