import ItemCards from "./ItemCards";
import UserCard from "./UserCard";
import { useState, useEffect } from "react";

export default function UserInfo() {
  const accessToken = localStorage.getItem("accessToken");
  const [id, setId] = useState("");
  const [url, setUrl] = useState("");
  const [firstName, setFirst] = useState("");
  const [lastName, setLast] = useState("");
  const [bday, setDay] = useState("");
  const [gender, setGender] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/auth/me", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setId(res.id);
        setUrl(res.image);
        setFirst(res.firstName);
        setLast(res.lastName);
        setDay(res.birthDate);
        setGender(res.gender);

        const shopUrl = "https://dummyjson.com/carts/user/" + res.id;

        fetch(shopUrl)
          .then((res) => res.json())
          .then((res) => {
            const product = [];
            const APIList = res.carts[0].products;
            for (let i = 0; i < APIList.length; i++) {
              product.push(APIList[i]);
            }
            setList(product);
            console.log(product);
          });
      });
  }, []);

  console.log("loz", list);

  return (
    <>
      <h1>Users:</h1>
      <span>
        <UserCard
          id={id}
          imageUrl={url}
          firstName={firstName}
          lastName={lastName}
          bday={bday}
          gender={gender}
        />
      </span>
      <h1>Shop:</h1>
      <span>
        {list.map((product) => (
          <ItemCards
            id={product.id}
            imageUrl={product.thumbnail}
            title={product.title}
            price={product.price}
          />
        ))}
      </span>
    </>
  );
}
