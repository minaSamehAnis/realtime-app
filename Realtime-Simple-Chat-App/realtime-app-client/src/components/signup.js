function Signup() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 to-blue-700 flex items-center justify-center">
      <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">Sign Up</h1>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 mb-4 bg-white bg-opacity-20 rounded text-white placeholder-gray-300"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 bg-white bg-opacity-20 rounded text-white placeholder-gray-300"
        />
        <button className="w-full bg-green-600 p-3 rounded text-white font-bold hover:bg-green-800 transition">
          Create Account
        </button>
        <div className="mt-4 text-center">
          <p className="text-white">
            Already have an account?{' '}
            <a href="/login" className="text-green-300 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
