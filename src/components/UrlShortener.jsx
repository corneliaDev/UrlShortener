import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import Button from "./Button";

import styles from "./UrlShortener.module.css";
import toast from "react-hot-toast";

UrlShortener.propTypes = {
  onUrlBundles: PropTypes.func,
};

function UrlShortener({ onUrlBundles }) {
  const [inputUrl, setInputUrl] = useState("");
  const [placeholder, setPlaceholder] = useState("Shorten a link here...");
  const [error, setError] = useState(false);

  async function shortenAxios() {
    try {
      const response = await axios.post(
        "https://cleanuri.com/api/v1/shorten",
        new URLSearchParams({
          url: inputUrl,
        })
      );

      if (!response.ok) throw new Error("This does not work. We are sorry! ");

      const data = await response.data;
      const shortUrl = data.result_url;

      const urlBundle = {
        inputUrl,
        shortenedUrl: shortUrl,
      };
      onUrlBundles(urlBundle);

      return shortUrl;
    } catch (err) {
      toast.error(
        `This does not work. Blocked by CORS policy: No 'Access-Control-Allow-Origin' ${err.message}. Installation of a CORS extension is not recommended.`
      );
      console.log(err.message);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputUrl || inputUrl.length === 0) {
      setPlaceholder("Please add a Link");
      setError(true);
      return;
    }

    if (inputUrl.includes(" ")) {
      setPlaceholder("Please remove the spaces");
      setError(true);
      return;
    }

    if (!inputUrl.includes("http://") && !inputUrl.includes("https://")) {
      setPlaceholder(
        "Please add a valid URL beginning with http:// or https://"
      );
      setError(true);
      return;
    }

    shortenAxios(inputUrl);

    setInputUrl("");
    setError(false);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formInput}>
        <input
          className={
            !error ? styles.input : `${styles.input} ${styles.noInput}`
          }
          placeholder="Shorten a link here..."
          onChange={(e) => setInputUrl(e.target.value)}
          value={inputUrl}
          id="url"
        />
        <div className={styles.textNoInput}>{error ? placeholder : ""}</div>
      </div>
      <Button type="api">Shorten it!</Button>
    </form>
  );
}

export default UrlShortener;
