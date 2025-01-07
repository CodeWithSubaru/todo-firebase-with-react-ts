import clsx from "clsx";
import {
  ChangeEvent,
  forwardRef,
  InputHTMLAttributes,
  PropsWithChildren,
  Ref,
  SelectHTMLAttributes,
} from "react";

type FormType<T> = {
  label?: string;
  value?: string;
  className?: string;
  containerClassName?: string;
  onChange?: (
    e:
      | T
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
} & InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>;

export const FormInput = forwardRef(
  (
    {
      type = "text",
      label,
      value,
      onChange,
      containerClassName,
      className,
      ...props
    }: FormType<ChangeEvent<HTMLInputElement>>,
    ref: Ref<HTMLInputElement> | null
  ) => {
    return (
      <div className={containerClassName}>
        {label && <FormLabel htmlFor={label}>{label}</FormLabel>}
        <input
          type={type}
          id={label}
          className={clsx(
            "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
            className
          )}
          value={value}
          onChange={onChange}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

export function FormTextArea({
  label,
  value,
  onChange,
  ...props
}: FormType<ChangeEvent<HTMLTextAreaElement>>) {
  return (
    <div>
      {label && <FormLabel htmlFor={label}>{label}</FormLabel>}
      <textarea
        id={label}
        className="block resize-none p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
}

function FormSelect({
  label,
  variant = "sm",
  containerClassName,
  className,
  children,
  ...props
}: FormType<ChangeEvent<HTMLSelectElement>> & {
  className?: string;
  variant?: "sm" | "md" | "lg";
} & SelectHTMLAttributes<HTMLSelectElement>) {
  let selectClassName: string;
  switch (variant) {
    case "sm":
      selectClassName =
        "block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
      break;
    case "md":
      selectClassName =
        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
      break;

    case "lg":
      selectClassName =
        "block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
      break;
  }

  return (
    <div className={containerClassName}>
      {label && <FormLabel htmlFor={label}>{label}</FormLabel>}
      <select
        id="small"
        className={clsx(selectClassName, className)}
        {...props}
      >
        {children}
      </select>
    </div>
  );
}

FormSelect.Option = function ({
  value,
  children,
}: { value?: string } & PropsWithChildren) {
  return <option value={value}>{children}</option>;
};

export { FormSelect };

const FormLabel = ({
  htmlFor,
  children,
}: { htmlFor: string } & PropsWithChildren) => {
  return (
    <label
      htmlFor={htmlFor}
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      {children}
    </label>
  );
};
