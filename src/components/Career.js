function Career() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="mt-12 bg-white p-6 sm:pt-0 md:p-10 lg:p-12 xl:p-16 border border-gray-300 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4">
          Apply for
        </h3>

        <div className="mb-4">
          <label className="text-base sm:text-lg font-medium mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="text-base sm:text-lg font-medium mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="text-base sm:text-lg font-medium mb-2">
            Upload Resume
          </label>
          <input
            type="file"
            id="resume"
            name="resume"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>

        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 mb-0"
        >
          Submit Application
        </button>
      </div>
    </div>
  );
}

export default Career;
