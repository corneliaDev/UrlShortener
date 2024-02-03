import ShortenedUrlItem from "./ShortenedUrlItem";
import styles from "./shortenedUrlList.module.css";

function shortenedUrlList({ urlBundles, onDeleteUrlBundle }) {
  return (
    <ul className={styles.urlList}>
      {urlBundles.map((el, index) => (
        <ShortenedUrlItem
          inputUrl={el.inputUrl}
          shortenedUrl={el.shortenedUrl}
          onDeleteUrlBundle={onDeleteUrlBundle}
          key={index}
        />
      ))}
    </ul>
  );
}

export default shortenedUrlList;
