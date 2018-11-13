const UpdateReducer = (
    state = {
        customers: "",
        customer: {},
        accepts_marketing: false,
        tax_exempt: false
    },
    action
) => {
    switch (action.type) {
        case "ACCEPTS_MARKETING":
            state = {
                ...state,
                accepts_marketing: !state.accepts_marketing
            };
            break;
        case "TAX_EXEMPT":
            state = {
                ...state,
                tax_exempt: !state.tax_exempt
            };
            break;
        case "SET_SINGLE":
            var customer = action.payload;
            state = {
                ...state,
                customer: customer,
                accepts_marketing: (customer.accepts_marketing) ? true : false,
                tax_exempt: (customer.tax_exempt) ? true : false
            };
            break;
    }
    return state;
};

export default UpdateReducer;
