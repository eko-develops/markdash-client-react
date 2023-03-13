const PromotionForm = () => {
	return (
		<div className="mb-10">
			<h2 className="text-xl font-bold mb-4">Add a New Promotion</h2>
			<form className="flex flex-col">
				<label className="font-bold text-lg">Title</label>
				<input
					required
					max={30}
					className="border border-black/20 dark:text-light-text py-2 px-1 rounded mb-4"
				/>
				<label className="font-bold text-lg">Description</label>
				<textarea
					required
					maxLength={120}
					className="border border-black/20 dark:text-light-text py-2 px-1 rounded mb-4"
				/>
				<label className="font-bold text-lg">Scheduled For</label>
				<input
					required
					className="border border-black/20 dark:text-light-text py-2 px-1 rounded mb-4"
					value={new Date().toLocaleString()}
				/>
				<div className="flex">
					<button
						type="submit"
						className="bg-green-700 w-28 rounded py-2 text-white mr-auto"
					>
						Add
					</button>
					<button
						type="submit"
						className="bg-gray-500 w-28 rounded py-2 text-white mr-2"
					>
						Clear Fields
					</button>
					<button
						type="submit"
						className="bg-red-500 w-28 rounded py-2 text-white"
					>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
};

export default PromotionForm;
