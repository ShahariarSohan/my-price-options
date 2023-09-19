import axios from "axios";
import { useEffect, useState } from "react";
import { ComposedChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const Phones = () => {
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    axios
      .get(`https://openapi.programming-hero.com/api/phones?search=iphone`)
      .then((data) => {
        const phoneData = data.data.data;
        const phoneWithFakeData = phoneData.map((phone) => {
          const phoneObj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return phoneObj;
        });
        setPhones(phoneWithFakeData);
      });
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-semibold">Phones :{phones.length}</h1>
      <ComposedChart width={1400} height={250} data={phones}>
        <Bar dataKey="price" barSize={20} fill="#413ea0" />
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
      </ComposedChart>
    </div>
  );
};

export default Phones;
