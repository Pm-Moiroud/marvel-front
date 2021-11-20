import "./personnage.css";

const Personnage = ({ name, picture, description, extension }) => {
  return (
    <>
      <section className="section-char">
        <div>{name}</div>
        <img src={picture + "." + extension} />
        <p>{description}</p>
      </section>
    </>
  );
};

export default Personnage;
