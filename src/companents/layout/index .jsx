import Audiyo from "../audio";
import Nav from "../nav";
import "./style.scss";



export default function Layout({children}) {
  return(
    <>
      <div className="layout">
        <Nav/>
        {children}
      </div> 
      <div className="audyo ">
        <Audiyo/>
      </div>
     </>
  )
};