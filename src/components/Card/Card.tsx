import { useContext, useState } from "react";
import { dialogContext } from "../../commons/context";
import { IMovie } from "../../commons/IResult";
import Dialog from "../Dialog/Dialog";
import styles from "./card.module.css";


interface ICard {
  movie: IMovie;
}

const Card: React.FC<ICard> = ({ movie: { backdrop_path, title } }) => {
  let imgPrefix = "https://image.tmdb.org/t/p/original";

  const {open, setOpen} = useContext(dialogContext)

  function setDialog(){
    let value = open? false : true;
    setOpen(value);
  }

  return (
    <div className={styles["general-container"]}  >
      <div className={styles["card"]}>
        <div className={styles["card__info"]}>
          <div className={styles["container-button"]}>
            <div className={styles["box-button"]}>
              <div>
              <span className="material-symbols-outlined">
              play_circle
              </span>
              </div>
              <div>
              <span className="material-symbols-outlined">
                add_circle
                </span>
              </div>
              <div>
              <span className="material-symbols-outlined">
              recommend
              </span>
              </div>
            </div>
            <div className={styles["box-button-circle"]} >
            <span className="material-symbols-outlined" onClick={setDialog}>
            expand_circle_down
            </span>
              <div className={styles["alert"]}>Episodi e info</div>
            </div>
          </div>
          <div className={styles["section-info"]}>
            <div className={styles["info"]}>
              <p>
                <strong className={styles["text"]}>90% compatibile</strong>
              </p>
            </div>
            <div className={styles["info"]}>
              <span className={styles["vm14"]}>VM14</span>
              <span className={styles["seasons"]}>6 stagioni</span>
              <span className={styles["material-symbols-outlined"]}> hd </span>
            </div>
          </div>
          <div className={styles["show-description"]}>
            <ul>
              <li>Anticonformistico</li>
              <li>Crudo</li>
              <li>Dramma</li>
            </ul>
          </div>
        </div>
      </div>
      <img
        className={styles["card-container"]}
        src={`${imgPrefix + backdrop_path}`}
        alt={title}
      />
    </div>
  );
};

export default Card;
