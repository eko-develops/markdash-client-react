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
		<div className="w-screen bg-white dark:bg-slate-900 text-gray-700 dark:text-gray-200 transition duration-500 ease-in-out">
			<div className="h-screen max-w-5xl mx-auto py-4 flex flex-col justify-center items-center">
				<h1 className="font-bold text-4xl mb-4">Hello World</h1>
				<button
					className="bg-purple-500 p-4 rounded-3xl text-gray-200  transition"
					onClick={handleThemeChange}
				>
					Change theme
				</button>
			</div>
		</div>
	);
}

export default App;
