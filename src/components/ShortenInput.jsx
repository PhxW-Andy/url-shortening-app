import { useState, useEffect } from "react";

import ShortenItem from "./ShortenItem";

const ShortenInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [links, setLinks] = useState([]);

  const [error, setError] = useState(false);

  const getLocalStorage = () => {
    const storage = JSON.parse(localStorage.getItem("Links"));
    if (storage) {
      setLinks(storage);
    }
  };

  const setLocalStorage = () => {
    localStorage.setItem("Links", JSON.stringify(links));
  };

  useEffect(() => {
    getLocalStorage();
  }, []);

  useEffect(() => {
    setLocalStorage();
  }, [links]);

  const handleClick = async () => {
    await fetch(`https://api.shrtco.de/v2/shorten?url=${inputValue}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.ok) {
          setError(true);
          setInputValue("");

          setTimeout(() => {
            setError(false);
          }, 2000);
          return;
        }

        const { full_short_link, original_link } = data.result;

        setLinks([
          ...links,
          {
            id: Math.round(Math.random() * 1000) / 1000,
            original_link: original_link,
            short_link: full_short_link,
          },
        ]);
        setInputValue("");
        setError(false);
      });
  };

  return (
    <div className="container">
      <div className="shorten-wrapper">
        <div className="shorten-input">
          <input
            type="text"
            placeholder="Shorten a link here..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className={error ? "error" : ""}
          />
          <button onClick={handleClick}>Shorten It!</button>
          {error && (
            <span className="error-link">Please add a correct link...</span>
          )}
        </div>
        <div className="shorten-links">
          {links.map((link, index) => (
            <ShortenItem
              key={index}
              link={link}
              links={links}
              setLinks={setLinks}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShortenInput;
