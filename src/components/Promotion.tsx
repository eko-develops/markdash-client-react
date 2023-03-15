import { Check, X } from '@phosphor-icons/react';
import { IPromotionProps } from '../types';

const Promotion = ({
	id,
	title,
	description,
	datePosted,
	startDate,
	endDate,
	scheduled,
	handleSchedule,
}: IPromotionProps) => {
	return (
		<div className="flex justify-between items-center border-light-text dark:border-dark-text p-4 rounded">
			<div className="w-full">
				<h3 className="font-bold text-lg">{title}</h3>
				<p className="mb-4">{description}</p>
				<div className="flex flex-col space-y-2">
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
									{new Date(startDate).toLocaleDateString()}
								</p>
							)}
							{endDate && (
								<p>
									<span className="font-bold">End Date</span>:
									{new Date(endDate).toLocaleDateString()}
								</p>
							)}
						</div>
					</span>
				</div>
			</div>
			<div className="flex flex-col items-end font-bold text-sm">
				<button>Complete</button>
				<button onClick={(e) => handleSchedule(e, id)}>Schedule</button>
				<button>Edit</button>
				<button>Delete</button>
			</div>
		</div>
	);
};

export default Promotion;
