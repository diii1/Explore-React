import React, { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import LoadingNew from "../Components/LoadingNew";
import New from "../Components/New";
import classes from "./News.module.css";
import axios from "axios";

function News() {
    const [news, setNews] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        async function getData() {
            try {
                const data = await axios.get(
                    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=33a419acfc83410489cdeb2160fd191f"
                );
                setNews(data.data.articles);
                setIsLoading(false);
            } catch (err) {
                setError("Something went wrong...");
                setIsLoading(false);
            }
        }
        getData();
    }, []);

    return (
        <div className={classes.bgImg}>
            <Header />
            <h3 className={classes.title}>News Today</h3>
            <div className={classes.container}>
                {error && <p className={classes.error}>{error}</p>}
                {isLoading &&
                    [1, 1, 1, 1].map((el, idx) => {
                        return <LoadingNew key={idx} />;
                    })}
                {!error && !isLoading && (
                    <ul>
                        {news.map((e, idx) => {
                            return (
                                <New
                                    key={idx}
                                    title={e.title}
                                    author={e.author}
                                    image={e.urlToImage}
                                />
                            );
                        })}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default News;
