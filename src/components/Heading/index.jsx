import React from "react";

const sizes = {
  "3xl": "text-5xl font-semibold md:text-[44px] sm:text-[38px]",
  "2xl": "text-[32px] font-extrabold md:text-3xl sm:text-[28px]",
  xl: "text-2xl font-semibold md:text-[22px]",
  "4xl": "text-[56px] font-semibold md:text-5xl sm:text-[42px]",
  s: "text-base font-extrabold",
  md: "text-lg font-bold",
  xs: "text-[15px] font-bold",
  lg: "text-xl font-semibold",
};

const Heading = ({ children, className = "", size = "2xl", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700_01 font-agrandir ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
