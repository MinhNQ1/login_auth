import "./item.css"

export default function ItemCards(props) {
console.log("cac",props);
  return (
    <>
      <div class="card" id={props.id}>
        <div class="image">
        <img src={props.imageURL} alt={props.title} />
        </div>
        <span class="title">{props.title}</span>
        <span class="price">${props.price}</span>
      </div>
    </>
  );
}
