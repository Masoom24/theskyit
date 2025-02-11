interface ButtonProps {
  height?: string;
  width?: string;
  borderRadius?: string;
  buttonText: React.ReactNode;
  color: string;
  backgroundColor: string;
  onClick?: () => void;
}
const Button: React.FC<ButtonProps> = ({
  height,
  width,
  buttonText,
  borderRadius,
  color,
  backgroundColor,
  onClick,
}) => {
  return (
    <div>
      <button
        className="btn"
        style={{ height, width, borderRadius, color, backgroundColor }}
        onClick={onClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Button;
