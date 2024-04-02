import './ui/global.scss'
import styles from './page.module.scss'
import { Inter } from 'next/font/google'
import Button from './ui/Button'
import CompanyItem from './ui/CompanyItem'

const inter = Inter({
  weight: ['400', '500', '600'],
  subsets: ['latin']
}
)

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <header className={`${styles.container} ${styles.header}`}>
        <div className={`${styles.header_title}`}>
          <img src={'/icon.svg'} alt="icon cloudwave" className={`${styles.header_title_icon}`} />
          <p className={`${inter.className} ${styles.header_title_text}`}>CloudWave</p>
        </div>
        <div className={styles.menu}>
          <ul className={`${styles.menu} ${styles.menu_navigation}`}>
            <li className={`${inter.className} ${styles.menu_navigation_item}`}>Home</li>
            <li className={`${inter.className} ${styles.menu_navigation_item}`}>Services</li>
            <li className={`${inter.className} ${styles.menu_navigation_item}`}>Pricing</li>
            <li className={`${inter.className} ${styles.menu_navigation_item}`}>Company</li>
            <li className={`${inter.className} ${styles.menu_navigation_item}`}>FAQs</li>
          </ul>
          <Button className={styles.menu_btn_how_it_works} text='How it works' color='#DFE3DE' textColor='#1C4F4A' isContainImage='false' />
          <img src={'/ic_phone.svg'} alt="phone" className={styles.menu_btn_phone} />
        </div>
      </header>
      <section className={`${styles.container} ${styles.hero}`}>
        <div className={styles.hero_container}>
          <h1 className={`${inter.className} ${styles.hero_title}`}>Simplify Your Workflow with CloudWave</h1>
          <div className={styles.hero_btn_container}>
            <Button className={styles.hero_btn_lets_do_this} text='Lets do this' color='#FC6719' isContainImage='false' />
            <Button text='Play video' color='#1C4F4A' isContainImage={true} src='/ic_play.svg' />
          </div>
          <div className={styles.hero_users_container}>
            <div className={styles.hero_users_img}>
              <img className={styles.user_img} src='/users_img/user_1.png' alt='user 1' />
              <img className={styles.user_img} src='/users_img/user_2.png' alt='user 2' />
              <img className={styles.user_img} src='/users_img/user_3.png' alt='user 3' />
              <img className={styles.user_img} src='/users_img/user_4.png' alt='user 4' />
            </div>
            <p className={`${inter.className} ${styles.hero_users_title}`}>+10k Users around the Globe</p>
          </div>
        </div>
      </section>
      <section className={styles.trust_section}>
        <img className={styles.trust_section_separator} src='/trust_section_separator.png' alt="trust section separator" />
        <div className={`${styles.container} ${styles.content}`}>
          <h2 className={`${inter.className} ${styles.content_title}`}>We are trusted by more than 1.000 Companies worldwide</h2>
          <div className={styles.content_companys}>
            <div className={styles.content_companys_row}>
              <CompanyItem text='Pinterest' src='/company_icons/ic_pinterest.svg' />
              <CompanyItem text='Facebook' src='/company_icons/ic_facebook.svg' />
            </div>
            <div className={styles.content_companys_row}>
              <CompanyItem text='LinkedIn' src='/company_icons/ic_linkedin.svg' />
              <CompanyItem text='YouTube' src='/company_icons/ic_youtube.svg' />
            </div>
            <div className={styles.content_companys_row}>
              <CompanyItem text='Instagram' src='/company_icons/ic_instagram.svg' />
              <CompanyItem text='Discord' src='/company_icons/ic_discord.svg' />
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.container} ${styles.how_we_work}`}>
        <h2 className={`${inter.className} ${styles.how_we_work_title}`}>How We Work</h2>
        <div className={styles.how_we_work_item}>
          <div className={styles.how_we_work_item_text}>
            <p className={`${inter.className} ${styles.how_we_work_item_text_title}`}>Get started</p>
            <p className={`${inter.className} ${styles.how_we_work_item_text_description}`}>Our world is becoming more and more obsessed with comparison and validation.</p>
          </div>
          <img className={styles.how_we_work_item_img} src='/how_we_work/get_started.png' alt='image get started' />
        </div>
        <div className={styles.how_we_work_item}>
          <img className={styles.how_we_work_item_img} src='/how_we_work/configuration.png' alt='image configuration' />
          <div className={styles.how_we_work_item_text}>
            <p className={`${inter.className} ${styles.how_we_work_item_text_title}`}>Configuration</p>
            <p className={`${inter.className} ${styles.how_we_work_item_text_description}`}>Configuration management can be used to maintain an understanding of the status of system components.</p>
          </div>
        </div>
        <div className={styles.how_we_work_item}>
          <div className={styles.how_we_work_item_text}>
            <p className={`${inter.className} ${styles.how_we_work_item_text_title}`}>Solution</p>
            <p className={`${inter.className} ${styles.how_we_work_item_text_description}`}>Solution, in chemistry, a homogenous mixture of two or more substances in relative.</p>
          </div>
          <img className={styles.how_we_work_item_img} src='/how_we_work/solution.png' alt='image solution' />
        </div>
      </section>
    </div>
  );
}
