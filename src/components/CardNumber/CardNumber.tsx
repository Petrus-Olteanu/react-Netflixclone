import React from "react";
import styles from "./cardnumber.module.css";
import { IMovie } from "../../commons/IResult";

interface ICard {
  numberFilm: number;
  movie: IMovie;
}

const CardNumber: React.FC<ICard> = ({
  movie: { poster_path, title },
  numberFilm,
}) => {
  let imgPrefix = "https://image.tmdb.org/t/p/original";
  return (
    <div className={styles["container-movie"]}>
      <span className={styles["number-movie"]}>{numberFilm + 1}</span>
      <div className={styles["movie"]}>
        <img
          className={styles["img-number"]}
          src={`${imgPrefix + poster_path}`}
          alt={title}
        />
      </div>
    </div>
  );
};
export default CardNumber;
