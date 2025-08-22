export default function QRCodePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        {/* Header Section */}
        <div className="mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-100 rounded-full mb-6">
            <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h2M4 4h4m4 16h4m0 0h2m-6 0v-2m0-8h2m-2-4h2M8 4h2m4 0h2"/>
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Share Your AI Summit Experience
          </h1>
          <p className="text-xl text-gray-600 max-w-xl mx-auto">
            Scan the QR code below to access our LinkedIn post template and share your thoughts about The AI Collective Delhi Summit!
          </p>
        </div>

        {/* QR Code Card */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden mb-8">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-6">
            <h2 className="text-2xl font-bold text-white mb-2">
              📱 Quick Access QR Code
            </h2>
            <p className="text-purple-100">
              Point your camera at the code below
            </p>
          </div>

          {/* QR Code Content */}
          <div className="p-12">
            <div className="bg-gray-50 rounded-2xl p-8 mb-6">
              <img 
                src="/qrcode.png" 
                alt="QR Code to LinkedIn sharing page" 
                className="mx-auto max-w-xs w-full h-auto"
              />
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">
                🔗 Direct Link Alternative
              </h3>
              <div className="bg-gray-100 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-2">Or visit directly:</p>
                <code className="text-blue-600 font-mono text-sm break-all">
                  https://genai-vert.vercel.app/panel-talk
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-purple-900 mb-6 flex items-center justify-center">
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            How to Use the QR Code:
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 shadow-md">
                <span className="text-purple-600 font-bold text-lg">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Open Camera</h4>
              <p className="text-gray-600 text-sm">
                Use your phone's camera app or QR scanner
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 shadow-md">
                <span className="text-purple-600 font-bold text-lg">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Scan QR Code</h4>
              <p className="text-gray-600 text-sm">
                Point your camera at the QR code above
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 shadow-md">
                <span className="text-purple-600 font-bold text-lg">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Share Away!</h4>
              <p className="text-gray-600 text-sm">
                Copy the template and share on LinkedIn
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12">
          <p className="text-gray-500 text-sm">
            Thanks for being part of The AI Collective Delhi Summit! 🚀
          </p>
          <div className="mt-4">
            <a 
              href="/panel-talk" 
              className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Go directly to sharing page
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
