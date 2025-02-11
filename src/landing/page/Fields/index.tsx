import React from "react";
import Card from "../../../components/commom/card";
import img1 from "../../../assets/fileds/Apply Job.png";
import img2 from "../../../assets/fileds/Apply Interview.png";
import img3 from "../../../assets/fileds/Experience.png";
import img4 from "../../../assets/fileds/Qualification.png";

const Fields = () => {
  const fields = [
    {
      image: img1,
      buttonText: "Apply Job",
    },
    {
      image: img2,
      buttonText: "Apply Interview",
    },
    {
      image: img3,
      buttonText: "Experience",
    },
    {
      image: img4,
      buttonText: "Qualification",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {fields.map((field, index) => (
        <Card
          key={index}
          image={field.image} // Only the image for display
          cardText={field.buttonText} // Button text instead of title
          CardColor="white"
          height="50px"
          width="150px" // Wider button for better text display
          color="black"
          onButtonClick={() => console.log(`${field.buttonText} clicked`)} // Optional: Action on button click
        />
      ))}
    </div>
  );
};

export default Fields;
