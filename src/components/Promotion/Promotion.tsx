import { IPromotionProps } from '../../types';
import PromotionActions from './PromotionActions';
import PromotionContent from './PromotionContent';
import PromotionFooter from './PromotionFooter';

const Promotion = ({
	id,
	title,
	description,
	datePosted,
	startDate,
	endDate,
	scheduled,
	handleSchedule,
	handleDelete,
}: IPromotionProps) => {
	return (
		<div className="flex justify-between items-center border-light-text dark:border-dark-text p-4 rounded">
			<div className="w-full">
				<PromotionContent title={title} description={description} />
				<div className="flex flex-col space-y-2">
					<PromotionFooter
						datePosted={datePosted}
						startDate={startDate}
						endDate={endDate}
						scheduled={scheduled}
					/>
				</div>
			</div>
			<div className="flex flex-col items-end font-bold text-sm">
				<PromotionActions
					id={id}
					handleSchedule={handleSchedule}
					handleDelete={handleDelete}
				/>
			</div>
		</div>
	);
};

export default Promotion;
