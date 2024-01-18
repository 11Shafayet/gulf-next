'use client';

import { useState } from 'react';

const StepFour = () => {
  const [dob, setDob] = useState('');
  const [id, setId] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [choosenFile, setChoosenFile] = useState('');

  const handleFourthStep = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleFourthStep}
      className="max-w-[555px] mx-auto bg-white bg-opacity-10 p-4 md:p-12 rounded-md backdrop-blur-md mt-6"
    >
      <h4 className="text-2xl font-bold mb-4 text-white text-center">
        Please Fill Up the below Fields!
      </h4>

      {/* dob */}
      <div className="my-4">
        <label htmlFor="dob" className="text-white">
          Date Of Birth<span className="text-primary">*</span>
        </label>
        <input
          type="date"
          name="dob"
          required
          className="input-with-shadow w-full my-2 !py-4"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
      </div>
      {/* id type */}
      <div>
        <select
          required
          name="idType"
          id="idType"
          className="input-with-shadow w-full my-2 !py-4"
        >
          <option className="capitalize text-lg" value="nid">
            NID
          </option>
          <option className="capitalize text-lg" value="passport">
            Passport
          </option>
          <option className="capitalize text-lg" value="passport">
            Internation Driving Licence
          </option>
        </select>
      </div>
      {/* id */}
      <div className="my-4">
        <label htmlFor="id" className="text-white">
          ID Number<span className="text-primary">*</span>
        </label>
        <input
          type="number"
          name="id"
          placeholder="4230937"
          required
          className="input-with-shadow w-full my-2 !py-4"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </div>
      {/* expiry date */}
      <div className="my-4">
        <label htmlFor="expiryDate" className="text-white">
          Date Of Birth<span className="text-primary">*</span>
        </label>
        <input
          type="date"
          name="expiryDate"
          required
          className="input-with-shadow w-full my-2 !py-4"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
        />
      </div>
      <div>
        <input
          type="file"
          className="file_upload_input"
          value={choosenFile}
          onChange={(e) => setChoosenFile(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <button
          type="submit"
          className="bg-primary text-white font-bold w-full py-3 uppercase hover:bg-opacity-90 rounded-md duration-300 mt-2"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default StepFour;
