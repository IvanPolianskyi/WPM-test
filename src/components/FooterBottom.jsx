import React from 'react'
import styles from './home_page.module.css'

export default function FooterBottom() {
	return (
		<div className={styles.footer_bottom}>
			<div className={styles.footer_copyright}>
				<span className={styles.footer_brand}>WPM Test</span>
				<span> © {new Date().getFullYear()} author - Ivan Poliansky</span>
			</div>
		</div>
	)
}
