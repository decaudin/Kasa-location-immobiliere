const Lodgement = ({ title, cover }) => {
  
  return (
    <div className="lodgementCard">
      <h2>{title}</h2>
      <img src={cover} alt={title} />
    </div>
  );
};

export default Lodgement;
