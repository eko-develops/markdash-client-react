import { useState } from 'react';
import { IPromotionContentProps } from '../../types';

const PromotionContent = ({
	title,
	description,
	editing,
}: IPromotionContentProps) => {
	const [titleValue, setTitleValue] = useState(title);
	const [descriptionValue, setDescriptionValue] = useState(description);

	const handleTitleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTitleValue(e.target.value);
	};

	const handleDescriptionChange = (
		e: React.ChangeEvent<HTMLTextAreaElement>
	) => {
		setDescriptionValue(e.target.value);
	};

	return (
		<>
			{editing ? (
				<div className="flex flex-col text-light-text pr-4">
					<input
						type="text"
						value={titleValue}
						onChange={handleTitleInputChange}
						className="font-bold text-lg mb-2 rounded px-2"
					/>
					<textarea
						value={descriptionValue}
						onChange={handleDescriptionChange}
						className="mb-4 rounded px-2"
					/>
				</div>
			) : (
				<>
					<h3 className="font-bold mb-2 text-lg">{title}</h3>
					<p className="mb-4">{description}</p>
				</>
			)}
		</>
	);
};

export default PromotionContent;
