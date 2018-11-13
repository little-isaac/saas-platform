const GetReducer = (
	state = {
		TableHeader: ["Product", "Type", "Vendor", "Action"],
		TableData: { data:[] }
	},
	action
) => {
	switch (action.type) {

		case "SET_ALL":
			state = {
				...state,
				TableData: action.payload
			};
			break;
		case "REMOVE_SINGLE":
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

export default GetReducer;