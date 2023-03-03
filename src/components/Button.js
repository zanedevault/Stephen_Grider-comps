import classnames from "classnames";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  const btnClasses = classnames(
    "mb-5 px-3 py-1.5 border flex items-center",
    {
      "border-blue-600 bg-blue-500 text-white": primary,
      "border-gray-900 bg-gray-800 text-white": secondary,
      "border-green-600 bg-green-500 text-white": success,
      "border-yellow-500 bg-yellow-400 text-white": warning,
      "border-red-600 bg-red-500 text-white": danger,
      "rounded-full": rounded,
      "bg-white text-black": outline,
      "text-blue-600": outline && primary,
      "text-gray-900": outline && secondary,
      "text-green-600": outline && success,
      "text-yellow-500": outline && warning,
      "text-red-600": outline && danger,
    }
  );
  return <button className={btnClasses} {...rest}>{children}</button>;
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);
    if (count > 1) {
      return new Error(
        "Pass only one of: primary, secondary, success, warning or danger"
      );
    }
  },
};

export default Button;
