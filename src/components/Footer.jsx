import styles from './component.module.css'

const Footer = ({ info }) => {
	return (
		<footer
			className={`${styles.footer} ${
				info ? styles.footerVisible : styles.footerHidden
			}`}
		>
			<div className={styles.footer_content}>
				
				<div className={styles.footer_main}>
					<div className={styles.footer_section}>
						<h3>WPM Test</h3>
						<ul className={styles.footer_links}>
							<li>
								<a href='#about'>About</a>
							</li>
							<li>
								<a href='#features'>Features</a>
							</li>
							<li>
								<a href='#statistics'>Statistics</a>
							</li>
							<li>
								<a href='#leaderboard'>Leaderboard</a>
							</li>
						</ul>
					</div>

					<div className={styles.footer_section}>
						<h3>Quick Test</h3>
						<ul className={styles.footer_links}>
							<li>
								<a href='#30sec'>30 sec</a>
							</li>
							<li>
								<a href='#1min'>1 min</a>
							</li>
							<li>
								<a href='#2min'>2 min</a>
							</li>
							<li>
								<a href='#custom'>Custom</a>
							</li>
						</ul>
					</div>

					<div className={styles.footer_section}>
						<h3>Help</h3>
						<ul className={styles.footer_links}>
							<li>
								<a href='#contact'>Contacts</a>
							</li>
							<li>
								<a href='#feedback'>Feedback</a>
							</li>
							<li>
								<a href='#bug-report'>Bug-report</a>
							</li>
						</ul>
					</div>

					<div className={styles.footer_section}>
						<h3>Have a nice day!</h3>
						<div className={styles.footer_social}>
							<a
								href='#github'
								className={styles.social_icon}
								aria-label='GitHub'
							>
								<span>⚡</span>
							</a>
							<a
								href='#twitter'
								className={styles.social_icon}
								aria-label='Twitter'
							>
								<span>🐦</span>
							</a>
							<a
								href='#linkedin'
								className={styles.social_icon}
								aria-label='LinkedIn'
							>
								<span>💼</span>
							</a>
							<a
								href='#email'
								className={styles.social_icon}
								aria-label='Email'
							>
								<span>📧</span>
							</a>
						</div>
					</div>
				</div>

				<div className={styles.footer_bottom}>
					<div className={styles.footer_copyright}>
						<span className={styles.footer_brand}>WPM Test</span>
						<span> © {new Date().getFullYear()} author - Ivan Poliansky </span>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
