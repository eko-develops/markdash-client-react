interface NavbarProps {
	setShowPromotionForm: React.Dispatch<React.SetStateAction<boolean>>;
	showPromotionForm: boolean;
}

const Navbar = ({ setShowPromotionForm, showPromotionForm }: NavbarProps) => {
	return (
		<nav>
			<ul className="flex justify-between font-bold  w-64">
				<li>
					<a href="#">Promotions</a>
				</li>
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
