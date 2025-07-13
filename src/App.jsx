import { BrowserRouter, Routes, Route, Link, useNavigate, } from 'react-router-dom'
import { useEffect } from 'react';
import Home from './pages/home_page/home_page';
import Work from './pages/work_page/work_page';


function App() {
	return (
		<BrowserRouter>


			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/work' element={<Work />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
