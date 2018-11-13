const UpdateReducer = (
    state = {
        products: "",
        product: {},
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
            var product = action.payload;
            state = {
                ...state,
                product: product,
                accepts_marketing: (product.accepts_marketing) ? true : false,
                tax_exempt: (product.tax_exempt) ? true : false
            };
            break;
    }
    return state;
};

export default UpdateReducer;
