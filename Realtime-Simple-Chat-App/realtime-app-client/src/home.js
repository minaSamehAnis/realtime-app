function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 to-purple-700 flex items-center justify-center">
      <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-4xl text-center">
        <h1 className="text-5xl font-bold text-white mb-6">Welcome to the Home Page</h1>
        <p className="text-white text-lg">
          This is the main landing page of your app. Navigate to Login or Sign Up to get started.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a href="/login" className="bg-blue-600 px-6 py-3 rounded text-white font-bold hover:bg-blue-800 transition">
            Login
          </a>
          <a href="/signup" className="bg-green-600 px-6 py-3 rounded text-white font-bold hover:bg-green-800 transition">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
