import { useState, useEffect } from 'react';

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
		<div className="w-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text transition duration-500 ease-in-out">
			<div className="h-screen max-w-5xl mx-auto py-4 flex flex-col justify-center items-center">
				<h1 className="font-bold text-4xl mb-4">Hello World</h1>
				<button
					className="bg-violet-500 p-4 rounded-3xl text-dark-text transition duration-500 ease-in-out"
					onClick={handleThemeChange}
				>
					Change theme
				</button>
			</div>
		</div>
	);
}

export default App;
