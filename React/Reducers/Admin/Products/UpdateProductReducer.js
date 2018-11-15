const UpdateProductReducer = (
    state = {
        products: "",
        product: {},
        accepts_marketing: false,
        tax_exempt: false
    },
    action
) => {
    switch (action.type) {
        case "SET_PRODUCT":
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

export default UpdateProductReducer;
