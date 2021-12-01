import { ComponentProps } from "react";
import BaseSelect from "./Select";

const story = {
  title: "Layout/Select",
  component: BaseSelect,
  argTypes: {
    text: {
      control: { type: "text" },
      defaultValue: "",
    },
    title: {
      control: { type: "text" },
      defaultValue: "--Veuillez choisir votre marque--",
    },
    options: {
      control: { type: "array" },
      defaultValue: ["Fairphone", "Wiko", "Samsung", "Apple", "Huawei", "Xiaomi", "OnePlus", "Autre"],
    },
    name: {
      control: { type: "text" },
      defaultValue: "select-brand",
    },
    id: {
      control: { type: "text" },
      defaultValue: "select-brand",
    },
  },
};

export default story;

export function Select({
  text,
  ...props
}: { text: string } & ComponentProps<typeof BaseSelect>) {
  return <BaseSelect {...props}>{text}</BaseSelect>;
}
