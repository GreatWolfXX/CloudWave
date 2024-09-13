import styles from './info_block_with_image.module.scss'
import { Inter } from 'next/font/google'

const inter = Inter({
    weight: ['400', '600'],
    subsets: ['latin']
}
)

export default function InfoBlockWithImage(props) {
    return (
        <div className={`${styles.info_block}`}>
            {props.isWithLeftImage == true && <img className={styles.info_block_img} src={props.src} alt={props.alt} />}
            <div className={styles.info_block_text}>
                <p className={`${inter.className} ${styles.info_block_text_title}`}>{props.title}</p>
                <p className={`${inter.className} ${styles.info_block_text_description}`}>{props.description}</p>
            </div>
            {props.isWithLeftImage == false && <img className={styles.info_block_img} src={props.src} alt={props.alt} />}
        </div>
    );
}