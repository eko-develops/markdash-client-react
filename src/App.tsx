import { useState, useEffect } from 'react';
import Header from './components/Header';
import { IconContext } from '@phosphor-icons/react';
import Promotions from './components/Promotions';

function App() {
	const [theme, setTheme] = useState('dark');
	const [promotions, setPromotions] = useState(null);

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);

	const handleThemeChange = () => {
		if (theme === 'dark') {
			setTheme('light');
		} else {
			setTheme('dark');
		}
	};

	useEffect(() => {
		fetch('http://localhost:5000/promotions', {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		})
			.then((res) => res.json())
			.then((data) => {
				setPromotions(data.promotions);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<IconContext.Provider
			value={{
				size: '24',
			}}
		>
			<div className="min-h-screen pb-44 bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text transition duration-500 ease-in-out">
				<div className="max-w-5xl mx-auto">
					<Header handleThemeChange={handleThemeChange} theme={theme} />
					<Promotions promotions={promotions} />
				</div>
			</div>
		</IconContext.Provider>
	);
}

export default App;
