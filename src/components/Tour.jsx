const Tour = ({ id, image, info, name, price }) => {
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
    </article>
  );
};

export default Tour;
