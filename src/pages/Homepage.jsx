import Button from "../components/Button";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import UrlShortener from "../components/UrlShortener";
import ShortenedUrlList from "../components/ShortenedUrlList";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

import styles from "./Homepage.module.scss";
import Attribution from "../components/Attribution";

function Homepage() {
  const [urlBundles, setUrlBundles] = useLocalStorageState([], "urls");

  function handleUrlBundles(newUrlBundle) {
    setUrlBundles((urlBundles) => [...urlBundles, newUrlBundle]);
  }

  function handleDeleteUrlBundle(url) {
    setUrlBundles((urlBundles) =>
      urlBundles.filter((bundle) => bundle.inputUrl !== url)
    );
  }

  return (
    <div className="page">
      <div className={styles.hero}>
        <div className={styles.container}>
          <Navigation />
          <header className={styles.header}>
            <div className={styles.content}>
              <h1>
                More than just <span>shorter links</span>
              </h1>
              <p>
                Build your brand’s recognition and get detailed{" "}
                <span>insights on how your links are performing.</span>
              </p>
              <Button type="primary">Get Started</Button>
            </div>
            <div className={styles.image}>
              <img
                src="/illustration-working.svg"
                alt="url shortening App logo"
                className={styles.logo}
              />
            </div>
          </header>
        </div>
      </div>
      <section className={`${styles.container} ${styles.urlInput}`}>
        <UrlShortener onUrlBundles={handleUrlBundles} />
      </section>
      <div className={styles.urlResults}>
        <ShortenedUrlList
          urlBundles={urlBundles}
          onDeleteUrlBundle={handleDeleteUrlBundle}
        />
      </div>
      <section className={styles.statistics}>
        <div className={styles.staticsHeader}>
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with
            <span>our advanced statistics dashboard.</span>
          </p>
        </div>
        <div className={styles.boxes}>
          <div className={`${styles.box} ${styles.box1}`}>
            <div className={styles.icon}>
              <img src="/icon-brand-recognition.svg" alt="icon recognition" />
            </div>
            <h3> Brand Recognition</h3>
            <p>
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
          <div className={styles.line}>&nbsp;</div>
          <div className={`${styles.box} ${styles.box2}`}>
            <div className={styles.icon}>
              <img
                src="/icon-detailed-records.svg"
                alt="icon detailed records"
              />
            </div>
            <h3> Detailed Records</h3>
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div className={styles.line}>&nbsp;</div>
          <div className={`${styles.box} ${styles.box3}`}>
            <div className={styles.icon}>
              <img
                src="/icon-fully-customizable.svg"
                alt="icon fully customizable"
              />
            </div>
            <h3> Fully customizable</h3>
            <p>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.boost}>
        <h2>Boost your links today </h2>
        <Button type="primary">Get Started</Button>
      </section>
      <div className={styles.footer}>
        <Footer />
        <Attribution />
      </div>
    </div>
  );
}

export default Homepage;
