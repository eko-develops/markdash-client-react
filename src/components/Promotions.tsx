import Promotion from './Promotion';

const dummyPromotions = [
	{
		id: 1,
		title: 'Weekly Wednesdays',
		description: 'Get 10% off every Wednesday on all products',
		date_posted: new Date().toLocaleString(),
		scheduled: false,
	},
	{
		id: 2,
		title: 'Funday Sundays!',
		description: 'Everything 15% off in-store only today!',
		date_posted: new Date().toLocaleString(),
		scheduled: false,
	},
	{
		id: 3,
		title: 'Fresh Fridays!',
		description: 'All new products 10% off in-store only today!',
		date_posted: new Date().toLocaleString(),
		scheduled: true,
	},
];

const Promotions = () => {
	return (
		<div>
			<h1 className="text-2xl font-bold mb-4">Promotions</h1>
			<div className="">
				{dummyPromotions &&
					dummyPromotions.map((promotion, index) => (
						<li className="list-none" key={index}>
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
