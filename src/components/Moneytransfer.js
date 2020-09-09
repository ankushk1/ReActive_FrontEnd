import React, { useState } from 'react';
import { moneytransfer,isAuthenticated } from './helper/apicalls';


const Moneytransfer = () => {

  const [values, setValues] = useState({
    name: '',
    accountNo: '',
    amount: '',
    error: '',
    didRedirect: false,
    success:false
  });

  const { name, accountNo, amount, error,success } = values;

  const handleChange = (name) => (event) => {
    setValues({
      ...values,
      error: false,
      [name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({
      ...values,
      error: false,
      loading: true,
    });
    moneytransfer({
      name,
      accountNo,
      amount,
    })
      .then((data) => {
        if (data.error ===1) {
          setValues({
            ...values,
            error: data.message,
            loading: false,
            success: false
          });
        } else {
          setValues({
            ...values,
            didRedirect: true,
            success:true
          });
        }
      })
      .catch(console.log('request failed'));
  };

  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? '' : 'none' }}
          >
            Transfer Successfully completed
          </div>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? '' : 'none' }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };
  const transferForm = () => {
    return (
    <div>
        <h3 className="text-white mb-2">Transfer Money</h3>
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label className="text-light"> Payee Name </label>{' '}
              <input
                onChange={handleChange('name')}
                value={name}
                className="form-control"
                type="text"
              />
            </div>
            <div className="form-group">
              <label className="text-light"> Payee Account Number </label>{' '}
              <input
                onChange={handleChange('accountNo')}
                value={accountNo}
                className="form-control"
                type="text"
              />
            </div>
            <div className="form-group">
              <label className="text-light"> Amount </label>{' '}
              <input
                onChange={handleChange('amount')}
                value={amount}
                className="form-control"
                type="text"
              />
            </div>
            <button onClick={onSubmit} className="btn btn-info btn-lg">
              Transfer Money
            </button>
          </form>
        </div>
      </div>
      </div>
    );
  };

  const getuserInfo=()=>{
    const user=isAuthenticated();
    console.log(user.data.name)
    return(
    <div>
    <h4 className="text-white mb-2"><span className="badge badge-success mr-2">Name:</span>{user.data.name}</h4>
    <h4 className="text-white mb-2"><span className="badge badge-success mr-2">Email: </span>{user.data.email}</h4>
    <h4 className="text-white mb-2"><span className="badge badge-success mr-2">Account Number: </span>{user.data.accountNo}</h4>
    </div>
    )
  }
  return (

    <div>
    
      {getuserInfo()} 
      {transferForm()}
      {successMessage()}
      {errorMessage()}
    </div>
  );
};

export default Moneytransfer;
