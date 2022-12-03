import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

export default function News(props) {

    const { mode, category } = props;

    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [articles, setArticles] = useState([]);
    const [results, setResults] = useState(0);

    const apiKey = '6dec5c7561174439b72213d9d09f1cac';
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=12`;


    const fetchData = async () => {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setArticles(json.articles);
        setResults(json.totalResults);
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
        //eslint-disable-next-line
    }, []);

    const fetchMoreData = () => {
        setTimeout(async () => {
            setPage(page + 1);
            const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}&page=${page + 1}&pageSize=12`;
            const response = await fetch(url);
            const json = await response.json();
            setArticles(articles.concat(json.articles));
        }, 1500);
    }

    return (
        <>
            {loading && <Spinner mode={mode}/>}
            {!loading && <div>
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length < results}
                    loader={<Spinner mode={mode} />}
                >

                    <div className="mt-24 md:ml-11 md:mr-11 flex flex-wrap justify-center">
                        {articles.map((el, i) => {
                            return <NewsItem mode={mode} key={i} title={el.title} des={el.description} image={el.urlToImage} url={el.url} />
                        })}
                    </div>

                </InfiniteScroll>
            </div>}
        </>
    )
}
