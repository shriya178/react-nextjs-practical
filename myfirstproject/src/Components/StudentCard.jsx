function StudentCard(props) {
  return (
    <div className='student-card'>
      <h2>{props.name}</h2>
      <p>
        <b>City:</b> {props.city}
      </p>
      <p>
        <b>State:</b> {props.state}
      </p>
      <p>
        <b>Country:</b> {props.country}
      </p>
      <p>
        <b>Course:</b> {props.course}
      </p>
    </div>
  );
}

export default StudentCard;
