const EventModal = ({ date, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Events for {date.toDateString()}</h2>
        {/* Your form or content here */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};