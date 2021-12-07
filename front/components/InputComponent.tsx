import React, { ForwardedRef, InputHTMLAttributes } from "react";
import styles from "./InputComponent.module.css";

const InputComponent = React.forwardRef(
  (
    {
      type,
      ...props
    }: Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
      type: "text" | "tel" | "email" | "number";
    },
    ref?: ForwardedRef<HTMLInputElement>
  ) => {
    return <input ref={ref} className={styles.input} type={type} {...props} />;
  }
);

InputComponent.displayName = "InputComponent";

export default InputComponent;
