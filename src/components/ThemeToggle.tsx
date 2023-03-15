import { Sun, Moon } from '@phosphor-icons/react';
import { IThemeToggleProps } from '../types';

const ThemeToggle = ({ theme, setTheme }: IThemeToggleProps) => {
	const handleThemeChange = () => {
		if (theme === 'dark') {
			setTheme('light');
		} else {
			setTheme('dark');
		}
	};
	return (
		<button className="ml-6 text-sm " onClick={handleThemeChange}>
			{theme === 'dark' ? <Moon /> : <Sun />}
		</button>
	);
};

export default ThemeToggle;
