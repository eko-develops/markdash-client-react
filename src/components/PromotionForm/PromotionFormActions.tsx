import { IPromotionFormActionsProps } from '../../types';

const PromotionFormActions = ({
	handleAdd,
	setFormData,
	defaultFormData,
	setShowPromotionForm,
}: IPromotionFormActionsProps) => {
	const handleClearFields = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();
		setFormData(defaultFormData);
	};

	const handleCancel = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		setShowPromotionForm(false);
	};

	return (
		<>
			<button
				className="bg-green-700 w-28 rounded py-2 text-white mr-auto"
				onClick={(e) => handleAdd(e)}
			>
				Add
			</button>
			<button
				className="bg-gray-500 w-28 rounded py-2 text-white mr-2"
				onClick={(e) => handleClearFields(e)}
			>
				Clear Fields
			</button>
			<button
				className="bg-red-500 w-28 rounded py-2 text-white"
				onClick={(e) => handleCancel(e)}
			>
				Cancel
			</button>
		</>
	);
};

export default PromotionFormActions;
