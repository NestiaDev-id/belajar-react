import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BlogDetail() {
  const params = useParams();
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  useEffect(() => {
    document.title = "Blog-Detail";
  }, []);
  useEffect(() => {
    async function getData() {
      const request = await fetch(
        `https://api.spaceflightnewsapi.net/v4/articles/${params.id}`
      );

      if (!request.ok) {
        return setNotFound(true);
      }

      const response = await request.json();

      setArticle(response);
      setLoading(false);
      console.log(response);
    }
    getData();
  }, [params]);

  if (notFound) {
    return <h1>Artikel tidak ditemukan</h1>;
  }
  return (
    <section className="section">
      {loading ? (
        <p>Loading Data...</p>
      ) : (
        <>
          <h1 className="article-title">{article.title}</h1>
          <date className="article-time">
            {new Date(article.published_at).toLocaleString()}
          </date>
          <p className="article-sumary">{article.summary}</p>
          <img
            className="article-image"
            src={article.image_url}
            alt={article.title}
          />
          <p className="article-source">
            Source:
            <a href={article.url} target="_blank" rel="noreferrer">
              {article.news_site}
            </a>
          </p>
        </>
      )}
    </section>
  );
}
