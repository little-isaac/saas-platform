const GetCustomersReducer = (
	state = {
		TableHeader: ["First Name", "Last Name", "Email", "Action"],
		TableData: { data:[] }
	},
	action
) => {
	switch (action.type) {

		case "SET_ALL_CUSTOMERS":
			state = {
				...state,
				TableData: action.payload
			};
			break;
		case "REMOVE_CUSTOMER":
			var all_data = state.TableData;
			all_data.data.splice(action.index, 1);
			state = {
				...state,
				TableData: all_data
			};
			break;
	}
	return state;
};

export default GetCustomersReducer;
