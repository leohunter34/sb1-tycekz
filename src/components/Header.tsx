import React from 'react';
import { Compass, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-indigo-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Compass className="h-8 w-8" />
            <h1 className="text-2xl font-bold">PlanifyPro</h1>
          </div>
          <button className="p-2 hover:bg-indigo-600 rounded-lg">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}