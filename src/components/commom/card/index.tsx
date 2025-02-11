import React from "react";

interface CardProps {
  image: string;
  title?: string;
  description?: string;
  cardText?: string;
  CardColor?: string;
  height: string;
  width: string;
  onButtonClick?: () => void;
  color: string;
  linkText?: string;
  linkUrl?: string;
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  cardText,
  CardColor,
  width,
  height,
  color,
  onButtonClick,
  linkText,
  linkUrl,
}) => {
  return (
    <div className="card bg-white-500 w-70 shadow-1 text-black">
      <figure className="px-10 pt-10">
        <img src={image} alt={title} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <button
            className="btn"
            style={{ backgroundColor: CardColor, color, height, width }}
            onClick={onButtonClick}
          >
            {cardText}
          </button>
        </div>
        {linkText && linkUrl && (
          <div className="mt-2">
            <a
              href={linkUrl}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {linkText}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
