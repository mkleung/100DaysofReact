import React, { useState, useEffect } from "react";

function useGiphy(query) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        let response = await fetch(
          `https://api.giphy.com/v1/gifs/search?api_key=e4o46T47dORwZbyIT6XjtkMc1OcQWuIT&q=${query}&limit=5&offset=0&rating=G&lang=en`
        );
        const json = await response.json();
        console.log({ json });
        setResults(
          json.data.map(item => {
            return item.images.preview.mp4;
          })
        );
      } finally {
        setLoading(setLoading(false));
      }
    }

    if (query !== "") {
      fetchData();
    }
  }, [query]);

  return [results, loading];
}

export default function AsyncHooks() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [results, loading] = useGiphy(query);

  function onSubmit(e) {
    e.preventDefault();

    setQuery(search);
  }

  // component did update

  return (
    <div>
      <h1>Language Learning</h1>
      <p>Remember Words using Giphy</p>
      <form onSubmit={onSubmit}>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search for Gifs"
        />
        <button type="submit">Search</button>
      </form>

      <br />
      {loading ? (
        <h1>Give Me Gifs</h1>
      ) : (
        results.map(item => <video autoPlay loop key={item} src={item} />)
      )}
    </div>
  );
}
