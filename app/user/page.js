import { CiEdit } from "react-icons/ci";

const UserInfo = () => {
  return (
    <>
      <form className="mx-auto bg-white p-8 shadow-md rounded grid md:grid-cols-2 grid-cols-1 gap-6 items-center border border-gray-200">
        <h2 className="text-2xl">Account Details</h2>
        <div className="col-span-1 md:place-self-end">
          <button
            className="border border-gray-200 px-6 py-2 flex items-center gap-2 font-semibold"
            type="button"
          >
            Edit{" "}
            <span>
              <CiEdit />
            </span>
          </button>
        </div>

        <hr className="md:col-span-2" />

        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="fullName"
          >
            Full Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="fullName"
            type="text"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phoneNumber"
          >
            Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phoneNumber"
            type="tel"
            placeholder="01XXXXXXXXX"
          />
        </div>

        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email address"
          />
        </div>

        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="gender"
          >
            Gender
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="gender"
          >
            <option value="">Choose a Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </form>

      <form className="mx-auto bg-white p-8 shadow-md rounded grid md:grid-cols-2 grid-cols-1 gap-6 mt-4 items-center border border-gray-200">
        <h2 className="text-2xl">Change Password</h2>
        <div className="md:place-self-end">
          <button
            className="border border-gray-200 px-6 py-2 flex items-center gap-2 font-semibold"
            type="button"
          >
            Edit
            <span>
              <CiEdit />
            </span>
          </button>
        </div>

        <hr className="md:col-span-2" />

        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Current Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="password"
            placeholder="Enter your current password"
          />
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            New Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="password"
            placeholder="Enter your New Password"
          />
        </div>
      </form>
    </>
  );
};

export default UserInfo;
