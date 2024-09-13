import styles from './profile_block.module.scss'
import { Inter } from 'next/font/google'

const inter = Inter({
    weight: ['400', '500', '600'],
    subsets: ['latin']
}
)

export default function ProfileBlock(props) {
    return (
        <div className={styles.profile_block}>
            <div style={{'--border-color': props.border_color}} className={styles.profile_block_avatar}>
                <img className={styles.profile_block_avatar_img} src={props.src} alt={props.alt} />
            </div>
            <div className={styles.info_block}>
                <p className={`${inter.className} ${styles.info_block_title_name}`}>{props.title_name}</p>
                <p className={`${inter.className} ${styles.info_block_title_position}`}>{props.title_position}</p>
                <div className={styles.email_block}>
                    <img src={'${basePath}/ic_email.svg'} alt="email" className={styles.email_block_icon} />
                    <p className={`${inter.className} ${styles.email_block_text}`}>{props.text_email}</p>
                </div>
            </div>
        </div>
    );
}