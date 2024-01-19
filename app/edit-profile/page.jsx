import React from 'react';

const EditProfile = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-bold text-xl md:text-5xl mb-12">
          Edit Profile
        </h2>
        <form className="max-w-[900px] black-shadow mx-auto py-12 px-8 md:px-12 rounded-xl">
          {/* input group */}
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            {/* first name */}
            <div className=" flex flex-col gap-y-3 w-full md:w-1/2">
              <label htmlFor="fName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                placeholder="First Name"
                name="fName"
                className="input-with-shadow !py-4"
                required
              />
            </div>
            {/* last name */}
            <div className=" flex flex-col gap-y-3 w-full md:w-1/2">
              <label htmlFor="lName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Last Name"
                name="lName"
                className="input-with-shadow !py-4"
                required
              />
            </div>
          </div>

          {/* input group */}
          <div className="flex flex-col md:flex-row gap-4 justify-between mt-4">
            {/* email */}
            <div className=" flex flex-col gap-y-3 w-full md:w-1/2">
              <label htmlFor="email" className="form-label">
                Your Email
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input-with-shadow !py-4"
                required
              />
            </div>
            {/* Address */}
            <div className=" flex flex-col gap-y-3 w-full md:w-1/2">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                placeholder="Address"
                name="address"
                className="input-with-shadow !py-4"
                required
              />
            </div>
          </div>

          {/* input group */}
          <div className="flex flex-col md:flex-row gap-4 justify-between mt-4">
            {/* passport No */}
            <div className=" flex flex-col gap-y-3 w-full md:w-1/2">
              <label htmlFor="passportNo" className="form-label">
                Passport No
              </label>
              <input
                type="number"
                placeholder="Passport No"
                name="passportNo"
                className="input-with-shadow !py-4"
                required
              />
            </div>
            {/* nid No */}
            <div className=" flex flex-col gap-y-3 w-full md:w-1/2">
              <label htmlFor="nidNo" className="form-label">
                NID No
              </label>
              <input
                type="number"
                placeholder="NID No"
                name="nidNo"
                className="input-with-shadow !py-4"
                required
              />
            </div>
          </div>

          {/* input group */}
          <div className="flex flex-col md:flex-row gap-4 justify-between mt-4">
            {/* password*/}
            <div className=" flex flex-col gap-y-3 w-full md:w-1/2">
              <label htmlFor="password" className="form-label">
                Change Password
              </label>
              <input
                type="text"
                placeholder="Change password"
                name="password"
                className="input-with-shadow !py-4"
                required
              />
            </div>
            {/* confirm password*/}
            <div className=" flex flex-col gap-y-3 w-full md:w-1/2">
              <label htmlFor="conPass" className="form-label">
                Confirm New Password
              </label>
              <input
                type="text"
                placeholder="Confirm New password"
                name="conPass"
                className="input-with-shadow !py-4"
                required
              />
            </div>
          </div>

          <div className="mt-12">
            <button
              className={`bg-primary hover:bg-opacity-90 text-white font-base uppercase font-bold py-3 px-12 hover:translate-y-2 duration-500 rounded cursor-pointer`}
              type="submit"
            >
              Edit Info
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
