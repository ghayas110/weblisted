import styles from '../../../styles/sidebar.module.css'
import { LineStyle,
     Timeline,
      TrendingUp,
       PermIdentity,
     Storefront,
     AttachMoney,
     BarChart,
     MailOutline,
     DynamicFeed,
     ChatBubbleOutline,
     WorkOutline,
     Report
     } from '@material-ui/icons'

function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarWrapper}>
                <div className={styles.sidebarMenu}>
                    <h3 className={styles.sidebarTitle}>Dashboard</h3>
                    <ul className={styles.sidebarList}>
                        <li className={`${styles.sidebarListitem} ${styles.active}`}  >
                            <LineStyle className={styles.sidebarIcon} />
                            Home
                        </li>
                        <li className={styles.sidebarListitem}>
                            <Timeline className={styles.sidebarIcon} />
                            Analytics
                        </li>
                        <li className={styles.sidebarListitem}>
                            <TrendingUp className={styles.sidebarIcon} />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className={styles.sidebarMenu}>
                    <h3 className={styles.sidebarTitle}>Quick Menu</h3>
                    <ul className={styles.sidebarList}>
                        <li className={`${styles.sidebarListitem}`}>
                            <PermIdentity className={styles.sidebarIcon} />
                            Users   
                        </li>
                        <li className={styles.sidebarListitem}>
                            <Storefront className={styles.sidebarIcon} />
                            Products
                        </li>
                        <li className={styles.sidebarListitem}>
                            <AttachMoney className={styles.sidebarIcon} />
                            Transaction
                        </li>
                        <li className={styles.sidebarListitem}>
                            <BarChart className={styles.sidebarIcon} />
                            Reports 
                        </li>
                    </ul>
                </div>
                <div className={styles.sidebarMenu}>
                <h3 className={styles.sidebarTitle}>Notifications</h3>
                <ul className={styles.sidebarList}>
                    <li className={`${styles.sidebarListitem} `}>
                        <MailOutline className={styles.sidebarIcon} />
                        Mail
                    </li>
                    <li className={styles.sidebarListitem}>
                        <DynamicFeed className={styles.sidebarIcon} />
                        Feedback
                    </li>
                    <li className={styles.sidebarListitem}>
                        <ChatBubbleOutline className={styles.sidebarIcon} />
                        Messages                    </li>
                </ul>
            </div>
            <div className={styles.sidebarMenu}>
            <h3 className={styles.sidebarTitle}>Staff</h3>
            <ul className={styles.sidebarList}>
                <li className={`${styles.sidebarListitem}`}>
                    <WorkOutline className={styles.sidebarIcon} />
                    Manage
                </li>
                <li className={styles.sidebarListitem}>
                    <Timeline className={styles.sidebarIcon} />
                    Analytics
                </li>
                <li className={styles.sidebarListitem}>
                    <Report className={styles.sidebarIcon} />
                    Reports
                </li>
            </ul>
        </div>
            </div>
        </div>
    )
}

export default Sidebar
