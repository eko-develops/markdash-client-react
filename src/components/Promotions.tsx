import Promotion from './Promotion/Promotion';
import { IPromotionsProps } from '../types';

const Promotions = ({
	promotions,
	handleSchedule,
	handleDelete,
}: IPromotionsProps) => {
	return (
		<div>
			<h1 className="text-2xl font-bold mb-4">Promotions</h1>
			<div className="">
				{promotions &&
					promotions.map((promotion, index) => (
						<li className="list-none" key={index}>
							<Promotion
								id={promotion.id}
								title={promotion.title}
								description={promotion.description}
								datePosted={promotion.date_posted}
								startDate={promotion.start_date}
								endDate={promotion.end_date}
								scheduled={promotion.scheduled}
								handleSchedule={handleSchedule}
								handleDelete={handleDelete}
							/>
						</li>
					))}
			</div>
		</div>
	);
};

export default Promotions;
