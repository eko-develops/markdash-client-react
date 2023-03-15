interface IPromotionActionsProps {
	id: number;
	handleSchedule: (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
		id: number
	) => void;
	handleDelete: (id: number) => void;
}
const PromotionActions = ({
	id,
	handleSchedule,
	handleDelete,
}: IPromotionActionsProps) => {
	return (
		<>
			<button>Complete</button>
			<button onClick={(e) => handleSchedule(e, id)}>Schedule</button>
			<button>Edit</button>
			<button onClick={() => handleDelete(id)}>Delete</button>
		</>
	);
};

export default PromotionActions;
