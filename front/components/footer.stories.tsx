import { ComponentProps } from "react";
import BaseFooter from "./footer";

const story = {
    title: "Layout/Footer",
    component: BaseFooter,
    argTypes: {
        text: {
            control: { type: "text" },
            defaultValue: "Footer",
        },
    },
};

export default story;

export function Footer({
                              text,
                              ...props
                          }: { text: string } & ComponentProps<typeof BaseFooter>) {
    return <BaseFooter {...props}></BaseFooter>;
}