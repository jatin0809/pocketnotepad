import React, { useContext, useState } from 'react'
import styles from "./Header.module.css";
import add from "../assets/add.png";
import { AppContext } from '../context/AppContext';
import PopUp from './PopUp';

function Header() {

  const {setModalVisiblity,data, setSelectedGroupId, selectedGroupId,showGroups, setShowGroups} = useContext(AppContext);
  const [groupStyles, setGroupStyles] = useState({});

  function clickHandler(groupID){
    setSelectedGroupId(groupID);
    setShowGroups(false);
    setGroupStyles({
      backgroundColor: '#f1eceb',
    })
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Pocket Notes</h1>
      <div className={styles.list}>
        {
          data.groups.map((grp)=>(
            <div key={grp.id} className={styles.listItems} onClick={()=>clickHandler(grp.id)} style={selectedGroupId === grp.id ? groupStyles : {}} > 
              <div className={styles.initials} style={{backgroundColor: grp.color}}>{grp.initials}</div>
              <p className={styles.title}>{grp.name}</p> 
            </div>
          ))
        }
      </div>
      <img onClick={()=> setModalVisiblity(true)} className={styles.add} src={add} alt="" />
      <PopUp/>
    </div>
  )
}

export default Header
