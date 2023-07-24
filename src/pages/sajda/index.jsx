import { useQuery } from "react-query";
import { NomozVaqti } from "../../companents/axios";
import { Select } from "antd";
import "./style.scss";

export default function Sajda() {
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log('search:', value);
  };

  const SajdaVaqti = () => {
    return NomozVaqti.get("/day?region=Toshkent").then((res) => res.data);
  };

  const SajdaApi = useQuery({ queryKey: [Sajda], queryFn: SajdaVaqti });
  console.log(SajdaApi.data, "ddddddddddddd");

  return (
    <>
      <div className="box">
        <h1 className="heding">
          <i>Nomoz Vaqtlari</i>
          <div>
        <Select
            showSearch
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: "Toshkent",
                label: "Toshkent",
              },
              {
                value: "Oltiariq",
                label: "Oltiariq",
              },
              {
                value: "Bishkek",
                label: "Bishkek",
              },
              {
                value: "O'smat",
                label: "O'smat",
              },
              {
                value: "To'rtko'l",
                label: "To'rtko'l",
              },
              {
                value: "Uzunquduq",
                label: "Uzunquduq",
              },
              {
                value: "Jizzax",
                label: "Jizzax",
              },
              {
                value: "Oltinko'l",
                label: "Oltinko'l",
              },
              {
                value: "Chimkent",
                label: "Chimkent",
              },
              {
                value: "Rishton",
                label: "Rishton",
              },
              {
                value: "Xo'jaobod",
                label: "Xo'jaobod",
              },
              {
                value: "Do'stlik",
                label: "Do'stlik",
              },
              {
                value: "Buxoro",
                label: "Buxoro",
              },
              {
                value: "Termiz",
                label: "Termiz",
              },
              
              {
                value: "G'uzor",
                label: "G'uzor",
              },
              {
                value: "Bekobod",
                label: "Bekobod",
              },
              {
                value: "Navoiy",
                label: "Navoiy",
              },
              {
                value: "Andijon",
                label: "Andijon",
              },
              {
                value: "Namangan",
                label: "Namangan",
              },
              {
                value: "Jomboy",
                label: "Jomboy",
              },
              {
                value: "Samarqand",
                label: "Samarqand",
              },
              {
                value: "Xo'jaobod",
                label: "Xo'jaobod",
              },
              {
                value: "Do'stlik",
                label: "Do'stlik",
              },
              {
                value: "Buxoro",
                label: "Buxoro",
              },
            ]}
          />
        </div>
        </h1>
        <div className="cardla">
          <ul className="ulla">
            <li>BOMDOT {SajdaApi.data?.times?.quyosh}</li>
            <li>PESHIN {SajdaApi.data?.times?.peshin}</li>
            <li>ASR {SajdaApi.data?.times?.asr}</li>
          </ul>
          <ul className="ulla">
            <li>Shom Iftor {SajdaApi.data?.times?.shom_iftor}</li>
            <li>Hufton {SajdaApi.data?.times?.hufton}</li>
            <li>SAHARLIK {SajdaApi.data?.times?.tong_saharlik}</li>
          </ul>
        </div>
      </div>
    </>
  );
}
