import styles from "./index.module.css";
import { getImg } from '../../commons/API';
import { Routes } from 'react-router-dom';
import { Link } from "react-router-dom"
const Index = () => {
  return (
    <>
      <div className={styles["whoIsWatching"]}>
        {/* <!-- NETFLIX LOGO --> */}
        <div className={styles["logo-section"]}>
          <a href="#" title="logo"><img src={getImg("logo.png")} alt="Netflix Logo image" /></a>
        </div>
        {/* <!-- COLORED PROFILE BOXES --> */}
        <div className={styles["main-div"]}>
          <h1>Chi vuole guardare Netflix?</h1>
          <div className={styles["member-div"]}>
            {/* <!-- PROFILE OPTIONS --> */}
            <Link to="/home" title="redirect" className={styles["p1"]}><button className={styles["btn"]}><span>Romolo</span></button></Link>
            <Link to="/home" title="redirect" className={styles["p2"]}><button className={styles["btn"]}><span>Anco Marzio</span></button></Link>
            <Link to="/home" title="redirect" className={styles["p3"]}><button className={styles["btn"]}><span>Servio Tullio</span></button></Link>
            <Link to="/home" title="redirect" className={styles["p4"]}><button className={styles["btn"]}><span>Tullio Ostilio</span></button></Link>
            <a title="redirect" className={styles["p5"]}><button  className={`${styles.btn} ${styles.newProfile}`}><span>Nuovo Profilo</span></button></a>
          </div>
          {/* <!-- MANAGE PROFILE --> */}
          <button className={styles["manageProfile" ]} id={styles["addIcon"]}>Gestisci Profili</button>
        </div>
      </div>
    </>
  )
}
export default Index