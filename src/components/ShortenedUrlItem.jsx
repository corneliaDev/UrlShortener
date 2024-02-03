import { useState } from "react";
import PropTypes from "prop-types";

import Button from "./Button";
import styles from "./ShortenedUrlItem.module.css";

ShortenedUrlItem.propTypes = {
  inputUrl: PropTypes.string,
  shortenedUrl: PropTypes.string.isRequired,
  onDeleteUrlBundle: PropTypes.func,
};

function ShortenedUrlItem({ inputUrl, shortenedUrl, onDeleteUrlBundle }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyItem = async (url) => {
    try {
      await navigator.clipboard.writeText(url);
      const text = await navigator.clipboard.readText();
      if (text === url) {
        setIsCopied(true);
      } else {
        throw new Error("URL was not copied");
      }
    } catch (error) {
      console.error("Error while copying the URL:", error.message);
    }
  };

  return (
    <li className={styles.urlListItem}>
      <div className={styles.inputUrl}>{inputUrl}</div>
      <div className={styles.shortenUrlArea}>
        <div className={styles.shortenedUrl}>{shortenedUrl}</div>
        <Button
          type={isCopied ? "copied" : "copy"}
          onClick={
            !isCopied
              ? () => handleCopyItem(shortenedUrl)
              : () => setIsCopied(false)
          }
        >
          {isCopied ? "Copied!" : "Copy"}
        </Button>
        <Button type="delete" onClick={() => onDeleteUrlBundle(inputUrl)}>
          X
        </Button>{" "}
      </div>
    </li>
  );
}

export default ShortenedUrlItem;
