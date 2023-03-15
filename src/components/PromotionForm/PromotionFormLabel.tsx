import { IPromotionFormLabelProps } from '../../types';

const PromotionFormLabel = ({ title }: IPromotionFormLabelProps) => {
	return <label className="font-bold text-lg">{title}</label>;
};

export default PromotionFormLabel;
