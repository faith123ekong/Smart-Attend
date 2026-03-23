import React from 'react';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Welcome Back</h1>
        <p className="text-slate-600 mb-8">Your application is now running smoothly.</p>
        <div className="space-y-4">
          <p className="text-sm text-slate-500">
            The app was previously failing to start because essential configuration files were missing.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
