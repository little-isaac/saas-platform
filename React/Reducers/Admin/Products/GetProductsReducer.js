const GetProductsReducer = (
	state = {
		TableHeader: ["Product", "Type", "Vendor", "Action"],
		TableData: { data:[] }
	},
	action
) => {
	switch (action.type) {
		case "SET_ALL_PRODUCTS":
			state = {
				...state,
				TableData: action.payload
			};
			break;
		case "REMOVE_PRODUCT":
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

export default GetProductsReducer;
