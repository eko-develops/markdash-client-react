import { IPromotionActionsProps } from '../../types';

const PromotionActions = ({
	id,
	handleSchedule,
	handleDelete,
	editing,
	setEditing,
}: IPromotionActionsProps) => {
	return (
		<>
			<button>Complete</button>
			<button onClick={(e) => handleSchedule(e, id)}>Schedule</button>
			<button onClick={(e) => setEditing(!editing)}>Edit</button>
			<button onClick={() => handleDelete(id)}>Delete</button>
		</>
	);
};

export default PromotionActions;
