export default function TestPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-primary">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-8">
            Test Page - Navigation Works! 🎉
          </h1>
          <p className="text-xl text-white/80 mb-8">
            If you can see this page, then the navigation and routing is working correctly.
          </p>
          <div className="bg-white/10 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Debug Info:</h2>
            <ul className="text-left text-white/90 space-y-2">
              <li>✅ Navbar is visible</li>
              <li>✅ Page routing works</li>
              <li>✅ App wrapper renders pages</li>
              <li>✅ Styling is applied correctly</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}