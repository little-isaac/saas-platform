const GetAddressReducer = (
	state = {
		CurrentCountry: 1,
		CurrentState: "",
		Countries: [],
		States: []
	},
	action
) => {
	switch (action.type) {
		case "SET_CURRENT_COUNTRY":
			state = {
				...state,
				CurrentCountry: action.payload
			};
			break;
		case "SET_COUNTRIES":
			state = {
				...state,
				Countries: action.payload
			};
			break;
		case "SET_STATES":
			state = {
				...state,
				States: action.payload
			};
			break;
	}
	return state;
};

export default GetAddressReducer;
