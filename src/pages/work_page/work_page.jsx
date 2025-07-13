/* WorkPage.jsx */
import { useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styles from './work_page.module.css'

const SAMPLE_TEXT = `In the early dawn of human civilization, the search for reliable means of communication spurred a series of remarkable inventions. From the ancient clay tablets inscribed by Sumerian scribes to the intricate quills wielded by medieval monks, each advancement reshaped the way people shared ideas. It was not until the nineteenth century, however, that a true revolution occurred with the advent of the mechanical typewriter. Inventors like Christopher Latham Sholes recognized the need for a device that could imprint uniformly consistent characters onto paper, and their efforts culminated in the familiar QWERTY keyboard layout that still endures today.

As typists learned to master the rhythmic dance of finger and key, the world witnessed an explosion in written productivity. Secretaries and journalists harnessed the newfound speed, transforming offices and newsrooms into epicenters of information exchange. The clack-clack-clack of keys became the soundtrack of progress, heralding an age where the written word could be produced almost as quickly as it was conceived.

In modern times, computer keyboards have supplanted their mechanical forebears, yet the spirit of innovation remains. Touchscreens and voice recognition systems now vie for dominance, each promising even greater ease and efficiency. Despite these advances, the humble act of pressing physical keys retains an almost nostalgic charm. It reminds us of an era when each keystroke carried weight, and errors demanded diligence to correct.

Today, anyone who aspires to rapid and accurate typing must master not only the placement of letters but also the logic of word patterns and sentence structure. As you embark upon your own typing journey, remember that every character contributes to a tapestry of language—binding together the thoughts of the past with the possibilities of the future. Good luck, and may your WPM continue to climb with each passing test!`

export default function WorkPage() {
	const navigate = useNavigate()
	const { state } = useLocation()
	const initialTime = state?.seconds ?? 60

	const words = SAMPLE_TEXT.split(' ')
	const [currentIndex, setCurrentIndex] = useState(0)
	const [input, setInput] = useState('')
	const [timeLeft, setTimeLeft] = useState(initialTime)
	const [isActive, setIsActive] = useState(false)
	const [wpm, setWpm] = useState(0)
	const [correctWords, setCorrectWords] = useState(new Set())
	const correctCountRef = useRef(0)
	const inputRef = useRef(null)

	useEffect(() => {
		if (input.length > 0 && !isActive) setIsActive(true)
	}, [input, isActive])

	useEffect(() => {
		if (!isActive) return
		if (timeLeft === 0) {
			setWpm(correctCountRef.current)
			setIsActive(false)
			return
		}
		const id = setInterval(() => setTimeLeft(t => t - 1), 1000)
		return () => clearInterval(id)
	}, [isActive, timeLeft])

	const handleChange = ({ target: { value } }) => {
		if (/ {2,}/.test(value)) return
		if (value.endsWith(' ')) {
			const trimmed = value.trim()
			if (trimmed === words[currentIndex]) {
				correctCountRef.current += 1
				setCorrectWords(prev => new Set(prev).add(currentIndex))
			}
			setCurrentIndex(idx => Math.min(idx + 1, words.length - 1))
			setInput('')
			return
		}
		setInput(value)
	}

	const handleRestart = () => {
		setInput('')
		setCurrentIndex(0)
		setTimeLeft(initialTime)
		setWpm(0)
		correctCountRef.current = 0
		setCorrectWords(new Set())
		setIsActive(false)
		inputRef.current?.focus()
	}

	const renderWord = (word, idx) => {
		const isCompletedCorrect = correctWords.has(idx)
		if (isCompletedCorrect) {
			return (
				<span key={idx} className={styles.correctWord}>
					{word}
				</span>
			)
		}
		if (idx !== currentIndex) {
			return (
				<span key={idx} className={styles.word}>
					{word}
				</span>
			)
		}
		return (
			<span key={idx} className={styles.word}>
				{word.split('').map((char, i) => {
					let className = ''
					if (i < input.length) {
						className =
							input[i] === char ? styles.correctChar : styles.incorrectChar
					}
					return (
						<span key={i} className={className}>
							{char}
						</span>
					)
				})}
			</span>
		)
	}

	return (
		<div className={styles.container}>
			<button className={styles.back} onClick={() => navigate(-1)}>
				← Back
			</button>
			<div className={styles.textDisplay}>
				{words.map((w, i) => renderWord(w, i))}
			</div>
			<input
				ref={inputRef}
				className={styles.input}
				value={input}
				onChange={handleChange}
				placeholder='Start typing...'
				disabled={timeLeft === 0}
				autoFocus
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
				<button className={styles.restart} onClick={handleRestart}>
					↻
				</button>
			</div>
		</div>
	)
}
