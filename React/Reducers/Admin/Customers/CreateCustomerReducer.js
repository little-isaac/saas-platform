const CreateCustomerReducer = (
    state = {
        customers: "",
        customer: "",
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
    }
    return state;
};

export default CreateCustomerReducer;
