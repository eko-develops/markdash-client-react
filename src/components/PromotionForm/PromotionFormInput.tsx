import { IPromotionFormInputProps } from '../../types';

const PromotionFormInput = ({
	value,
	name,
	max = 30,
	type = 'text',
	onChange,
}: IPromotionFormInputProps) => {
	return (
		<input
			type={type}
			name={name}
			value={value}
			required
			max={max}
			onChange={onChange}
			className="border border-black/20 dark:text-light-text py-2 px-1 rounded mb-4"
		/>
	);
};

export default PromotionFormInput;
