import Navbar from './Navbar';
import { Sun, Moon } from '@phosphor-icons/react';

interface IHeaderProps {
	theme: string;
	handleThemeChange: () => void;
	setShowPromotionForm: React.Dispatch<React.SetStateAction<boolean>>;
	showPromotionForm: boolean;
}

const Header = ({
	handleThemeChange,
	theme,
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

				<button className="ml-6 text-sm " onClick={handleThemeChange}>
					{theme === 'dark' ? <Moon /> : <Sun />}
				</button>
			</div>
		</header>
	);
};

export default Header;
