import { useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styles from './work_page.module.css'

const SAMPLE_TEXT = `into most right consider here point large between both form that at take by to the during change be few open over number going face`

export default function WorkPage() {
	const navigate = useNavigate()
	const { state } = useLocation()
	const initialTime = state?.seconds ?? 60

	const [text] = useState(SAMPLE_TEXT)
	const [input, setInput] = useState('')
	const [timeLeft, setTimeLeft] = useState(initialTime)
	const [isActive, setIsActive] = useState(false)
	const [wpm, setWpm] = useState(0)
	const inputRef = useRef(null)

	useEffect(() => {
		if (input.length > 0 && !isActive) {
			setIsActive(true)
		}
	}, [input, isActive])

	useEffect(() => {
		if (!isActive) return
		if (timeLeft === 0) {
			calculateWpm()
			setIsActive(false)
			return
		}
		const timerId = setInterval(() => {
			setTimeLeft(t => t - 1)
		}, 1000)
		return () => clearInterval(timerId)
	}, [isActive, timeLeft])

	const calculateWpm = () => {
		const enteredWords = input.trim().split(/\s+/)
		const originalWords = text.split(' ')
		let correct = 0
		for (let i = 0; i < enteredWords.length; i++) {
			if (enteredWords[i] === originalWords[i]) correct++
		}
		setWpm(correct)
	}

	const handleChange = e => setInput(e.target.value)

	const handleRestart = () => {
		setInput('')
		setTimeLeft(initialTime)
		setWpm(0)
		setIsActive(false)
		inputRef.current.focus()
	}

	return (
		<div className={styles.container}>
			<button className={styles.backButton} onClick={() => navigate(-1)}>
				← Back
			</button>
			<div className={styles.textDisplay}>{text}</div>
			<textarea
				ref={inputRef}
				className={styles.textInput}
				value={input}
				onChange={handleChange}
				placeholder='Start typing...'
				disabled={timeLeft === 0}
			/>
			<div className={styles.footer}>
				<div className={styles.metric}>
					<span className={styles.value}>{wpm}</span>
					<span className={styles.label}>WPM</span>
				</div>
				<div className={styles.metric}>
					<span className={styles.value}>
						{Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
					</span>
					<span className={styles.label}>Time</span>
				</div>
				<button className={styles.restartButton} onClick={handleRestart}>
					↻
				</button>
			</div>
		</div>
	)
}
