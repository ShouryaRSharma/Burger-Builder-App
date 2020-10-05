import React, { Component } from 'react';

import './ContactData.scss';

class ContactData extends Component {
    state = {
        name: null,
        email: null,
        address: {
            street: null,
            postCode: null
        }
    }

    render() {
        return (
            <div className="ContactData">
                <h4>Enter your Contact Data</h4>
                <form>
                    <div className="mb-3">
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="inputPassword" placeholder="Name"/>
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="inputAddress" placeholder="Address"/>
                    </div>
                    <button type="submit" className="btn btn-dark">Submit</button>
                </form>
            </div>
        );
    }
}

export default ContactData;