import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
  onRetry: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry }) => {
  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex flex-col items-center justify-center py-8">
      <AlertCircle className="h-12 w-12 text-red-500 mb-2" />
      <h2 className="text-lg font-semibold text-red-700 mb-2">Erro ao carregar dados</h2>
      <p className="text-red-600 mb-4">{message}</p>
      <button
        onClick={onRetry}
        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
      >
        Tentar novamente
      </button>
    </div>
  );
};

export default ErrorMessage;