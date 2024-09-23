import React from "react";
import'./Stuff.css';
import { Link } from "react-router-dom";

const Produktet = ()=>{
    return(
<div id="stuff">


<span className="proSub">Produktet  Tona</span>
   <div className="ProContainer">
    <div className="ProCard">
        <div className="ProImgbox">
            <img src='./images/p-1.jpg'></img>
        </div>
        <div className="ProContent">
            <h2><Link to='/category' style={{textDecoration:'none', color:'inherit'}}>Kujdesi Personal</Link></h2>
        </div>
    </div>
    <div className="ProCard">
        <div className="ProImgbox">
            <img src='./images/p-2.jpg'></img>
        </div>
        <div className="ProContent">
            <h2><Link to='/category' style={{textDecoration:'none', color:'inherit'}}>Nëna dhe Fëmija</Link> </h2>
        </div>
    </div><div className="ProCard">
        <div className="ProImgbox">
            <img src='./images/p-3.jpg'></img>
        </div>
        <div className="ProContent">
            <h2><Link to='/category' style={{textDecoration:'none', color:'inherit'}}>Vitamina dhe Suplemente </Link></h2>
        </div>
    </div>
  
    <div className="ProCard">
        <div className="ProImgbox">
            <img src='./images/p-4.jpg'></img>
        </div>
        <div className="ProContent">
            <h2><Link to='/category' style={{textDecoration:'none', color:'inherit'}}>Pajisje Mjekësore</Link>  </h2>
        </div>
    </div>
    <div className="ProCard">
        <div className="ProImgbox">
            <img src='./images/p-3.jpg'></img>
        </div>
        <div className="ProContent">
            <h2><Link to='/category' style={{textDecoration:'none', color:'inherit'}}>Dermokozmetikë</Link></h2>
        </div>
    </div>
    <div className="ProCard">
        <div className="ProImgbox">
            <img src='./images/p-1.jpg'></img>
        </div>
        <div className="ProContent">
            <h2><Link to='/category' style={{textDecoration:'none', color:'inherit'}}>Prematurë</Link></h2>
        </div>
    </div>

   </div>
   </div>
    )
}
export default Produktet;