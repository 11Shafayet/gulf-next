'use client';

import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const StepOne = ({ setActiveStep }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  //  step one submit
  const handleFirstStep = (e) => {
    e.preventDefault();

    console.log(firstName, lastName, email, phone);

    setActiveStep(2);
  };

  return (
    <form
      onSubmit={handleFirstStep}
      className="text-start max-w-[555px] mx-auto bg-white bg-opacity-10 p-4 md:p-12 rounded-md backdrop-blur-md mt-6"
    >
      {/* first name */}
      <div className="my-4">
        <label htmlFor="firstName" className="text-white">
          First Name<span className="text-primary">*</span>
        </label>
        <input
          type="text"
          name="firstName"
          required
          placeholder="John"
          className="input-with-shadow w-full my-2 !py-4"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      {/* last name */}
      <div className="my-4">
        <label htmlFor="lastName" className="text-white">
          Last Name <span className="text-primary">*</span>
        </label>
        <input
          type="text"
          name="lastName"
          required
          placeholder="Doe"
          className="input-with-shadow w-full my-2 !py-4"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      {/* email */}
      <div className="my-4">
        <label htmlFor="email" className="text-white">
          Your Email <span className="text-primary">*</span>
        </label>
        <input
          type="email"
          name="email"
          required
          placeholder="hello@gmail.com"
          className="input-with-shadow w-full my-2 !py-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      {/* phone */}
      <div className="my-4">
        <label htmlFor="phone" className="text-white ">
          Phone Number <span className="text-primary">*</span>
        </label>
        <PhoneInput
          required
          defaultCountry="BD"
          placeholder="Enter phone number"
          enableSearch
          value={phone}
          onChange={setPhone}
        />
      </div>

      <div className="mt-4">
        <button
          type="submit"
          className="bg-primary text-white font-bold w-full py-3 uppercase hover:bg-opacity-90 rounded-md duration-300 mt-2"
        >
          Proceed To Step 2
        </button>
      </div>
    </form>
  );
};

export default StepOne;
