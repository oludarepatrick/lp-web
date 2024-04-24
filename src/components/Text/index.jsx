import React from "react";

const sizes = {
  xs: "text-base font-normal",
  lg: "text-3xl font-normal md:text-[28px] sm:text-[26px]",
  s: "text-xl font-normal",
  md: "text-2xl font-normal md:text-[22px]",
};

const Text = ({ children, className = "", as, size = "xs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700_01 font-lufga ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
