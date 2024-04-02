import styles from './button.module.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ 
    weight: ['400'],
    subsets: ['latin'] }
    )

export default function Button(props) {
    return (
        <div style={{background: props.color}} className={`${props.className} ${styles.btn_container}`}>
            {props.isContainImage == true && <img className={styles.btn_container_icon} src={props.src} alt='button'/> }
            <p style= {{color: props.textColor}}className={`${inter.className} ${styles.btn_container_title}`}>{props.text}</p>
        </div>
    );
}