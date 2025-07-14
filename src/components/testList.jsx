import { useState } from 'react'

import styles from './component.module.css'

export default function TestList({ show= true, setSelectedTest=true }) {
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
		<div >
			<div >
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
