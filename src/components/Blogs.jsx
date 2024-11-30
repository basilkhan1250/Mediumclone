import { useParams } from "react-router"
import React from "react";
import { dataContext } from "react"
import { useArticles } from "./DataComponent";


const Blogs = () => {
    const articlesData = useArticles(dataContext)

    const { number } = useParams();

    const Data = articlesData[number];

    const { names, title, content, image, comments, likes, date } = Data;
    console.log(number)
    
    return (
        <div>
            <h1>Blogs component</h1>
            <h1>{title}</h1>
            <p>By: {names}</p>
            <p>{content}</p>
            <p>Date: {date}</p>
            <p>Likes: {likes}</p>
            <p>Comments: {comments}</p>
            <img src={image} alt="Blog" />
        </div>
    );
};

export default Blogs;