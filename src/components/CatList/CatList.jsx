import React from 'react'
import './catlist.css'
const CatList = ({id, title, active, setSelected}) => {
  return (
    <li className={active ? 'catList active' : 'catList'}
    onClick={()=>setSelected(id)}>
        {title}
    </li>
  )
}

export default CatList