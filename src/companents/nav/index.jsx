import "./style.scss";
import { Link} from "react-router-dom";

export default function Nav() {
  return(
    <>
      <div className="aside">
        <ul className="ulla">
          <Link to="/" ><li><i class="fa-solid fa-mosque  ikon"></i></li></Link>
          <Link to="/about"><li><i class="fa-solid fa-book-open  ikon"></i></li></Link>
          <Link to="/sajda" ><li><i class="fa-solid fa-clock  ikon"></i></li></Link>
        </ul>
      </div> 
     </>
  )
};