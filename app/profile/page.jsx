import Image from 'next/image';
import banner from '../../public/abstract1.jpg';
import Link from 'next/link';

const userData = [
  {
    key: 'First Name',
    value: 'John',
  },
  {
    key: 'Last Name',
    value: 'John',
  },
  {
    key: 'NID NO',
    value: '974323354',
  },
  {
    key: 'Passport NO',
    value: '34590734290',
  },
  {
    key: 'Expiry Date',
    value: '11 March 2023',
  },
  {
    key: 'Country',
    value: 'Bangladesh',
  },
  {
    key: 'Email',
    value: 'hello@gmail.com',
  },
  {
    key: 'Address',
    value: 'Bay Area, San Francisco, CA',
  },
  {
    key: 'First Name',
    value: 'John',
  },
  {
    key: 'Last Name',
    value: 'John',
  },
  {
    key: 'NID NO',
    value: '974323354',
  },
  {
    key: 'Passport NO',
    value: '34590734290',
  },
  {
    key: 'Expiry Date',
    value: '11 March 2023',
  },
  {
    key: 'Country',
    value: 'Bangladesh',
  },
  {
    key: 'Email',
    value: 'hello@gmail.com',
  },
  {
    key: 'Address',
    value: 'Bay Area, San Francisco, CA',
  },
];
const Profile = () => {
  return (
    <div className="">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8 xl:gap-12 py-12">
          <div className="col-span-1 bg-white shadow-light p-4 xl:p-12 rounded-md text-center flex flex-col justify-center items-center">
            <Image
              src={banner}
              alt="banner"
              className="w-40 h-40 rounded-full object-cover mx-auto"
            />
            <h4 className="font-bold text-2xl mt-3">John Doe</h4>
            <p className="opacity-75">Bay Area, San Francisco, CA</p>
          </div>

          <div className="col-span-1 lg:col-span-3 bg-white shadow-light p-4 md:p-12 rounded-md">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mb-6">
              <h3 className="text-2xl md:text-3xl font-bold">
                Personal Informations:
              </h3>
              <Link
                href={`/edit-profile`}
                className="py-2.5 px-5 rounded-md text-white bg-primary hover:bg-opacity-90 duration-300"
              >
                Edit Info
              </Link>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-4">
              {userData.map((item, i) => {
                return (
                  <div className="flex items-start gap-x-2 my-2" key={i}>
                    <h4 className="font-semibold text-lg min-w-[150px] md:min-w-[250px]">
                      {item.key}:
                    </h4>
                    <h4 className="font-medium text-lg min-w-1/2 whitespace-normal">
                      {item.value}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
