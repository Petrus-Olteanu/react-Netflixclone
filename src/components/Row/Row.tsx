import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import styles from "./row.module.css";
import { getImg } from "../../commons/API";
import { IMovie } from "../../commons/IResult";

interface IRow {
  title: string;
  movieList: Array<IMovie> | [];
}

const Row: React.FC<IRow> = ({ title, movieList }) => {

  const handleClickLeft = (e: any) => {
    const parentDiv = e.target.parentNode;
    parentDiv.scrollLeft -= 150;
  }

  const handleClickRight = (e: any) => {
    const parentDiv = e.target.parentNode;
    parentDiv.scrollLeft += 150;
  }

  return (
    <div className={styles["row"]}>
      <h3>{title}</h3>
      <div className={`${styles.cards} ${styles.invisiblescrollbar}`}>
        <button onClick={handleClickRight} className={`${styles.freccia} ${styles.right}`}>
          <img src={getImg("Vector-right.png")} alt="destra" />
        </button>
        <button onClick={handleClickLeft} className={`${styles.freccia} ${styles.left}`}>
          <img src={getImg("Vector-left.png")} alt="sinistra" />
        </button>
        <div className={styles["poster-container"]}>
          {movieList.map((movie: IMovie, index: number) => {
            return (
              <React.Fragment key={`movie${index}`}>
                <Card movie={movie} />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Row;
