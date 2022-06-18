import styles from "./header.module.css";

const Header = () => {
  function path(param: string) {
    return require(`../../assets/images/${param}`);
  }

  return (
    <div>
      {/* <!-- BANNER HEADER --> */}
      <div className={styles["banner"]}>
        <video className={styles["background-video"]} autoPlay muted loop>
          <source src={path("video.mp4")} type="video/mp4" />
        </video>
        <div className={styles["banner__contents"]}>
          <h1 className={styles["title"]}>Snowpiercer</h1>
          {/* <!-- RED TOP 10 ICON --> */}
          <img
            src={path("Top10Badge.png")}
            alt="top 10 red badge"
            className={styles["top__red__badge"]}
          />
          <h3 className={styles["subtitle"]}>Tra le migliori serie Italiane</h3>
          <div className={styles["banner__description"]}>
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown.
          </div>
          {/* <!-- BANNER BUTTONS --> */}
          <div className={styles["banner__buttons"]}>
            <button
              className={styles["banner__button"]}
              title="button"
              id={styles["white-btn"]}
            >
              <div>
                <img src={path("Play.png")} alt="img play" />
                <span>Riproduci</span>
              </div>
            </button>
            <button
              className={styles["banner__button"]}
              title="btn"
              id={styles["lightgray-btn"]}
            >
              <div>
                <img src={path("info.png")} alt="img info" />
                <span> Altre info</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
