import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect, createContext, useContext } from "react";


const DataContext = createContext()

const DataProvider = ({ children }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        async function getArtciles() {
            try {
                const response = await fetch("https://newsapi.org/v2/everything?q=apple&from=2024-11-18&to=2024-11-18&sortBy=popularity&apiKey=862fe9c21aff4c219d9f418f100d8b8d")
                const data = await response.json()
                const article = data.articles
                const newData = article.splice(0, 3)
                setData(article)
                console.log(article)
            }
            catch (error) {
                console.error("Error Fetching Articles:", error)
            }
        }
        getArtciles()
    }, [])

    return (
        <DataContext.Provider value={data}>
            {children}
            <div>
                {data.map((value, i) => (
                    <div className="dynamic-data">
                        <div className="text-content">
                            <Link to={{
                                pathname: `/Blogs/${i}`,
                            }}>
                                <p className="name">{value.author}</p>
                                <h2 className="title">{value.title}</h2>
                                <p className="content">{value.content}</p>
                                <div className="other-data">
                                    <p>{value.date}</p>
                                    <p>{value.likes}</p>
                                    <p>{value.comments}</p>
                                </div>
                            </Link>
                        </div>
                        <div className="img-div">
                            <img src={value.urlToImage} alt="images" />
                        </div>
                    </div>
                ))}
            </div>
        </DataContext.Provider>
    )
}

// this is custom hook for convenience
export const useArticles = () =>
    useContext(DataContext);


export default DataProvider;