import React, { useEffect, useState } from 'react'
import './products.css';
import NavbarNew from '../../Main Home/Navbar/NavbarNew';
import Footer from '../../Main Home/Footer/Footer';
import CatList from '../../components/CatList/CatList';

import {  KujdesiPersonal, NenadheFemija, VitaminadheSuplemente, PajisjeMjekesore, Dermokozmetike, Premature} from '../../data';
const Products = () => {

  const [selected, setSelected]=useState('baby');
  const [data, setData]=useState([])
  const list = [
    {
      id:'KujdesiPersonal',
      title: 'Kujdesi Personal'
    },
    {
      id:'NenadheFemija',
      title: 'Nena dhe Femija'
    },
    {
      id:'VitaminadheSuplemente',
      title: 'Vitamina dhe Suplemente'
    },
    {
      id:'PajisjeMjekesore',
      title: 'Pajisje Mjekesore'
    },
    {
      id:'Dermokozmetike',
      title: 'Dermokozmetike'
    },
    {
      id:'Premature',
      title: 'Premature'
    },
    
  ]

  useEffect(()=>{
    switch(selected){
      case 'KujdesiPersonal':
          setData(KujdesiPersonal);
          break;
      case 'NenadheFemija':
          setData(NenadheFemija);
          break;
      case 'VitaminadheSuplemente':
          setData(VitaminadheSuplemente);
          break;
      case 'PajisjeMjekesore':
          setData(PajisjeMjekesore);
          break;
      case 'Dermokozmetike':
          setData(Dermokozmetike);
          break;
      case 'Premature':
          setData(Premature);
          break;
      default:
          setData(KujdesiPersonal)
    }
  },[selected])

  return (
    <>
    <NavbarNew/>
    <h1 className="categorytitle">Produktet Tona </h1>
    <div className="mainPage">
      <div className="sidebar">
        <ul>
          {list.map((item)=>{
            return <CatList
            id={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            />
          })}
        </ul>
      </div>
      <div className="productContainer">
          {data.map((d)=>{
            return (
              <div className="productItem">
                <img src={d.img} alt="" />
                <h2 className='productTitle'>{d.title}</h2>
                <p>{d.desc}</p>
              </div>
            )
          })}
      </div>
    </div>
    
    <Footer/>
    </>
  )
}

export default Products