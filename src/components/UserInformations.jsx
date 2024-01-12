import UserCard from"./UserCard"
import { useState } from "react";

export default function UserInfo() {
  const accessToken = localStorage.getItem("accessToken");
  const [id,setId] = useState("")
const [url, setUrl] = useState("");
const [firstName, setFirst] = useState("")
const [lastName, setLast] = useState("")
const [bday, setDay] = useState("")
const [gender, setGender] = useState("")

  fetch("https://dummyjson.com/auth/me", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  })
    .then((res) => res.json())
    .then((res) => {
        setId(res.id)
        setUrl(res.image)
        setFirst(res.firstName)
        setLast(res.lastName)
        setDay(res.birthDate)
        setGender(res.gender)
    });
  return (
    <>
      <h1>List of Users:</h1>
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
    </>
  );
}
