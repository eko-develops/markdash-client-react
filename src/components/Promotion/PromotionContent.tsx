import { IPromotionContentProps } from '../../types';

const PromotionContent = ({ title, description }: IPromotionContentProps) => {
	return (
		<>
			<h3 className="font-bold text-lg">{title}</h3>
			<p className="mb-4">{description}</p>
		</>
	);
};

export default PromotionContent;
