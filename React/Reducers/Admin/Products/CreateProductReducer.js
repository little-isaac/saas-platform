const CreateProductReducer = (
    state = {
        products: "",
        product: "",
        is_taxable: false,
        is_shipping_require: false
    },
    action
) => {
    switch (action.type) {
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
