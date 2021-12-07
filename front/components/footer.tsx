import styles from "../components/footer.module.css";

export default function Footer() {
    return <footer className={styles.foot}>
                <address>
                    <p className={styles.copyright}>
                        Made by the ENIGMA TEAM &#169; <br/>
                        Mis à jour le 06/12/21 <br/>
                        Gros bisous
                     </p>
                </address>
            </footer>
}