import React, { useContext, useState } from 'react'
import Modal from 'react-modal'
import { AppContext } from '../context/AppContext';
import styles from "./PopUp.module.css";
import defaultColors from '../data/colors';

export default function PopUp() {
    const{modalVisiblity, setModalVisiblity, selectedColor, setSelectedColor, addGroup, data} = useContext(AppContext)
    const colors = defaultColors;
    const [groupName, setGroupName] = useState();

    const backStyle = {
      overlay:{backgroundColor:'rgba(0, 0, 0, 0.75)',}
    }
    
    function submitHandler(e){
      e.preventDefault();
      if(!groupName){
        alert(' Provide Group Name')
        return;
      }
        setModalVisiblity(false);
        addGroup(groupName, selectedColor);
        setGroupName(null)
        console.log(selectedColor)
    }

   
    Modal.setAppElement('#root')
  return (
    <div >
      <Modal isOpen={modalVisiblity} onRequestClose={()=>setModalVisiblity(false)} className={styles.container} style={backStyle} >
        
        <form className={styles.form} onSubmit={submitHandler}>
            <p className={styles.heading}>Create New group</p>
            <div className={styles.group}>
            <label htmlFor="grpName" >Group Name</label>
            <input type="text" id="grpName" placeholder='     Enter group name'  onChange={(e)=> setGroupName(e.target.value)}/>
            </div>

            <br />

            <div className={styles.colors}>
                <label> Choose Color:</label>
                <div className={styles.circles}>
                    {colors.map((color, index)=>(
                        <div key={index} className={styles.circle} style={{backgroundColor: color, border: selectedColor === color ? '2px solid black': 'none',}} onClick={()=> setSelectedColor(color)}>

                        </div>
                    ))}
                </div>
                
            </div>

            <button className={styles.button} >Create</button>
        </form>
      </Modal>
    </div>
  )
}

