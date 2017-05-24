import React, { Component }  from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import './Form.css';

class Form extends Component {

    handleBlur (e) {
        this.props.blurFormField();

        const currentQuery = e.currentTarget.value;
        const { performValidationCheck, vatNumberInputted } = this.props;

        if (!vatNumberInputted) {
            return performValidationCheck(currentQuery);
        }

        if (currentQuery !== vatNumberInputted) {
            return performValidationCheck(currentQuery);
        }
    }

    render () {
        const { focusFormField, isFieldValid, isFieldFocused, isFieldPristine } = this.props;

        return (
            <div className="app-container">
                <form>
                    <div className="input-caption">
                        <span className={isFieldFocused ? 'focused-field' : null}>VAT</span>
                        <span className="required-field"> *</span>
                    </div>
                    <input
                        type="text"
                        className={!isFieldValid && !isFieldPristine ? 'invalid-field' : null}
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
    isFieldPristine: state.isFieldPristine,
    isFieldValid: state.isFieldValid,
    isFieldFocused: state.isFieldFocused,
    vatNumberInputted: state.vatNumberInputted,
});

export default connect(mapStateToProps, actions)(Form);
