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
        }: Omit<SelectHTMLAttributes<HTMLSelectElement>, "title" | "options" | "name" | "id"> & {
            title: string;
            options: Array<string>;
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
        <option value={title}>{title}</option>
        {options?.map((option) => <option value={option}> {option} </option>)}
      </select>
    );
  }
);

Select.displayName = "Select";

export default Select;