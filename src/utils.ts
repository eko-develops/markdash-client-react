export const getDateOnlyString = (date: string) => {
	return new Date(date).toLocaleDateString('en-CA', {
		timeZone: 'UTC',
	});
};

export const getFullDateTimeString = (date: string) => {
	return new Date(date).toLocaleString();
};

export const getValidInputDate = (dateString: string) => {
	const formatter = new Intl.DateTimeFormat(undefined, { timeZone: 'UTC' });

	const [month, day, year] = formatter.format(new Date(dateString)).split('/');
	const date = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
	return date;
};
