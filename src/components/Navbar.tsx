import { INavbarProps } from '../types';

const Navbar = ({ setShowPromotionForm, showPromotionForm }: INavbarProps) => {
	return (
		<nav>
			<ul className="flex justify-between font-bold">
				<li>
					<button
						onClick={() =>
							showPromotionForm
								? setShowPromotionForm(false)
								: setShowPromotionForm(true)
						}
					>
						Add Promotion
					</button>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
