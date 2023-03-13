import { useState, useEffect } from 'react';
import Header from './components/Header';
import { IconContext } from '@phosphor-icons/react';
import Promotions from './components/Promotions';

function App() {
	const [theme, setTheme] = useState('dark');

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

	return (
		<IconContext.Provider
			value={{
				size: '1.5rem',
			}}
		>
			<div className="min-h-screen pb-44 bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text transition duration-500 ease-in-out">
				<div className="max-w-5xl mx-auto">
					<Header handleThemeChange={handleThemeChange} theme={theme} />
					<Promotions />
				</div>
			</div>
		</IconContext.Provider>
	);
}

export default App;
