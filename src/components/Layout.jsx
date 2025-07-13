import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import styles from './home_page.module.css'
import gentleman from './gentleman.svg'
import Footer from './Footer'
import TestList from './TestList'

export default function Layout() {
	const navigate = useNavigate()
	const [showTests, setShowTests] = useState(false)
	const [selectedTest, setSelectedTest] = useState('')
	const [showFooter, setShowFooter] = useState(true)

	const handleTestToggle = () => setShowTests(prev => !prev)
	const handleFooterToggle = () => setShowFooter(prev => !prev)

	const startTest = () => {
		const num = parseInt(selectedTest, 10) || 60
		const seconds = num * (selectedTest.includes('Minute') ? 60 : 1)
		navigate('/work', { state: { seconds } })
	}

	return (
		<div className={styles.main_container}>
			<aside className={styles.side_bar} />

			<main className={styles.main_menu}>
				<span className={styles.main_text}>WPM Test by Ivan</span>
				<div className={styles.buttonWrapper}>
					<div
						onClick={handleTestToggle}
						className={`${styles.trigerDiv} ${
							showTests ? styles.trigerDiv_red : ''
						}`}
					>
						<span className={showTests ? styles.Closetext : styles.Closetext2}>
							{showTests ? 'Close' : selectedTest || 'Choose test time'}
						</span>
						<TestList show={showTests} setSelectedTest={setSelectedTest} />
					</div>

					{!showTests && (
						<button className={styles.main_button} onClick={startTest}>
							Start Test
						</button>
					)}

					<div className={styles.Man}>
						<img src={gentleman} alt='Gentleman' />
					</div>
				</div>
			</main>

			<section className={styles.right_space}>
				<button className={styles.info_button} onClick={handleFooterToggle} />
				<Footer info={showFooter} />
			</section>

			<Outlet />
		</div>
	)
}
