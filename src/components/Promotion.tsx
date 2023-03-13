import { Check, X } from '@phosphor-icons/react';

export interface PromotionProps {
	title: string;
	description: string;
	date_posted: string;
	scheduled: boolean;
}

const Promotion = ({
	title,
	description,
	date_posted,
	scheduled,
}: PromotionProps) => {
	return (
		<div className="flex justify-between items-center border-light-text dark:border-dark-text p-4 rounded">
			<div className="w-full">
				<h3 className="font-bold text-lg">{title}</h3>
				<p className="mb-4">{description}</p>
				<div className="flex flex-col space-y-2">
					<span className="text-xs text-gray-500 dark:text-gray-200 transition duration-500 ease-in-out">
						Date Posted: {date_posted}
					</span>
					<span className="text-xs text-gray-500 dark:text-gray-200 flex items-center transition duration-500 ease-in-out">
						Scheduled
						{scheduled ? (
							<Check className="ml-2 text-green-800 " weight="bold" size={18} />
						) : (
							<X
								className="ml-2 text-red-600 dark:text-red-600"
								size={18}
								weight="bold"
							/>
						)}
					</span>
				</div>
			</div>
			<div className="flex flex-col items-end font-bold text-sm">
				<button>Complete</button>
				<button>Edit</button>
				<button>Delete</button>
			</div>
		</div>
	);
};

export default Promotion;
