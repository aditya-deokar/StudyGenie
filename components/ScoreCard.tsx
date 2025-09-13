import React from 'react';

interface ScoreCardProps {
  title: string;
  value: string | number;
  unit?: string;
  description: string;
}

export const ScoreCard: React.FC<ScoreCardProps> = ({ title, value, unit, description }) => {
  return (
    <div className="flex flex-col p-4 bg-gray-800 rounded-lg border border-gray-700 text-center">
      <p className="text-sm text-gray-400">{title}</p>
      <p className="text-3xl font-bold text-white">
        {value}
        {unit && <span className="text-lg ml-1">{unit}</span>}
      </p>
      <p className="text-xs text-gray-500 mt-1">{description}</p>
    </div>
  );
};