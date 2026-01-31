import React from "react";

const ShowDetail = ({ speakers, setSpeakers }) => {
  const handleDelete = (index) => {
    const updatedSpeakers = [...speakers];
    updatedSpeakers.splice(index, 1);
    setSpeakers(updatedSpeakers);
  };

  const handleEdit = (index) => {
    alert(`Edit speaker at index ${index}`);
  };

  return (
    <div className="min-h-screen bg-indigo-50 p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Speaker Details
      </h2>

      <table className="w-full border-collapse bg-white shadow-md rounded-xl overflow-hidden">
        <thead className="bg-indigo-100">
          <tr>
            <th className="p-3 text-left">#</th>
            <th className="p-3 text-left">Photo</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Phone</th>
            <th className="p-3 text-left">Topic</th>
            <th className="p-3 text-left">Experience</th>
            <th className="p-3 text-left">Bio</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {speakers.length === 0 ? (
            <tr>
              <td colSpan="9" className="text-center p-4 text-gray-500">
                No speakers added yet.
              </td>
            </tr>
          ) : (
            speakers.map((spk, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50">
                <td className="p-3">{idx + 1}</td>
                <td className="p-3">
                  {spk.photo ? (
                    <img
                      src={spk.photo}
                      alt={spk.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  ) : (
                    "No Image"
                  )}
                </td>
                <td className="p-3">{spk.name}</td>
                <td className="p-3">{spk.email}</td>
                <td className="p-3">{spk.phone}</td>
                <td className="p-3">{spk.topic}</td>
                <td className="p-3">{spk.experience}</td>
                <td className="p-3">{spk.bio}</td>
                <td className="p-3 space-x-2">
                  <button
                    onClick={() => handleEdit(idx)}
                    className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(idx)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ShowDetail;
