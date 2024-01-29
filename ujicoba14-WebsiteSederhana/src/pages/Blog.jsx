import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    document.title = "Blog";
  }, []);
  useEffect(() => {
    async function getData() {
      const request = await fetch(
        "https://api.spaceflightnewsapi.net/v4/blogs/"
      );
      const response = await request.json();

      setArticles(response.results);
      setLoading(false);
      console.log(response.results);
    }
    getData();
  }, []);
  return (
    <>
      <section className="section">
        <h1 className="section-title">Blog Page</h1>
        <p className="section-description">Berikut adalah beberapa berita</p>
        {loading ? (
          <p className="section-description">Loading Data...</p>
        ) : (
          <div className="articles">
            {articles.map(function (item) {
              return (
                <article key={item.id} className="article">
                  <h2 className="article-title">
                    <Link to={`/blog/${item.id}`}>{item.title}</Link>
                  </h2>
                  <date className="article-time">
                    {new Date(item.published_at).toLocaleDateString()}
                  </date>
                </article>
              );
            })}
          </div>
        )}

        <ul>
          <li>
            <Link to="artikel-1">Artikel 1</Link>
          </li>
          <li>
            <Link to="artikel-2">Artikel 2</Link>
          </li>
          <li>
            <Link to="artikel-3">Artikel 3</Link>
          </li>
        </ul>
      </section>
    </>
  );
}
