import React from 'react'
import styles from "./MainPage.module.css";
import Background from "../assets/Background.png";
import Vector from "../assets/Vector.png"

function MainPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img className={styles.bg} src={Background} alt="" />
        <p className={styles.heading}>Pocket Notes</p>
        <br />
        <p className={styles.data}>Send and receive messages without keeping your phone online.
            <br /> Use Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>
        <p className={styles.footer}><img src={Vector} alt="" /> <span> end-to-end encycpted</span></p>
      </div>
    </div>
  )
}

export default MainPage
