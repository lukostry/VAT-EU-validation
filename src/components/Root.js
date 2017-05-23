import React from 'react';
import { Provider } from 'react-redux';
import Form from '../containers/Form';

function Root({ store }) {
    return (
        <Provider store={store}>
            <Form />
        </Provider>
    );
}

export default Root;
