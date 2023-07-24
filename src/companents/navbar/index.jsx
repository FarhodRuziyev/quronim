import { Link } from "react-router-dom";
import "./style.scss";

export default function Navbar() {

  return(
    <>
      <div className="navbar">
        <Link><div className="logo"><img src="/assets/img/image3.png" alt="#" /></div></Link>
      </div> 
    </>
  )
};