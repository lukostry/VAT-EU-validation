import React, { Component }  from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import './Form.css';

class Form extends Component {

    handleBlur (e) {
        this.props.blurFormField();

        const currentQuery = e.currentTarget.value;
        const { performValidationCheck, validVatNumberInputted } = this.props;

        if (!validVatNumberInputted) {
            return performValidationCheck(currentQuery);
        }

        if (currentQuery !== validVatNumberInputted) {
            return performValidationCheck(currentQuery);
        }
    }

    render () {
        const { focusFormField, isFieldValid, isFieldFocused } = this.props;

        return (
            <div className="app-container">
                <form>
                    <div className="input-caption">
                        <span className={isFieldFocused ? 'focused-field' : null}>VAT</span>
                        <span className="required-field"> *</span>
                    </div>
                    <input
                        type="text"
                        onBlur={(e) => this.handleBlur(e)}
                        onFocus={() => focusFormField()}
                    />
                    {!isFieldValid &&
                        <div className="error-message">Incorrect VAT Number.</div>
                    }
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isFieldValid: state.isFieldValid,
    isFieldFocused: state.isFieldFocused,
    validVatNumberInputted: state.validVatNumberInputted,
});

export default connect(mapStateToProps, actions)(Form);
