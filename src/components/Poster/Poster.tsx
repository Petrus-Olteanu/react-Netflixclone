import React from "react";
import styles from "./poster.module.css";
import { IMovie } from "../../commons/IResult";

interface ICard {
  movie: IMovie;
}

const Poster: React.FC<ICard> = ({ movie: { poster_path, title } }) => {
  let imgPrefix = "https://image.tmdb.org/t/p/original";
  return (
    // POSTER
    <div className={styles["card-container"]}>
      <div className={styles["card-poster"]}>
        <img
          className={styles["poster-img"]}
          src={`${imgPrefix + poster_path}`}
          alt={title}
        />
      </div>
    </div>
  );
};
export default Poster;
