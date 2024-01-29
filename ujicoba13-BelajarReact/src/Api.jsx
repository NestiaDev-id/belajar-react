import { useEffect, useState } from "react";

export default function GetApi() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const request = await fetch(
        "https://api.spaceflightnewsapi.net/v4/blogs/"
      );
      const response = await request.json();

      setNews(response.results);
      setLoading(false);
      console.log(response.results);
    }
    getData();
  }, []);

  return (
    <>
      <h1>Data Fetch</h1>
      {loading ? (
        <p>Loading Data...</p>
      ) : (
        <ul>
          {news.map(function (item) {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      )}
    </>
  );
}
