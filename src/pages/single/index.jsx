import { useParams } from "react-router-dom";
import { useContext } from "react"; 
import { useGetData } from "../../companents/hooks";
import { ObyektContext} from "../../companents/state";
import "./style.scss";

export default function Single() {
  const { number } = useParams();
  const { dat, setDat, neme, setNeme } = useContext(ObyektContext);

  const EngData = useGetData(["English", number], `/surah/${number}/en.ahmedali`);
  const AudyoPlay = useGetData(["Audyo"], `/surah/${number}/ar.alafasy`);

  // console.log(AudyoPlay?.data?.data?.ayahs, "aaaaaaaaaaaaaa");
  console.log(EngData?.data?.data, "bbbbbbbbbbbbbbb");
  return (
    <>
      <div className="single">
        {/* <h1>Single page</h1> */}
        {EngData?.data?.data?.ayahs.map((e, index) => (
          <div key={index} className="cart">
            <p className="text">{ e.text.slice(0, 40)} .... .</p>  
            <br />
            <p> {EngData?.data?.data?.name} </p>
            <br />
              <button className="btn" onClick={()=>(setDat(AudyoPlay),setNeme(index))}>
                 <div className="doira"><i class="fa-solid fa-play" ></i> </div><div className="chiziq"></div>
              </button>
          </div>
        ))}
      </div>
    </>
  );
}
