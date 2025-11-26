export default function SimpleTest() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f3f4f6' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
        Fallback Styling Test
      </h1>
      
      <div className="bg-blue-500 text-white p-4 rounded-lg mb-4">
        This should have Tailwind styling (blue background, white text, padding, rounded corners)
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="bg-red-500 h-16 rounded"></div>
        <div className="bg-green-500 h-16 rounded"></div>
        <div className="bg-yellow-500 h-16 rounded"></div>
      </div>
      
      <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-colors">
        Tailwind Button
      </button>
      
      <div style={{ marginTop: '20px', padding: '16px', backgroundColor: 'white', borderRadius: '8px' }}>
        <p>If the elements above don't have proper styling, Tailwind isn't loading.</p>
        <p>This text uses inline styles as fallback.</p>
      </div>
    </div>
  )
}