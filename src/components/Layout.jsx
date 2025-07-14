import { Outlet } from 'react-router-dom'
import styles from './component.module.css'
import Footer from './Footer'

export default function Layout() {
	return (
		<div className={styles.main_container}>
			<aside className={styles.side_bar} />

			<main className={styles.main_menu}>
				<Outlet />
			</main>

			<section className={styles.right_space}>
				<Footer info={true} />
			</section>
		</div>
	)
}
