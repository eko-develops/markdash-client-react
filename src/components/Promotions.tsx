import Promotion from './Promotion';
import { IPromotionsProps } from '../types';

const Promotions = ({ promotions, handleSchedule }: IPromotionsProps) => {
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
							/>
						</li>
					))}
			</div>
		</div>
	);
};

export default Promotions;
