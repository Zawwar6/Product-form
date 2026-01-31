import React from 'react'

const ProductForm = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center p-6">
      
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8">
        
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          Speaker Management
        </h2>
        <p className="text-gray-500 text-center mb-8">
          Add speaker details for your event
        </p>

        {/* Form */}
        <form className="space-y-6">

          {/* Speaker Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Speaker Name
            </label>
            <input
              type="text"
              placeholder="Enter speaker name"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="speaker@email.com"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* Phone + Topic */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="+92 300 1234567"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Speaking Topic
              </label>
              <input
                type="text"
                placeholder="AI, Leadership, Tech"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

          </div>

          {/* Experience */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Experience Level
            </label>
            <select
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            >
              <option>Select experience</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Expert</option>
            </select>
          </div>

          {/* Speaker Image */}
<div>
  <label className="block text-sm font-medium text-gray-700 mb-1">
    Speaker Photo
  </label>

  <div className="flex items-center justify-center w-full">
    <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-indigo-300 rounded-xl cursor-pointer bg-indigo-50 hover:bg-indigo-100 transition">
      
      <svg
        className="w-10 h-10 text-indigo-400 mb-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7 16V4a1 1 0 011-1h8a1 1 0 011 1v12M7 16l-2 2m2-2l2 2m6-2l2 2m-2-2l-2 2"
        />
      </svg>

      <p className="text-sm text-gray-600">
        <span className="font-semibold">Click to upload</span> or drag & drop
      </p>
      <p className="text-xs text-gray-500 mt-1">
        PNG, JPG (max 5MB)
      </p>

      <input
        type="file"
        accept="image/*"
        className="hidden"
      />
    </label>
  </div>
</div>


          {/* Bio */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Speaker Bio
            </label>
            <textarea
              rows="4"
              placeholder="Write a short bio about the speaker..."
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 pt-4">
            <button
              type="reset"
              className="px-6 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
            >
              Reset
            </button>

            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition shadow-md"
            >
              Save Speaker
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default ProductForm
