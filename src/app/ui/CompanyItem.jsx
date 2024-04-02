import styles from './company_item.module.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ 
    weight: ['500'],
    subsets: ['latin'] }
    )

export default function CompanyItem(props) {
    return (
        <div className={`${props.className} ${styles.content_company_item}`}>
            <img className={styles.content_company_item_icon} src={props.src} alt="icon" />
            <p className={`${inter.className} ${styles.content_company_item_text}`}>{props.text}</p>
        </div>
    );
}