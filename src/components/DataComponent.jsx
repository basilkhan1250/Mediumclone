import React, { createContext, useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation to detect the route

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const location = useLocation(); // Hook to access current route location

    useEffect(() => {
        async function getArticles() {
            try {
                const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=862fe9c21aff4c219d9f418f100d8b8d");
                const data = await response.json();
                const article = data.articles;
                const newData = article.splice(3, 1)
                const otherData = article.splice(1, 1)
                // const anotherData = article.splice(2, 1)
                setData(article);
                console.log(article);
            } catch (error) {
                console.error("Error Fetching Articles:", error);
            }
        }
        getArticles();
    }, []);

    // Check if we are on the blog detail page (/blogs/:number) or the main list page (/blogs)
    const isBlogDetailPage = location.pathname.includes("/Blogs/");

    return (
        <DataContext.Provider value={data}>
            {children}
            {/* Only render this part if we're NOT on the blog detail page */}
            {/* {!isBlogDetailPage && ()} */}
        </DataContext.Provider>
    );
};

// Custom hook for accessing the articles
export const useArticles = () => useContext(DataContext);

export default DataProvider;
