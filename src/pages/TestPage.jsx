export default function TestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Tailwind Test</h1>
        <p className="text-gray-600 mb-6">
          If you can see this styled properly, Tailwind CSS is working!
        </p>
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
          Test Button
        </button>
        <div className="mt-4 grid grid-cols-3 gap-2">
          <div className="h-8 bg-red-500 rounded"></div>
          <div className="h-8 bg-green-500 rounded"></div>
          <div className="h-8 bg-yellow-500 rounded"></div>
        </div>
      </div>
    </div>
  )
}