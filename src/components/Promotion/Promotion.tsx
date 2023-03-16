import { useState } from 'react';
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
	const [editing, setEditing] = useState(false);

	return (
		<div className="flex justify-between items-center border-light-text dark:border-dark-text p-4 rounded">
			<div className="w-full min-h-[160px] flex flex-col relative">
				<PromotionContent
					title={title}
					description={description}
					editing={editing}
				/>
				<div className="flex flex-col space-y-2 absolute bottom-0">
					<PromotionFooter
						datePosted={datePosted}
						startDate={startDate}
						endDate={endDate}
						scheduled={scheduled}
						editing={editing}
					/>
				</div>
			</div>
			<div className="flex flex-col items-end font-bold text-sm">
				<PromotionActions
					id={id}
					handleSchedule={handleSchedule}
					handleDelete={handleDelete}
					editing={editing}
					setEditing={setEditing}
				/>
			</div>
		</div>
	);
};

export default Promotion;
