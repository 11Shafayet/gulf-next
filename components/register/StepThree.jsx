'use client';

import { useState } from 'react';
import {
  CountryField,
  StateField,
  VisitorAPIComponents,
} from 'react-country-state-fields';
import { FaCheck, FaInfo, FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const StepThree = ({ setActiveStep }) => {
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConPassword, setShowConPassword] = useState(false);
  const [country, setCountry] = useState({});
  const [state, setState] = useState({});
  const [infoVisible, setInfoVisible] = useState(false);
  const visitorApiPrjectId = 'hxKLiB97gpsMzGdjwiMc';

  const handleThirdStep = (e) => {
    e.preventDefault();

    if (password && conPassword && country && state) {
      if (password === conPassword) {
        setActiveStep(4);
      } else {
        console.log('Password Doesnot Match!');
      }
    } else {
      console.log('Please Fill All The Fields');
    }
  };

  return (
    <form
      onSubmit={handleThirdStep}
      className="register_step_three text-center max-w-[555px] mx-auto bg-white bg-opacity-10 p-4 md:p-12 rounded-md backdrop-blur-md mt-6"
    >
      <h4 className="text-2xl font-bold mb-6 text-white">
        Please Fill Up the below Fields!
      </h4>
      {/* password */}
      <div className="text-start">
        <label htmlFor="password">
          Your Password <span className="text-primary">*</span>
        </label>
        <div className="relative flex items-center gap-x-2">
          <input
            required
            name="password"
            placeholder="Enter Your Password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-with-shadow w-full my-2 !py-4 !pr-12 grow"
          />
          <div className="relative z-[111]">
            <div
              className="cursor-pointer bg-white w-6 h-6 rounded-full flex justify-center items-center hover:text-white hover:bg-primary duration-500"
              onClick={() => setInfoVisible((prev) => !prev)}
            >
              <FaInfo />
            </div>
            {infoVisible && (
              <div className="absolute top-[180%] right-0 p-4 rounded-md overflow-hidden bg-white w-[320px] z-[111]">
                <ul className="text-sm gap-y-2.5 flex flex-col">
                  <li className="flex items-center gap-x-1">
                    <FaCheck size={12} />
                    Password must contain an Uppercase letter
                  </li>
                  <li className="flex items-center gap-x-1">
                    <FaCheck size={12} />
                    Password must contain a lowercase letter
                  </li>
                  <li className="flex items-center gap-x-1">
                    <FaCheck size={12} />
                    Password must contain a special character
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div
            className="absolute right-10 top-1/2 -translate-y-1/2 cursor-pointer hover:text-primary"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? (
              <FaRegEye size={20} />
            ) : (
              <FaRegEyeSlash size={20} />
            )}
          </div>
        </div>
      </div>
      {/* confirm password */}
      <div className="text-start">
        <label htmlFor="conPass">
          Confirm Password <span className="text-primary">*</span>
        </label>
        <div className="relative">
          <input
            required
            name="conPass"
            placeholder="Confirm Your Password"
            type={conPassword ? 'text' : 'password'}
            value={conPassword}
            onChange={(e) => setConPassword(e.target.value)}
            className="input-with-shadow w-full my-2 !py-4"
          />
          <div
            className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer hover:text-primary"
            onClick={() => setShowConPassword((prev) => !prev)}
          >
            {showConPassword ? (
              <FaRegEye size={20} />
            ) : (
              <FaRegEyeSlash size={20} />
            )}
          </div>
        </div>
      </div>

      <VisitorAPIComponents
        projectId={visitorApiPrjectId}
        handleCountryChange={(countryObj) => setCountry(countryObj)}
        handleStateChange={(stateObj) => setState(stateObj)}
      >
        <CountryField label="Country/Territory"></CountryField>
        <StateField label="State/Province"></StateField>
      </VisitorAPIComponents>
      <div className="mt-4">
        <button
          type="submit"
          className="bg-primary text-white font-bold w-full py-3 uppercase hover:bg-opacity-90 rounded-md duration-300 mt-2"
        >
          Proceed To Step 4
        </button>
      </div>
    </form>
  );
};

export default StepThree;
