import { useState, useEffect } from 'react';
import Header from './components/Header';
import { IconContext } from '@phosphor-icons/react';

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
			<div className="w-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text transition duration-500 ease-in-out">
				<div className="h-screen max-w-5xl mx-auto">
					<Header handleThemeChange={handleThemeChange} theme={theme} />
				</div>
			</div>
		</IconContext.Provider>
	);
}

export default App;
