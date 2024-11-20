function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center">
      <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">Login</h1>
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
        <button className="w-full bg-indigo-600 p-3 rounded text-white font-bold hover:bg-indigo-800 transition">
          Login
        </button>
        <div className="mt-4 text-center">
          <p className="text-white">
            Don't have an account?{' '}
            <a href="/signup" className="text-indigo-300 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
