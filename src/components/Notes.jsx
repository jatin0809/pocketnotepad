import React, { useContext, useEffect, useState } from 'react'
import styles from"./Notes.module.css";
import { IoSend } from "react-icons/io5";
import { AppContext } from '../context/AppContext';
import { FaArrowLeft } from "react-icons/fa6";
import formatDate from '../utils/formatDate';

function Notes() {
  const [note, setNote] = useState('');

  const {selectedGroupId, data, addNote, setIsDisabled, isDisabled, setShowGroups} = useContext(AppContext);

  const foundObject = data.groups.find(item=> item.id === selectedGroupId)

  function submitHandler(){
    console.log(note)
    addNote(selectedGroupId, note);
    setNote('')
  }

  useEffect(()=> {
    if(note.length>0){
      setIsDisabled(false);
    } else{
      setIsDisabled(true);
    }
  },[note]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.icon}><FaArrowLeft size={30} onClick={()=> setShowGroups(true)} /></div>
       <div className={styles.initials} style={{backgroundColor: foundObject.color}}>{foundObject.initials}</div>
       <div className={styles.title}>{foundObject.name}</div>
      </div>
      <div className={styles.display}>
        {
          foundObject.notes.map((data)=>(
            <div key={data.id} className={styles.noteData}>
              <p className={styles.content}>{data.content}</p>
              <p className={styles.time}>{formatDate(data.timestamp)}</p>
            </div>
          ))
        }
      </div>
      <div className={styles.footer}>
        <textarea value={note} placeholder="Enter your text here........" id="" onChange={(e)=> setNote(e.target.value)}></textarea>
        <button disabled={isDisabled} className={styles.arrow} ><IoSend onClick={submitHandler} size={30} /></button>
      </div>
    </div>
  )
}

export default Notes
