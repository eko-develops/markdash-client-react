import Promotion from './Promotion';

interface Promotion {
	id: number;
	title: string;
	description: string;
	date_posted: string;
	scheduled: boolean;
}

interface PromotionsProps {
	promotions: Promotion[] | null;
}

const Promotions = ({ promotions }: PromotionsProps) => {
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
								date_posted={promotion.date_posted}
								scheduled={promotion.scheduled}
							/>
						</li>
					))}
			</div>
		</div>
	);
};

export default Promotions;
