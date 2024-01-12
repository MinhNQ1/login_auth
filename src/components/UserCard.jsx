export default function Card(props) {
  return (
    <>
      <div id={props.id}>
        <div className="image">
          <img src={props.imageUrl} />
        </div>
        <div>
          <div className="fullname">
            Full name: {props.firstName} {props.lastName}
          </div>
          <div className="gender">
            Gender: {props.gender}
          </div>
          <div className="bday">
            Birth date: {props.bday}
          </div>
        </div>
      </div>
    </>
  );
}
