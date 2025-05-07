function Help() {
    return (
      <div className="max-w-4xl mx-auto p-8 min-h-screen bg-gradient-to-b from-white to-gray-100">
        <h1 className="text-4xl font-bold text-center mb-8 text-green-600 drop-shadow-md">
          Need Help?
        </h1>
  
        <div className="space-y-8 text-gray-700 text-lg">
          {/* How to use */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-4 text-blue-500">How to Use the App</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Browse the available restaurants and explore menus.</li>
              <li>Click <span className="font-semibold">"Add +"</span> to add items to your cart.</li>
              <li>Go to the <span className="font-semibold">Cart</span> to manage items.</li>
              <li>Click <span className="font-semibold">"Remove item"</span> to delete or reduce quantity.</li>
            </ul>
          </div>
  
          {/* Common Issues */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-4 text-blue-500">Common Issues</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><span className="font-semibold">Menu not loading?</span> - Check your internet or refresh the page.</li>
              <li><span className="font-semibold">Cart not updating?</span> - Clear cache and reload the site.</li>
            </ul>
          </div>
  
          {/* Contact Info */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-4 text-blue-500">Still Need Help?</h2>
            <p>
              You can reach out to us at 
              <a href="mailto:support@foodapp.com" className="text-green-500 font-semibold ml-1 hover:underline">
                support@foodapp.com
              </a>
              {" "} and we will assist you as soon as possible!
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Help;
  