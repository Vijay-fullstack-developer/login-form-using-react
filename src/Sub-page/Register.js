import React, { useState } from "react";
import Header from "./Header";

export default function Register() {
    const [formData, setFormData] = useState({
        firstname: "",
        secondname: "",
        email: "",
        areaCode: "",
        phoneNumber: "",
        street: "",
        street2: "",
        city: "",
        state: "",
        postalCode: "",
        country: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        if (errors[id]) {
            setErrors({ ...errors, [id]: null }); // Clear error on change
        }
    };

    const validateForm = () => {
        let newErrors = {};
        const { firstname, secondname, email, areaCode, phoneNumber, street, street2, city, state, postalCode, country } = formData;

        if (!firstname) newErrors.firstname = "First name is required.";
        if (!secondname) newErrors.secondname = "Second name is required.";
        if (!email) newErrors.email = "Email is required.";
        if (!areaCode) newErrors.areaCode = "Area code is required.";
        if (!phoneNumber) newErrors.phoneNumber = "Phone number is required.";
        if (!street) newErrors.street = "Street address is required.";
        if (!street2) newErrors.street2 = "Street2 address is required"
        if (!city) newErrors.city = "City is required.";
        if (!state) newErrors.state = "State/Province is required.";
        if (!postalCode) newErrors.postalCode = "Postal/Zip code is required.";
        if (!country) newErrors.country = "Country is required.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if no errors
    };

    const handleSubmit = () => {
        if (validateForm()) {
            // Handle form submission logic here
            console.log("Form submitted successfully", formData);
            window.location.reload();
        }
    };

    return (
        <>
            <Header />
            <div className="styles">
                <h1 className="header">Register Form</h1>
                <div className="main-class" style={{ display: 'grid', justifyContent: 'center' }}>
                    <div className="color">
                        <span>Name</span>
                        <div className="container" style={{ display: 'flex' }}>
                            <div style={{ marginRight: '20px' }}>
                                <input
                                    id="firstname"
                                    placeholder="First name"
                                    value={formData.firstname}
                                    onChange={handleChange}
                                    style={{ borderColor: errors.firstname ? 'red' : 'black' }}
                                />
                            </div>
                            <div>
                                <input
                                    id="secondname"
                                    placeholder="Second name"
                                    value={formData.secondname}
                                    onChange={handleChange}
                                    style={{ borderColor: errors.secondname ? 'red' : 'black' }}
                                />
                            </div>
                        </div>

                        <label htmlFor="email">E-mail</label>
                        <div className="email-input container">
                            <input
                                className="input-mail"
                                id="email"
                                placeholder="ex:myname@gmail.com"
                                value={formData.email}
                                onChange={handleChange}
                                style={{ borderColor: errors.email ? 'red' : 'black' }}
                            />
                        </div>

                        <span>Phone Number:</span>
                        <div className="margin-bottom container" style={{ display: 'flex' }}>
                            <div className="area-data" style={{ marginRight: '20px' }}>
                                <input
                                    id="areaCode"
                                    placeholder="Area Code"
                                    value={formData.areaCode}
                                    onChange={handleChange}
                                    style={{ borderColor: errors.areaCode ? 'red' : 'black' }}
                                />
                            </div>
                            <div>
                                <input
                                    id="phoneNumber"
                                    placeholder="Phone Number"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    style={{ borderColor: errors.phoneNumber ? 'red' : 'black' }}
                                />
                            </div>
                        </div>

                        <span>Address:</span>
                        <div className="margin-bottom container" style={{ display: 'flex' }}>
                            <input
                                className="street"
                                placeholder="Street address"
                                id="street"
                                value={formData.street}
                                onChange={handleChange}
                                style={{ marginRight: '20px', borderColor: errors.street ? 'red' : 'black' }}
                            />
                            <input
                                className="street2"
                                placeholder="Street address Line 2"
                                id="street2"  
                                value={formData.street2}
                                onChange={handleChange}
                                style={{   borderColor: errors.street ? 'red' : 'black' }}
                            />
                        </div>

                        <div className="main container" style={{ display: 'flex' }}>
                            <div className="city" style={{ marginRight: '20px' }}>
                                <input
                                    id="city"
                                    placeholder="City"
                                    value={formData.city}
                                    onChange={handleChange}
                                    style={{ borderColor: errors.city ? 'red' : 'black' }}
                                />
                            </div>
                            <div>
                                <input
                                    id="state"
                                    placeholder="State/Province"
                                    value={formData.state}
                                    onChange={handleChange}
                                    style={{ borderColor: errors.state ? 'red' : 'black' }}
                                />
                            </div>
                        </div>

                        <div className="main container" style={{ display: 'flex' }}>
                            <div className="city" style={{ marginRight: '20px' }}>
                                <input
                                    id="postalCode"
                                    placeholder="Postal/Zip Code"
                                    value={formData.postalCode}
                                    onChange={handleChange}
                                    style={{ borderColor: errors.postalCode ? 'red' : 'black' }}
                                />
                            </div>
                            <div>
                                <input
                                    id="country"
                                    placeholder="Country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    style={{ borderColor: errors.country ? 'red' : 'black' }}
                                />
                            </div>
                        </div>

                        <div className="submit-btn">
                            <button type="button" id="click-button" onClick={handleSubmit}>
                                Submit
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
