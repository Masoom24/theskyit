import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import Card from "./card";
import tele from "./image/telephone.png";
import whatsapp from "./image/whatsapp-logo.png";

const Contact = () => {
  const navigate = useNavigate(); // Initialize navigation
  // Function to open WhatsApp chat
  const handleChatClick = () => {
    window.location.href = "https://wa.me/1234567890"; // Replace with your WhatsApp number
  };
  // Function to navigate to the Contact Us page
  const handleSupportClick = () => {
    navigate("/contact-us"); // Navigate to Contact Us component
  };
  return (
    <div className="flex flex-col items-center space-y-8 p-10">
      {/* Heading Section */}
      <div className="text-center space-y-4">
        <div className="bg-[#96BE25] text-white p-4 rounded-lg text-2xl font-bold max-w-max mx-auto">
          Business Help Service
        </div>
        <div className="relative">
          <div className="text-xl text-gray-700">
            Jobs You May Be Interested
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex justify-center space-x-8">
        <Card
          imgSrc={whatsapp}
          title="Chat to Us Online"
          description="Chat to us online if you have any questions."
          buttonText="Click Here"
          onButtonClick={handleChatClick}
        />
        <Card
          imgSrc={tele}
          title="Our Support Agent"
          description="Our support agent will work with you to meet your lending needs."
          buttonText="Click Here"
          onButtonClick={handleSupportClick}
        />
      </div>
    </div>
  );
};

export default Contact;
