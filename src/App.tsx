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
		<div className="h-screen max-w-5xl mx-auto py-4 bg-white dark:bg-slate-900 transition duration-500 ease-in-out">
			<button
				className="bg-purple-500 p-4 rounded-3xl"
				onClick={handleThemeChange}
			>
				Change theme
			</button>
		</div>
	);
}

export default App;
