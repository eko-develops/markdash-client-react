import { useState, useEffect } from 'react';
import { IconContext } from '@phosphor-icons/react';

import Header from './components/Header';
import Promotions from './components/Promotions';
import PromotionForm from './components/PromotionForm';

import { IPromotion, IFormData } from './types';

function App() {
	const [theme, setTheme] = useState('dark');
	const [promotions, setPromotions] = useState<IPromotion[] | null>(null);
	const [showPromotionForm, setShowPromotionForm] = useState(false);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [formData, setFormData] = useState<IFormData>({
		title: '',
		description: '',
		start_date: '',
		end_date: '',
		user_id: 1,
	});

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);

	useEffect(() => {
		setTimeout(() => {
			fetch('http://localhost:5000/promotions', {
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
			})
				.then((res) => res.json())
				.then((data) => {
					setError(false);
					setLoading(false);
					setPromotions(data.promotions);
				})
				.catch((err) => {
					setLoading(false);
					setError(true);
					if (
						err instanceof TypeError &&
						err.message.includes('NetworkError')
					) {
						console.error('Server may not be running: ', err);
					} else {
						console.error(err);
					}
				});
		}, 1000);
	}, []);

	const handleThemeChange = () => {
		if (theme === 'dark') {
			setTheme('light');
		} else {
			setTheme('dark');
		}
	};

	const handleSchedule = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
		id: number
	) => {
		e.preventDefault();

		fetch('http://localhost:5000/promotion/schedule', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ id }),
		})
			.then((res) => res.json())
			.then((data) => {
				const promotionCopy = promotions!.slice();
				const scheduledPromotionId = data.scheduled_promotion.id;
				for (const promotion of promotionCopy) {
					if (promotion.id === scheduledPromotionId) {
						promotion.scheduled
							? (promotion.scheduled = false)
							: (promotion.scheduled = true);
					}
				}
				setPromotions(promotionCopy);
			})
			.catch((err) => console.log(err));
	};

	const handleAdd = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();

		fetch('http://localhost:5000/promotion', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		})
			.then((res) => res.json())
			.then((data) => {
				const addedPromotion = {
					date_posted: data.new_promotion.date_posted,
					description: data.new_promotion.description,
					end_date: data.new_promotion.end_date,
					id: data.new_promotion.id,
					scheduled: data.new_promotion.scheduled,
					start_date: data.new_promotion.start_date,
					title: data.new_promotion.title,
				};

				if (promotions) {
					setPromotions([addedPromotion, ...promotions]);
				} else {
					setPromotions([addedPromotion]);
				}
			})
			.catch((err) => {
				if (err instanceof TypeError && err.message.includes('NetworkError')) {
					console.error('Server may not be running: ', err);
				} else {
					console.error(err);
				}
			});
	};

	const handleDelete = (id: number) => {
		fetch('http://localhost:5000/promotion', {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ promotion_id: id }),
		})
			.then((res) => res.json())
			.then((data) => {
				const { id } = data.deleted_promo;
				const filteredPromotions = promotions!.filter(
					(promotion) => promotion.id !== id
				);
				setPromotions(filteredPromotions);
			})
			.catch((err) => {
				if (err instanceof TypeError && err.message.includes('NetworkError')) {
					console.error('Server may not be running: ', err);
				} else {
					console.error(err);
				}
			});
	};

	return (
		<IconContext.Provider
			value={{
				size: '24',
			}}
		>
			<div className="min-h-screen pb-44 bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text transition duration-500 ease-in-out">
				<div className="max-w-5xl px-4 mx-auto">
					<Header
						handleThemeChange={handleThemeChange}
						theme={theme}
						setShowPromotionForm={setShowPromotionForm}
						showPromotionForm={showPromotionForm}
					/>

					{showPromotionForm && (
						<PromotionForm
							setShowPromotionForm={setShowPromotionForm}
							handleAdd={handleAdd}
							formData={formData}
							setFormData={setFormData}
						/>
					)}

					<Promotions
						promotions={promotions}
						handleSchedule={handleSchedule}
						handleDelete={handleDelete}
					/>

					{loading && <h2>Loading..</h2>}
					{error && <h2>Error fetching resources.</h2>}
					{promotions != null && promotions.length === 0 && (
						<h2>No promotions to load.</h2>
					)}
				</div>
			</div>
		</IconContext.Provider>
	);
}

export default App;
