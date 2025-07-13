import React from 'react'
import styles from './home_page.module.css'

export default function Footer({ info }) {
	return (
		<footer
			className={`${styles.footer} ${
				info ? styles.footerVisible : styles.footerHidden
			}`}
		>
			<div className={styles.footer_content}>
				<div className={styles.footer_main}>
					<FooterSection
						title='WPM Test'
						links={[
							{ href: '#about', label: 'About' },
							{ href: '#features', label: 'Features' },
							{ href: '#statistics', label: 'Statistics' },
							{ href: '#leaderboard', label: 'Leaderboard' },
						]}
					/>
					<FooterSection
						title='Quick Test'
						links={[
							{ href: '#30sec', label: '30 sec' },
							{ href: '#1min', label: '1 min' },
							{ href: '#2min', label: '2 min' },
							{ href: '#custom', label: 'Custom' },
						]}
					/>
					<FooterSection
						title='Help'
						links={[
							{ href: '#contact', label: 'Contacts' },
							{ href: '#feedback', label: 'Feedback' },
							{ href: '#bug-report', label: 'Bug report' },
						]}
					/>
					<SocialSection />
				</div>
				<FooterBottom />
			</div>
		</footer>
	)
}
