const CustomersReducer = (
	state = {
		CustomersTableHead: ["First Name", "Last Name", "Email", "Action"],
		CustomersTableData: { data:[] }
	},
	action
) => {
	switch (action.type) {
		case "SET_CUSTOMERS":
		debugger;
			state = {
				...state,
				CustomersTableData: action.payload
			};
			break;
	}
	return state;
};

export default CustomersReducer;
