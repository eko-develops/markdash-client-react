import { Check, X } from '@phosphor-icons/react';
import { IPromotionFooterProps } from '../../types';

const PromotionFooter = ({
	datePosted,
	startDate,
	endDate,
	scheduled,
}: IPromotionFooterProps) => {
	const parseDateString = (date: string) => {
		return new Date(date).toLocaleDateString('en-CA', {
			timeZone: 'UTC',
		});
	};

	return (
		<>
			<span className="text-xs text-gray-500 dark:text-gray-200 transition duration-500 ease-in-out">
				Date Posted: {new Date(datePosted).toLocaleString()}
			</span>
			<span className="text-xs text-gray-500 dark:text-gray-200 flex items-center transition duration-500 ease-in-out">
				Scheduled
				{scheduled ? (
					<Check className="mx-2 text-green-800 " weight="bold" size={18} />
				) : (
					<X
						className="mx-2 text-red-600 dark:text-red-600"
						size={18}
						weight="bold"
					/>
				)}
				<div className="ml-4 flex space-x-8">
					{startDate && (
						<p>
							<span className="font-bold">Start Date</span>:
							{parseDateString(startDate)}
						</p>
					)}
					{endDate && (
						<p>
							<span className="font-bold">End Date</span>:
							{parseDateString(endDate)}
						</p>
					)}
				</div>
			</span>
		</>
	);
};

export default PromotionFooter;
