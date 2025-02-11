interface dropdownProps {
  height?: string;
  width?: string;
  dropdownRadius?: string;
  dropdownText: string;
  color: string;
  options: string[];
  backgroundColor: string;
  className?: string;
}
const Dropdown: React.FC<dropdownProps> = ({
  height,
  width,
  dropdownText,
  dropdownRadius,
  color,
  options,
  backgroundColor,
  className,
}) => {
  return (
    <div>
      <select
        className="select select-bordered w-full max-w-xs"
        style={{
          height,
          width,
          borderRadius: dropdownRadius,
          color,
          backgroundColor,
          className,
        }}
      >
        <option disabled selected>
          {dropdownText}
        </option>

        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
