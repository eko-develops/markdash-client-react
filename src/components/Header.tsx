import Navbar from './Navbar';
import { IHeaderProps } from '../types';
import ThemeToggle from './ThemeToggle';

const Header = ({
	theme,
	setTheme,
	setShowPromotionForm,
	showPromotionForm,
}: IHeaderProps) => {
	return (
		<header className="flex justify-between items-center h-20 mb-20">
			<div className="text-2xl font-bold">Marketing Dashboard</div>
			<div className="flex items-center ">
				<Navbar
					setShowPromotionForm={setShowPromotionForm}
					showPromotionForm={showPromotionForm}
				/>
				<ThemeToggle theme={theme} setTheme={setTheme} />
			</div>
		</header>
	);
};

export default Header;
