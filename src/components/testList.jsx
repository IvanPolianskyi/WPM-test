import React, { useState } from 'react'
import styles from './home_page.module.css'

export default function TestList({ show, setSelectedTest }) {
	const [expanded, setExpanded] = useState({})
	const tests = [
		'30 Seconds Test',
		'1 Minute Test',
		'2 Minutes Test',
		'3 Minutes Test',
		'5 Minutes Test',
	]

	const handleSelect = (name, idx) => {
		setSelectedTest(name)
		setExpanded(prev => ({ ...prev, [idx]: !prev[idx] }))
	}

	if (!show) return null
	return (
		<div className={styles.trigerDivAnimated}>
			<div className={styles.testContainer}>
				{tests.map((name, idx) => (
					<div
						key={idx}
						className={styles.testItem}
						onClick={() => handleSelect(name, idx)}
					>
						<button className={styles.testButton}>{name}</button>
					</div>
				))}
			</div>
		</div>
	)
}
