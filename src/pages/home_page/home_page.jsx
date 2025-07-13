import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './home_page.module.css'
import gentleman from './gentleman.svg'
import logo from './logo.png'

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
								<a href='#features'>features</a>
							</li>
							<li>
								<a href='#statistics'>statistics</a>
							</li>
							<li>
								<a href='#leaderboard'>leaderboard</a>
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
						<span> © {new Date().getFullYear()}  author - Ivan Poliansky </span>
					</div>
				</div>
			</div>
		</footer>
	)
}

const TestList = ({ show, setSelectedTest }) => {
	const [expandedTests, setExpandedTests] = useState({})

	function choiseTest(name) {
		setSelectedTest(name)
	}

	const tests = [
		{ name: '30 Seconds Test' },
		{ name: '1 Minute Test' },
		{ name: '2 Minutes Test' },
		{ name: '3 Minutes Test' },
		{ name: '5 Minutes Test' }
	]

	const toggleTest = index => {
		setExpandedTests(prev => ({
			...prev,
			[index]: !prev[index],
		}))
	}
	return (
		<div className={show ? styles.trigerDivAnimated : styles.fadeOut}>
			<div
				className={styles.testContainer}
				style={{ display: show ? 'flex' : 'none' }}
			>
				{tests.map((test, index) => (
					<div
						key={index}
						className={styles.testItem}
						onClick={() => {
                            toggleTest(index);
                        choiseTest(test.name);
                        }}
				>
						<div className={styles.testHeader}>
							<button
								className={styles.testButton}
								onClick={() => choiseTest(test.name)}
							>
								{test.name}
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default function Home() {
	const navigate = useNavigate()
	const [showTests, setShowTests] = useState(false)
	const [selectedTest, setSelectedTest] = useState('')
	const [selectInfo, setSelectedInfo] = useState(true)

	const toggleinfo = () => {
		setSelectedInfo(!selectInfo)
	}
	const toggleShowTests = () => {
		setShowTests(!showTests)
	}

	const goToworkPage = () => {
		const seconds = (() => {
      if (!selectedTest) return 60;
      const num = parseInt(selectedTest, 10);
      return isNaN(num) ? 60 : num * (selectedTest.includes('Minute') ? 60 : 1);
    })();
    navigate('/work', { state: { seconds } });
	}

	return (
		<div className={styles.main_container}>
			<div className={styles.side_bar}></div>

			<div className={styles.main_menu}>
				<span className={styles.main_text}>
					<img src={logo} alt='' />
					<div className={styles.smallText}>Made by Ivan</div>
				</span>

				<div className={styles.buttonWrapper}>
					<div
						onClick={toggleShowTests}
						className={`${styles.trigerDiv} ${
							showTests ? styles.trigerDiv_red : styles.trigerDiv
						}`}
					>
						<span className={showTests ? styles.Closetext : styles.Closetext2}>
							{showTests ? 'close' : selectedTest || 'Choose test time'}
						</span>
						<TestList show={showTests} setSelectedTest={setSelectedTest} />
					</div>

					{!showTests && (
						<button className={styles.main_button} onClick={goToworkPage}>
							Start Test
						</button>
					)}
					<div className={styles.Man}>
						<img src={gentleman} alt='' />
					</div>
				</div>
			</div>

			<div className={styles.right_space}>
				<button className={styles.info_button} onClick={toggleinfo}></button>
				<Footer info={selectInfo} />
			</div>
		</div>
	)
}
