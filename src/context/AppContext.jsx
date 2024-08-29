import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [modalVisiblity, setModalVisiblity] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#A0A0FF");
  const [selectedGroupId, setSelectedGroupId] = useState(null);
  const [isDisabled, setIsDisabled] = useState(true);
  const [showGroups, setShowGroups] = useState(true);

  const [data, setData] = useState(
    JSON.parse(localStorage.getItem('notepadData')) || { groups: [] }
  );
  

  useEffect(()=>{
    localStorage.setItem('notepadData', JSON.stringify(data));
  },[data]);

  const getInitials =(groupName)=>{
    const words = groupName.trim().split(' ');
    const initials = words.slice(0,2).map(word => word[0].toUpperCase()).join('');
    return initials;
  }

  const addGroup = (groupName, selectedColor)=>{

    const trimmedGroupName = groupName.trim();
    const groupExists = data.groups.some(group => group.name.toLowerCase() === trimmedGroupName.toLowerCase());

    if(groupExists){
      alert('Group Already Exists')
      return;
    }

    const newGroup = {
      id: `group${Date.now()}`,
      name : trimmedGroupName,
      color: selectedColor,
      initials : getInitials(groupName),
      notes : [],
    };
    
    const updatedData = {
      ...data,
      groups:[...data.groups, newGroup]
    };

    setData(updatedData);
    localStorage.setItem("notepadData", JSON.stringify(updatedData));
  };

  const addNote = (groupId, noteContent)=>{
    const newNote = {
      id: `note${Date.now()}`,
      content: noteContent,
      timestamp: new Date().toLocaleString(),
    };

    const updatedGroup = data.groups.map((group)=>
      group.id === groupId
        ? {...group, notes: [...group.notes, newNote]} 
        : group
    );

    const updatedData = {...data, groups: updatedGroup};
    setData(updatedData);
    localStorage.setItem('notepadData', JSON.stringify(updatedData));

  };
  

  const values = {
    modalVisiblity,
    setModalVisiblity,
    selectedColor,
    setSelectedColor,
    data,
    addGroup,
    addNote,
    setSelectedGroupId,
    selectedGroupId,
    isDisabled,
    setIsDisabled,
    showGroups,
    setShowGroups
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
