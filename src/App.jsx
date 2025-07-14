import { BrowserRouter, Routes, Route, Link, useNavigate, } from 'react-router-dom'
import Home from './pages/home_page/home_page';
import Work from './pages/work_page/work_page';
import Layout from './components/Layout.jsx';



function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/work' element={<Layout />}>
					<Route index element={<Work />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
