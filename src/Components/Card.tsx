import "./Card.css";

export default function Card() {
  return (
    <div className="card-container">
      <div className="card-flip">
        <div className="card-front">
          <h2 className="card-content">Reminder</h2>
          <p className="card-content">Click to see details</p>
        </div>
        <div className="card-back">
          <h2>Details</h2>
          <p>This is the back side of the card!</p>
        </div>
      </div>
    </div>
  );
}

