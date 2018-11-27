const CreateProductReducer = (
    state = {
        products: "",
        product: "",
        is_taxable: false,
        is_shipping_require: false,
        OpenOptionsDialog: false,
        Option: []
    },
    action
) => {
    switch (action.type) {
        case "ADD_OPTION":
        state.Option.push(1);
            state = {
                ...state,
                Option:  state.Option
            };
            break;

        case "OPEN_OPTIONS_DIALOG":
            state = {
                ...state,
                OpenOptionsDialog: !state.OpenOptionsDialog
            };
            break;
        case "IS_TAXABLE":
            state = {
                ...state,
                is_taxable: !state.is_taxable
            };
            break;
        case "IS_SHIPPING_REQUIRE":
            state = {
                ...state,
                is_shipping_require: !state.is_shipping_require
            };
            break;
    }
    return state;
};

export default CreateProductReducer;
