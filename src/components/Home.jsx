import React from "react";
import "./custom.css"
import DataComponent from "./DataComponent"
import { useArticles } from "./DataComponent";
import { useParams } from "react-router";
import { dataContext } from "react"
import { Link } from "react-router-dom";


const Home = () => {

    const articlesData = useArticles(dataContext)

    console.log(articlesData)

    return (
        <div>
            {articlesData.map((value, i) => (
                <div key={i} className="dynamic-data">
                    <div className="text-content">
                        <Link className="links" to={`/Blogs/${i}`}>
                            <p className="name">{value.author}</p>
                            <h2 className="title">{value.title}</h2>
                            <p className="content">{value.content.split(" ").slice(0, 14).join(" ") + "..."}</p>
                            <div className="other-data">
                            </div>
                        </Link>
                    </div>
                    <div className="img-div">
                        <img src={value.urlToImage} alt="images" />
                    </div>
                </div>
            ))}
        </div>
    );
}


export default Home;