import { useEffect,useState } from "react";
import ItemCards from "./ItemCards.jsx"

export default function AuthComponent() {
  const [list, setList] = useState([])
  useEffect(() => {
    fetch("https://dummyjson.com/carts")
      .then((res) => res.json())
      .then((res) =>  {
        const product = [];
        const productAPI = res.carts[0].products;
        console.log("dm",productAPI[0].id)
        for(let i=0; i < productAPI.length; i++){
          product.push(productAPI[i])
        }
        setList(product)});
  },[]);
  return (
    <>
    <h1>List:</h1>
    {list.map((product) =>(
      <ItemCards
      id={product.id}
      imageURL={product.thumbnail}
      title={product.title}
      price={product.price}
      />
      // console.log("loz",product)
    ))}
    </>
  );
}
