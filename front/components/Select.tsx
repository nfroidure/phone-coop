import React, { ForwardedRef, SelectHTMLAttributes, LegacyRef } from "react";
import styles from "../components/Select.module.css";

const Select = React.forwardRef(
  (
    {
      title,
      options,
      name,
      id,
      ...props
    }: Omit<
      SelectHTMLAttributes<HTMLSelectElement>,
      "title" | "options" | "name" | "id"
    > & {
      title: string;
      options: Array<{ id: number; label: string }>;
      name: string;
      id: string;
    },
    ref?: LegacyRef<HTMLSelectElement>
  ) => {
    return (
      <select
        ref={ref}
        name={name}
        id={id}
        className={styles.select}
        {...props}
      >
        <option value="" disabled selected hidden>{title}</option>
        {options?.map((option) => (
          <option key={option.id} value={option.id}>{option.label}</option>
        ))}
      </select>
    );
  }
);

Select.displayName = "Select";

export default Select;
