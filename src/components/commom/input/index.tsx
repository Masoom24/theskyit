import React, { useState } from "react";

// Reusable Input Component
const InputField: React.FC<{
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}> = ({ label, type, placeholder, value, onChange, required = false }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <label style={{ fontWeight: "bold" }}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "5px",
          border: "1px solid #ddd",
          borderRadius: "4px",
        }}
      />
    </div>
  );
};
export default InputField;
