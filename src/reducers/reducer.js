const INIT_STATE = {
    isFieldValid: false,
    isFieldFocused: false,
    isFieldPristine: true,
    validVatNumberInputted: null
};

function reducer (state = INIT_STATE, action) {
    switch (action.type) {
        case 'FORM_FIELD_FOCUSED':
            return {
                ...state,
                isFieldFocused: true,
                isFieldPristine: false,
            };

        case 'FORM_FIELD_BLURRED':
            return {
                ...state,
                isFieldFocused: false,
            };

        case 'FORM_FIELD_VALIDATED':
            return {
                ...state,
                isFieldValid: true,
                validVatNumberInputted: action.payload,
            };

        case 'FORM_FIELD_INVALIDATED':
            return {
                ...state,
                isFieldValid: false,
                validVatNumberInputted: null,
            };

        default:
            return state;
    }
}

export default reducer;
