import styles from "./footer.module.css";

const Footer = () => {

  function path(param: string){
    return require(`../../assets/images/${param}`)
  }

  return (
    <>
      {/* -- LAST SECTION LINKS  */}
      <footer className={styles["footer"]}>
        {/* -- SOCIAL MEDIA ICONS  */}
        <div className={styles["last__section__image"]}>
          <img src={path("Social.png")} alt="social logo img" />
        </div>

        <div className={styles["footer-cols"]}>
          <ul>
            <li><a href="#">Autodescrizione</a></li>
            <li><a href="#">Rapporti con gli investitori</a></li>
            <li><a href="#">Note legali</a></li>
            <li><a href="#">Bize ulasin</a></li>
            <li><a href="#" id={styles["gray_box"]}><img src={path("grayBorder.png")} alt="gray icon" /></a></li>
          </ul>
          <ul className={styles["second_link"]}>
            <li><a href="#">Centro assistenza</a></li>
            <li><a href="#">Opportunità di lavoro</a></li>
            <li><a href="#">Preferenze per i cookie</a></li>
          </ul>
          <ul className={styles["second_link"]}>
            <li><a href="#">Carte Regalo</a></li>
            <li><a href="#">Condizioni di utilizzo</a></li>
            <li><a href="#">Informazioni sull'azienda</a></li>
          </ul>
          <ul className={styles["second_link"]}>
            <li><a href="#">Media Center</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Contattaci</a></li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer