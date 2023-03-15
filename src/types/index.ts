export interface IPromotionFormProps {
	setShowPromotionForm: React.Dispatch<React.SetStateAction<boolean>>;
	handleAdd: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	formData: IFormData;
	setFormData: React.Dispatch<React.SetStateAction<IFormData>>;
	defaultFormData: IFormData;
}

export interface IHeaderProps {
	theme: string;
	setTheme: React.Dispatch<React.SetStateAction<string>>;
	setShowPromotionForm: React.Dispatch<React.SetStateAction<boolean>>;
	showPromotionForm: boolean;
}

export interface INavbarProps {
	setShowPromotionForm: React.Dispatch<React.SetStateAction<boolean>>;
	showPromotionForm: boolean;
}

export interface IPromotionProps {
	id: number;
	title: string;
	description: string;
	datePosted: string;
	endDate: string;
	startDate: string;
	scheduled: boolean;
	handleSchedule: (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
		id: number
	) => void;
	handleDelete: (id: number) => void;
}

export interface IPromotion {
	id: number;
	title: string;
	description: string;
	date_posted: string;
	start_date: string;
	end_date: string;
	scheduled: boolean;
}

export interface IPromotionsProps {
	promotions: IPromotion[] | null;
	handleSchedule: (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
		id: number
	) => void;
	handleDelete: (id: number) => void;
}

export interface IFormData {
	title: string;
	description: string;
	start_date: string;
	end_date: string;
	user_id: number;
}

export interface IPromotionFooterProps {
	datePosted: string;
	startDate: string;
	endDate: string;
	scheduled: boolean;
}

export interface IPromotionContentProps {
	title: string;
	description: string;
}

export interface IThemeToggleProps {
	theme: string;
	setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export interface IPromotionFormLabelProps {
	title: string;
}

export interface IPromotionFormInputProps {
	value: string;
	name: string;
	max?: number;
	type?: string;
	onChange: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
}

export interface IPromotionFormActionsProps {
	handleAdd: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	setFormData: React.Dispatch<React.SetStateAction<IFormData>>;
	defaultFormData: IFormData;
	setShowPromotionForm: React.Dispatch<React.SetStateAction<boolean>>;
}
