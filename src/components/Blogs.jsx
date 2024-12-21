import { useParams } from "react-router"
import React from "react";
import { dataContext } from "react"
import { useArticles } from "./DataComponent";


const Blogs = () => {
    const articlesData = useArticles(dataContext)

    const { number } = useParams();

    const Data = articlesData[number];

    const { author, title, content, urlToImage, description } = Data;
    console.log(Data)
    console.log(content)

    return (
        <div className="blogs-data">
            <h1 className="blogs-title">{title}</h1>
            <h2 className="blogs-author">{author}</h2>
            <img className="blogs-image" src={urlToImage} alt="Blog" />
            <p className="blogs-description">{description}</p>
            <p className="blogs-content">{content}</p>
        </div>
    );
};

export default Blogs;