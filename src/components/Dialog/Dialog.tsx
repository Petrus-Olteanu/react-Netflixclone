import React, { useContext, useState } from 'react'
import { dialogContext } from '../../commons/context';
import styles from './dialog.module.css'

let arMovie = [{titolo:"Questione di chimica",duration:"58",synopsis:"Dopo la diagnosi di cancro terminale ai polmoni, un insegnante di chimica del liceo si dà alla produzione di metanfetamine per garantire la sopravvivenza della  famiglia."},
{titolo:"Senza ritorno",duration:"48",synopsis:"Il primo traffico di droga fallito costringe Walt e Jesse a sbarazzarsi di un paio di cadaveri. Nel frattempo, Skyler sospetta che il marito sia sulla cattiva strada."},
{titolo:"Conseguenze radicali",duration:"48",synopsis:"Mentre Walt rimette le cose a posto dopo il primo traffico di droga, Skyler è vicinissima a scoprire la verità sulla sua doppia vita."},
{titolo:"Una malattia scomoda",duration:"48",synopsis:"Costretto a rivelare la verità sulla malattia che lo affligge, Walt si chiede come pagare i costosi trattamenti contro il cancro ai quali si deve sottoporre."},
{titolo:"Materia grigia",duration:"48",synopsis:"Skyler cerca di convincere Walt ad accettare la generosa offerta di un ex migliore amico disposto a pagargli le cure per il cancro."},
{titolo:"Un pugno di mosche",duration:"48",synopsis:"Per finanziare le crescenti spese mediche del suo trattamento, Walt chiede a Jesse di trovare un acquirente per la droga. Per farlo, Jesse si mette nei guai."},
{titolo:"Vendetta",duration:"47",synopsis:"Una volta che Jesse è scampato alla morte, Walt accetta di produrre ancor più droga per lo spietato Tuco. Nel frattempo, Skyler sospetta la sorella di cleptomania."}];

let arSelection = [{value:"stagione1",option:"Stagione 1"},
{value:"stagione2",option:"Stagione 2"},
{value:"stagione3",option:"Stagione 3"},
{value:"stagione4",option:"Stagione 4"},]


const Dialog = () => {

  const {open, setOpen} = useContext(dialogContext);
  function closeDialog(){
    let value = open? false : true;
    setOpen(value);
  }

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.imageb}>
            <img src={require('../../assets/images/breaking-bad.jpeg')} alt="breaking-bad" className={styles.imgb}></img>
            <button className={styles.dialog__banner__button} title="btn" id="white-button">
                  <div>
                      <img src={require('../../assets/images/Play.png')} alt=""/>
                      <span>Riproduci</span>
                  </div>
              </button>
              <button className={styles.check} title="btn">
                  <div>
                      <img src={require('../../assets/images/check_circle.png')} alt=""/>
                  </div>
              </button>
              <button className={styles.recommend} title="btn">
                  <div>
                      <img src={require('../../assets/images/recommend.png')} alt=""/>
                  </div>
              </button>
              <button className={styles.close} title="btn">
                  <div>
                      <img src={require('../../assets/images/close.png')} alt="" id="close-icon" onClick={closeDialog}/>
                  </div>
              </button>
          </div>
          <div className={styles.rowinfo}>
              <p className={styles.pinfo}>99% compatibile</p>
              <p className={styles.pinfo2}>2013</p>
              <p className={styles.pinfo3}>VM14</p>
              <p className={styles.pinfo2}>5 stagioni</p>
              <p className={styles.pinfo4}>HD</p>
              <div className={styles.cast}>
                  <div className={styles.scast}>
                      <strong>Cast:</strong><span>Bryan Cranston,Aaron Paul, Anna Gunn, altro</span> <br/>
                  </div>
                  <div className={styles.scast}>
                      <strong>Generi:</strong><span>Serie TV crime, Thriller TV, Drammi TV</span><br/>
                  </div>
                  <div className={styles.scast}>
                      <strong>Caratteristiche:</strong><span>Violento,Crudo,Cupo</span><br/>
                  </div>
              </div>
          </div>
          <div className={styles.space}>
              <div className={styles.top}>
                  <h3>Episodi</h3>
                  <div className={styles.shows}>
                      <select name='show' id='show' title='dialog' className={styles.show}>
                        {
                          arSelection.map((item,index) =>{
                            return(
                              <option key={`${item.option + index}`} value={item.value}>{item.option}</option>
                            )
                          })
                        }
                      </select>
                  </div> 
              </div>
              <div className={styles.mid} id='mid'>
                {
                  arMovie.map((item,index) =>{
                    return(
                      <div key={'movie'+index} className={styles.episode}>
                      <h3>{index+1}</h3>
                      <img src={require('../../assets/images/breaking-bad.jpeg')} alt='CardImage'/>
                      <div className={styles.description}>
                          <h4>{item.titolo}</h4>
                          <p>{item.duration}min</p>
                          <p>{item.synopsis}
                          </p>
                      </div>
                  </div>
                    )
                  })
                }
              </div>
          </div>
      </div>
    </div>
  )
}

export default Dialog
