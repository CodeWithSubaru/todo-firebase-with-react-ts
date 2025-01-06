import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type BtnVariant = "primary" | "secondary" | "danger";

export default function Button({
  variant = "primary",
  onClick,
  children,
  ...props
}: {
  variant?: BtnVariant;
  onClick?: () => void;
} & PropsWithChildren &
  ButtonHTMLAttributes<HTMLButtonElement>) {
  let btnClassName: string;

  switch (variant) {
    case "primary":
      btnClassName =
        "inline-flex justify-center align-center gap-2 cursor-pointer w-full tracking-wider text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800";
      break;
    case "secondary":
      btnClassName =
        "inline-flex justify-center align-center gap-2 cursor-pointer w-full tracking-wider text-gray-900 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:ring-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white focus:outline-none dark:focus:ring-gray-500";
      break;
    case "danger":
      btnClassName =
        "inline-flex justify-center align-center gap-2 cursor-pointer w-full tracking-wider text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-500 dark:hover:bg-red-600 focus:outline-none dark:focus:ring-red-800";
      break;
    default:
      btnClassName =
        "inline-flex justify-center align-center gap-2 cursor-pointer w-full tracking-wider text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800";
  }

  return (
    <button className={btnClassName} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
