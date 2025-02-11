const Card = ({ imgSrc, title, description, buttonText, onButtonClick }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 w-80 text-center">
    <div className="mb-4">
      <span className="inline-block p-2 rounded-full">
        <img
          src={imgSrc}
          alt={title}
          className="h-10 w-10 transition-transform transform"
        />
      </span>
    </div>
    <h3 className="font-bold text-lg mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <button
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      onClick={onButtonClick}
    >
      {buttonText}
    </button>
  </div>
);

export default Card;
