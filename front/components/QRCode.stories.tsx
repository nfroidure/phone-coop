import { ComponentProps } from "react";
import BaseQRCode from "./QRCode";

const story = {
  title: "Layout/QRCode",
  component: BaseQRCode,
  argTypes: {
    values: {
      control: { type: "object" },
      defaultValue: {
        token:"123456789",
      },
    },
    style: {
      control: { type: "CSSProperties" },
      defaultValue: {
        textAlign: "center",
      },
    },
  },
};

export default story;

export function QRCode({
    values,
    style,
  ...props
}: ComponentProps<typeof BaseQRCode>) {
  return <BaseQRCode values={values} style={style} {...props} />;
}
