import {
	BrowserRouter,
	Routes,
	Route,
	Link,
	useNavigate,
} from 'react-router-dom'
import { useEffect } from 'react'
import styles from './work_page.module.css'

export default function Work() {
	const navigate = useNavigate()

	useEffect(() => {
		const hasVisited = sessionStorage.getItem('visited_about')
		if (hasVisited) {
			sessionStorage.setItem('visited_about', 1)
			console.log(sessionStorage.getItem('visited_about'))
			navigate('/', { replace: true })
		}
	}, [navigate])


    const click = () => {
			navigate('/')
		}
	return (


        <div>
            <h1>work</h1>
                <button onClick={click} className={styles.main_button}> end test</button>


        </div>
    )
}
