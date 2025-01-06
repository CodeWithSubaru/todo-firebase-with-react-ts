import { type ChangeEvent, useState } from "react";

export default function useForm<T>(initialState: T) {
  const [values, setValues] = useState<T>(initialState);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const reset = () => setValues(initialState);

  return { values, setValues, handleChange, reset };
}
