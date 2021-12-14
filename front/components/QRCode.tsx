import useCSSVar from "../hooks/useCSSVar";
import QRCodeReact from "qrcode.react";
import { CSSProperties, useRef } from "react";
import styles from "./validationButton.module.css";

export default function QRCode({
  values,
  style,
}: {
  values: object;
  style?: CSSProperties | undefined;
}) {
  const rootRef = useRef(null);

  return (
    <div style={style} ref={rootRef}>
      <QRCodeReact
        value={JSON.stringify(values)}
        bgColor={useCSSVar("--qrcodebg", "auto")}
        fgColor={useCSSVar("--qrcodefg", "auto")}
        level={"H"}
        size={200}
      />
      <br />
      <a
        href="#"
        className={styles.button}
        onClick={() => {
          if (rootRef?.current) {
            (rootRef.current as unknown as HTMLElement).getElementsByTagName(
              "a"
            )[0].href = (rootRef.current as unknown as HTMLElement)
              .getElementsByTagName("canvas")[0]
              .toDataURL();
          }
        }}
        download="phone-coop-img.png"
      >
        Télécharger
      </a>
    </div>
  );
}
