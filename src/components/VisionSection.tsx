import React, { useState } from 'react';
import { Target, Compass, Flag, Users, LineChart } from 'lucide-react';

interface Value {
  id: number;
  text: string;
  description: string;
}

export default function VisionSection() {
  const [values, setValues] = useState<Value[]>([
    { id: 1, text: '', description: '' }
  ]);

  const addValue = () => {
    setValues([...values, { id: values.length + 1, text: '', description: '' }]);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <section className="space-y-6">
        <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
          <div className="flex items-center space-x-3 mb-4">
            <Compass className="h-6 w-6 text-indigo-600" />
            <h2 className="text-xl font-bold text-gray-800">Valeurs Fondamentales</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Définissez les principes directeurs qui guideront votre entreprise.
          </p>
          <div className="space-y-4">
            {values.map((value, index) => (
              <div key={value.id} className="space-y-3">
                <input
                  type="text"
                  placeholder="Valeur fondamentale"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <textarea
                  placeholder="Description de la valeur"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  rows={2}
                />
              </div>
            ))}
            <button
              onClick={addValue}
              className="text-indigo-600 hover:text-indigo-700 font-medium flex items-center space-x-2"
            >
              <span>+ Ajouter une valeur</span>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Target className="h-6 w-6 text-indigo-600" />
            <h2 className="text-xl font-bold text-gray-800">Focus Principal</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Raison d'être
              </label>
              <textarea
                placeholder="Pourquoi votre entreprise existe-t-elle ?"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                rows={3}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Niche
              </label>
              <textarea
                placeholder="Quelle est votre spécialité ?"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                rows={2}
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Flag className="h-6 w-6 text-indigo-600" />
            <h2 className="text-xl font-bold text-gray-800">Objectif à 10 ans</h2>
          </div>
          <textarea
            placeholder="Quelle est votre vision à long terme ?"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            rows={4}
          />
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center space-x-3 mb-4">
            <LineChart className="h-6 w-6 text-indigo-600" />
            <h2 className="text-xl font-bold text-gray-800">Projection à 3 ans</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Objectifs de revenus
              </label>
              <input
                type="text"
                placeholder="€"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Objectifs de profit
              </label>
              <input
                type="text"
                placeholder="€"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mesures clés
              </label>
              <textarea
                placeholder="Indicateurs de performance principaux"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                rows={3}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}