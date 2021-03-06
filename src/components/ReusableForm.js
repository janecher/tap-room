import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <div className ="form-group">
          <label>Name</label>
          <input className="form-control"
            type='text'
            name='name'
          />
        </div>
        <div className="form-group">
          <label>Brand</label>
          <input className="form-control"
            type='text'
            name='brand'
          />
        </div>
        <div className="form-group">
          <label>Flavor</label>
          <input className="form-control"
            type='text'
            name='flavor'
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input className="form-control"
            type='text'
            name='price'
          />
        </div>
        <button type='submit' className="btn btn-primary">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;
