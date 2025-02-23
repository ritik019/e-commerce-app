import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Profile = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">My Profile</h2>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <p className="text-gray-900">{user.name}</p>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <p className="text-gray-900">{user.email}</p>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Role
              </label>
              <p className="text-gray-900 capitalize">{user.role}</p>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <Link
              to="/orders"
              className="block w-full bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700 transition-colors"
            >
              View My Orders
            </Link>
            {user.role === 'admin' && (
              <Link
                to="/admin/dashboard"
                className="block w-full bg-gray-800 text-white text-center py-2 rounded hover:bg-gray-900 transition-colors"
              >
                Admin Dashboard
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
