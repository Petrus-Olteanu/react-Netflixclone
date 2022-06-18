import React from "react";
import CardNumber from "../CardNumber/CardNumber";
import styles from "./rownumber.module.css";
import { useState, useEffect } from "react";
import { getImg } from "../../commons/API";
import { IMovie } from "../../commons/IResult";

interface IRow {
  title: string;
  movieList: Array<IMovie> | [];
}

const RowNumber: React.FC<IRow> = ({ title, movieList }) => {
  const handleClickLeft = (e: any) => {
    const parentDiv = e.target.parentNode;
    parentDiv.scrollLeft -= 150;
  };

  const handleClickRight = (e: any) => {
    const parentDiv = e.target.parentNode;
    console.log(parentDiv);
    parentDiv.scrollLeft += 150;
  };

  return (
    <div className={styles["row-number"]}>
      <h3 className={styles["top10"]}>{title}</h3>
      <div className={`${styles.cards} ${styles.invisiblescrollbar}`}>
        <button
          onClick={handleClickRight}
          className={`${styles.freccia} ${styles.right} ${styles.number}`}
        >
          <img src={getImg("Vector-right.png")} alt="Destra" />
        </button>
        <button
          onClick={handleClickLeft}
          className={`${styles.freccia} ${styles.left} ${styles.number}`}
        >
          <img src={getImg("Vector-left.png")} alt="Sinistra" />
        </button>
        <div className={styles["container-row"]}>
          {movieList
            .filter((movie, index) => {
              return index < 10;
            })
            .map((movie, index) => {
              return (
                <React.Fragment key={`movie${index}`}>
                  <CardNumber movie={movie} numberFilm={index} />
                </React.Fragment>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default RowNumber;
