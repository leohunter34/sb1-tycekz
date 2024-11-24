import React from 'react';
import Header from './components/Header';
import VisionSection from './components/VisionSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto py-8">
        <VisionSection />
      </main>
    </div>
  );
}

export default App;