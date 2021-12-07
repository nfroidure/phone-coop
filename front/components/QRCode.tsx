import useCSSVar from "../hooks/useCSSVar";
import { QRious } from 'react-qrious';
import {CSSProperties} from "react";

export default function Paragraph({ values, style }: { values: object, style?: CSSProperties | undefined }) {
    return (
        <div style={style}>
            <QRious value={JSON.stringify(values)} background={useCSSVar('--primary', 'auto')} foreground={useCSSVar('--secondary-darker', 'auto')} level={"H"} size={200} />
        </div>
    );
}