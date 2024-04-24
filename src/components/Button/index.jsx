import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-[10px]",
};
const variants = {
  fill: {
    amber_700: "bg-amber-700 text-white-A700_01",
    green_700_02: "bg-green-700_02 text-white-A700_01",
    blue_700: "bg-blue-700 text-white-A700_01",
    yellow_800: "bg-yellow-800 text-white-A700_01",
    amber_600: "bg-amber-600 text-white-A700_01",
    gray_900_05: "bg-gray-900_05 text-white-A700_01",
  },
};
const sizes = {
  "4xl": "h-[94px] px-[35px] text-2xl",
  md: "h-[56px] px-[21px] text-base",
  "2xl": "h-[72px] px-[11px] text-base",
  sm: "h-[52px] px-[35px] text-base",
  lg: "h-[60px] px-[35px] text-[17px]",
  xl: "h-[62px] px-[9px] text-[25px]",
  xs: "h-[51px] px-[11px]",
  "6xl": "h-[142px] px-[34px] text-2xl",
  "3xl": "h-[74px] px-[35px] text-2xl",
  "5xl": "h-[114px] px-[21px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "5xl",
  color = "amber_600",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["4xl", "md", "2xl", "sm", "lg", "xl", "xs", "6xl", "3xl", "5xl"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["amber_700", "green_700_02", "blue_700", "yellow_800", "amber_600", "gray_900_05"]),
};

export { Button };
