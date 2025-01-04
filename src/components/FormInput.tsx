import { ChangeEvent, InputHTMLAttributes, PropsWithChildren } from "react";

type FormType = {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
} & InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>;

export function FormInput({
  type = "text",
  label,
  value,
  onChange,
  ...props
}: FormType) {
  return (
    <div>
      <FormLabel htmlFor={label}>{label}</FormLabel>
      <input
        type={type}
        id={label}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
}

export function FormTextArea({ label, value, onChange, ...props }: FormType) {
  return (
    <div>
      <FormLabel htmlFor={label}>{label}</FormLabel>
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
