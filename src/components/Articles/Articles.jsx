import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import css from "./Articles.module.css";
import ArticleList from "../ArticleList/ArticleList";
import { fetchArticles } from "../../article-api";
import SearchForm from "../SearchForm/SearchForm";
import ErrorMessage from "../ErrorMessage";

export default function Articles() {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (searchQuery === "") {
      return;
    }

    async function getData() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchArticles(searchQuery, page);
        setArticles((prevArticles) => {
          return [...prevArticles, ...data];
        });
        toast.success("HTTP success!!!! 🐷 ✅ 🎉");
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [page, searchQuery]);

  const handleSearch = (newQuery) => {
    setSearchQuery(newQuery);
    setPage(1);
    setArticles([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div className={css.container}>
      <SearchForm onSearch={handleSearch} />
      {error && <ErrorMessage />}
      {articles.length > 0 && <ArticleList items={articles} />}
      {articles.length > 0 && !isLoading && (
        <button onClick={handleLoadMore}>Load more</button>
      )}
      {isLoading && (
        <p>
          <b>Loading articles...</b>
        </p>
      )}
      <Toaster position="bottom-center" />
    </div>
  );
}
