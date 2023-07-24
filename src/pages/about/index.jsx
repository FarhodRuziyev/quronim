import { useQuery } from "react-query";
import { instance } from "../../companents/axios";
import { Card } from "antd";
import "./style.scss";
import { Link } from "react-router-dom";
const { Meta } = Card;

export default function About() {
  const gettab = () => {
    return instance.get("/surah").then((res) => res.data.data);
  };

  const getapi = useQuery({ queryKey: ["products"], queryFn: gettab });
  console.log(getapi, "aaaaaaaaaaaaaaaaaaaaaaaa");

  return (
    <>
      <div className="ebout">
        <div className="right">
          <h1 className="sura">Surala</h1>
          {getapi.data?.map((item) => (
            <Link to={`/single/${item?.number}`}>
              <div className="card">
                <Card
                  hoverable
                  style={{
                    width: 300,
                    display: "flex",
                    height: 130,
                    alignItems: "end",
                  }}
                  cover={
                    <img
                      alt="example"
                      src="/assets/img/image9.png"
                      style={{ width: 130 }}
                    />
                  }
                >
                  <span className="spen palygon">
                    <i>
                      <b>{item?.number}</b>
                    </i>
                  </span>
                  <Meta title={item?.englishName} description={item?.name} />
                  <p className="pargrf">{item?.numberOfAyahs} oyat</p>
                </Card>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
