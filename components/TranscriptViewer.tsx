import React from 'react';

interface TranscriptViewerProps {
  transcript: string;
  fillerWords: string[];
}

export const TranscriptViewer: React.FC<TranscriptViewerProps> = ({ transcript, fillerWords }) => {
  const highlightFillerWords = (text: string) => {
    const regex = new RegExp(`\\b(${fillerWords.join('|')})\\b`, 'gi');
    return text.split(regex).map((part, index) =>
      fillerWords.includes(part.toLowerCase()) ? (
        <mark key={index} className="bg-yellow-500 text-black rounded px-1">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <div className="p-4 bg-gray-800 rounded-lg border border-gray-700 mt-4">
      <h4 className="font-semibold text-lg mb-2 text-white">Interview Transcript</h4>
      <p className="text-gray-300 whitespace-pre-wrap leading-relaxed">
        {highlightFillerWords(transcript)}
      </p>
    </div>
  );
};