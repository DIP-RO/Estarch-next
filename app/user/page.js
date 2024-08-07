'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";

const UserInfo = () => {
  const [user, setUser] = useState({ mobile: '', fullName: '', email: '', gender: '' });
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {
    // Replace with actual mobile or user identifier
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/user-info/${user.mobile}`);
        setUser(response.data.user);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [user.mobile]); // Fetch data when user.mobile changes

  const handleChangePassword = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/user/change-password', {
        currentPassword,
        newPassword,
      });
      alert('Password changed successfully');
    } catch (error) {
      console.error('Error changing password:', error);
      alert('Error changing password');
    }
  };

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
            value={user.fullName}
            placeholder="Your full name"
            onChange={(e) => setUser({ ...user, fullName: e.target.value })}
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
            value={user.mobile}
            placeholder="01XXXXXXXXX"
            readOnly
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
            value={user.email}
            placeholder="Enter your email address"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
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
            value={user.gender}
            onChange={(e) => setUser({ ...user, gender: e.target.value })}
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
            htmlFor="currentPassword"
          >
            Current Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="currentPassword"
            type="password"
            placeholder="Enter your current password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="newPassword"
          >
            New Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="newPassword"
            type="password"
            placeholder="Enter your new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <button
          className="w-full py-2 bg-red-500 text-white font-bold rounded-md"
          onClick={handleChangePassword}
        >
          Change Password
        </button>
      </form>
    </>
  );
};

export default UserInfo;
