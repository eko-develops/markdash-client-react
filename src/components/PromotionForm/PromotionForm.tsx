import { IPromotionFormProps } from '../../types';
import PromotionFormActions from './PromotionFormActions';
import PromotionFormInput from './PromotionFormInput';
import PromotionFormLabel from './PromotionFormLabel';

const PromotionForm = ({
	setShowPromotionForm,
	handleAdd,
	formData,
	setFormData,
	defaultFormData,
}: IPromotionFormProps) => {
	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		e.preventDefault();
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	return (
		<div className="mb-10">
			<h2 className="text-xl font-bold mb-4">Add a New Promotion</h2>
			<form className="flex flex-col">
				<PromotionFormLabel title={'Title'} />
				<PromotionFormInput
					value={formData.title}
					name="title"
					onChange={handleInputChange}
				/>
				<PromotionFormLabel title={'Description'} />
				<textarea
					name="description"
					required
					maxLength={120}
					className="border border-black/20 dark:text-light-text py-2 px-1 rounded mb-4"
					value={formData.description}
					onChange={handleInputChange}
				/>
				<PromotionFormLabel title={'Start'} />
				<PromotionFormInput
					value={formData.start_date}
					name="start_date"
					type="date"
					onChange={handleInputChange}
				/>
				<PromotionFormLabel title={'End'} />
				<PromotionFormInput
					value={formData.end_date}
					name="end_date"
					type="date"
					onChange={handleInputChange}
				/>
				<div className="flex">
					<PromotionFormActions
						handleAdd={handleAdd}
						setFormData={setFormData}
						defaultFormData={defaultFormData}
						setShowPromotionForm={setShowPromotionForm}
					/>
				</div>
			</form>
		</div>
	);
};

export default PromotionForm;
