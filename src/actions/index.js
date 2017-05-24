import fetch from 'isomorphic-fetch';

const MINIMUM_VAT_EU_LENGTH = 8;

export const focusFormField = () => ({
    type: 'FORM_FIELD_FOCUSED',
});

export const blurFormField = () => ({
    type: 'FORM_FIELD_BLURRED',
});

export const performValidationCheck = vatNumber => dispatch => {
    if (vatNumber.length < MINIMUM_VAT_EU_LENGTH) {
        return dispatch({
            type: 'FORM_FIELD_INVALIDATED',
            payload: vatNumber,
        });
    }

    return fetch(`http://www.apilayer.net/api/validate?access_key=e9d4c0845bf3bd7a195a7e7f5730e252&vat_number=${vatNumber}`)
        .then(response => response.json())
        .then((json) => {
            if (json.valid) {
                return dispatch({
                    type: 'FORM_FIELD_VALIDATED',
                    payload: vatNumber,
                });
            }

            return dispatch({
                type: 'FORM_FIELD_INVALIDATED',
                payload: vatNumber,
            })
        });
};
