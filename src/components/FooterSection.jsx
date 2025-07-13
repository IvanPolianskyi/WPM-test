import React from 'react'
import styles from './home_page.module.css'

export function FooterSection({ title, links }) {
	return (
		<div className={styles.footer_section}>
			<h3>{title}</h3>
			<ul className={styles.footer_links}>
				{links.map(({ href, label }, i) => (
					<li key={i}>
						<a href={href}>{label}</a>
					</li>
				))}
			</ul>
		</div>
	)
}
