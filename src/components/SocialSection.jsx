import React from 'react'
import styles from './home_page.module.css'

export default function SocialSection() {
	const icons = [
		{ href: '#github', label: 'GitHub', symbol: '⚡' },
		{ href: '#twitter', label: 'Twitter', symbol: '🐦' },
		{ href: '#linkedin', label: 'LinkedIn', symbol: '💼' },
		{ href: '#email', label: 'Email', symbol: '📧' },
	]
	return (
		<div className={styles.footer_section}>
			<h3>Have a nice day!</h3>
			<div className={styles.footer_social}>
				{icons.map(({ href, label, symbol }, i) => (
					<a
						key={i}
						href={href}
						className={styles.social_icon}
						aria-label={label}
					>
						<span>{symbol}</span>
					</a>
				))}
			</div>
		</div>
	)
}
