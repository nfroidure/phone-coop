import useCSSVar from "../hooks/useCSSVar";
import QRCodeReact from "qrcode.react";
import {CSSProperties} from "react";

export default function QRCode({ values, style }: { values: object, style?: CSSProperties | undefined }) {
    return (
        <div style={style}>
            <QRCodeReact value={JSON.stringify(values)} bgColor={useCSSVar("--qrcodebg", "auto")} fgColor={useCSSVar("--qrcodefg", "auto")} level={"H"} size={200} />
        </div>
    );
}