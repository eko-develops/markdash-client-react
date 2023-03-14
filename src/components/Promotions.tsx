import Promotion, { IPromotion } from './Promotion';

interface IPromotionsProps {
	promotions: IPromotion[] | null;
}

const Promotions = ({ promotions }: IPromotionsProps) => {
	return (
		<div>
			<h1 className="text-2xl font-bold mb-4">Promotions</h1>
			<div className="">
				{promotions &&
					promotions.map((promotion) => (
						<li className="list-none" key={promotion.id}>
							<Promotion
								title={promotion.title}
								description={promotion.description}
								datePosted={promotion.date_posted}
								startDate={promotion.start_date}
								endDate={promotion.end_date}
								scheduled={promotion.scheduled}
							/>
						</li>
					))}
			</div>
		</div>
	);
};

export default Promotions;
