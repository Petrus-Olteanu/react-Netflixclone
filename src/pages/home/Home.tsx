import React, { useEffect, useState } from 'react'
import { dialogContext } from '../../commons/context'
import { IMovie } from '../../commons/IResult'
import Dialog from '../../components/Dialog/Dialog'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Row from '../../components/Row/Row'
import RowNumber from '../../components/RowNumber/RowNumber'
import RowPoster from '../../components/RowPoster/RowPoster'
import styles from '../../components/Dialog/dialog.module.css'


const Home = () => {

    const [data, setData] = useState<Array<IMovie> | []>([]);

    const [open, setOpen] = useState<boolean>(false);
    let dialog = open? <Dialog/> : null;

    useEffect(() => {
        fetch(
            "https://api.themoviedb.org/3/movie/popular?api_key=3bb82372ef97dc8c0c45d353261e2f31&quot"
        )
            .then((res) => res.json())
            .then((data) => {
            setData([...data.results]);
            });
        }, []);

    return (
    <div>

        <dialogContext.Provider value={{open, setOpen}}>
        <Navbar />
        <Header />
        <Row title="Film Popolari" movieList={data} />
        <Row title="Campari, continua a guardare..." movieList={data} />
        <Row title="Popolari in Italia" movieList={data} />
        <RowPoster title="Originali Netflix" movieList={data} />
        <RowNumber title="Top 10 in Italia" movieList={data} />
        <Row title="Ultime uscite" movieList={data} />
        <Row title="Popolari Netflix" movieList={data} />
        <Footer />
        {dialog}
        </dialogContext.Provider>

    </div>
    )
}

export default Home