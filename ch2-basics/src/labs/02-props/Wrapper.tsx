import * as React from "react";

type WrapperProps = {
  children: React.ReactNode;
};

export const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div
      style={{
        border: "2px solid #000",
        padding: "20px",
        margin: "10px",
        borderRadius: "5px",
      }}
    >
      {children}
    </div>
  );
};
