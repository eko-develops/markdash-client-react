import { useState, useEffect } from 'react';
import { Check, X } from '@phosphor-icons/react';
import { IPromotionFooterProps } from '../../types';
import {
	getDateOnlyString,
	getValidInputDate,
	getFullDateTimeString,
} from '../../utils';

const PromotionFooter = ({
	datePosted,
	startDate,
	endDate,
	scheduled,
	editing,
}: IPromotionFooterProps) => {
	const [editStartDate, setEditStartDate] = useState('');
	const [editEndDate, setEditEndDate] = useState('');

	useEffect(() => {
		if (editing) {
			setEditStartDate(getValidInputDate(startDate));
			setEditEndDate(getValidInputDate(endDate));
		} else {
			setEditStartDate('');
			setEditEndDate('');
		}
	}, [editing]);

	return (
		<div>
			<span className="text-xs text-gray-500 dark:text-gray-200 transition duration-500 ease-in-out">
				Date Posted: {getFullDateTimeString(datePosted)}
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
					<span className="font-bold">Start Date</span>:
					{startDate && (
						<p>
							{editing ? (
								<input
									type="date"
									value={editStartDate}
									className="rounded text-light-text"
									onChange={(e) => setEditStartDate(e.target.value)}
								/>
							) : (
								getDateOnlyString(startDate)
							)}
						</p>
					)}
					<span className="font-bold">End Date</span>:
					{endDate && (
						<p>
							{editing ? (
								<input
									type="date"
									value={editEndDate}
									className="rounded text-light-text"
									onChange={(e) => setEditEndDate(e.target.value)}
								/>
							) : (
								getDateOnlyString(endDate)
							)}
						</p>
					)}
				</div>
			</span>
		</div>
	);
};

export default PromotionFooter;
