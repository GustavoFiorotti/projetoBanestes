import React from 'react';
import { Conta } from '../types';
import { CreditCard, DollarSign, Wallet } from 'lucide-react';
import { formatCurrency } from '../services/dataService';

interface ContaCardProps {
  conta: Conta;
}

const ContaCard: React.FC<ContaCardProps> = ({ conta }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-green-600">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center">
          {conta.tipo === 'corrente' ? (
            <CreditCard className="h-5 w-5 text-blue-600 mr-2" />
          ) : (
            <Wallet className="h-5 w-5 text-green-600 mr-2" />
          )}
          <h3 className="font-medium text-gray-800">
            Conta {conta.tipo === 'corrente' ? 'Corrente' : 'Poupança'}
          </h3>
        </div>
        <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
          {conta.id}
        </span>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="bg-gray-50 p-3 rounded-md">
          <p className="text-xs text-gray-500 mb-1">Saldo</p>
          <p className="font-semibold text-gray-900">{formatCurrency(conta.saldo)}</p>
        </div>
        
        <div className="bg-gray-50 p-3 rounded-md">
          <p className="text-xs text-gray-500 mb-1">Limite de Crédito</p>
          <p className="font-semibold text-gray-900">{formatCurrency(conta.limiteCredito)}</p>
        </div>
        
        <div className="bg-gray-50 p-3 rounded-md">
          <p className="text-xs text-gray-500 mb-1">Crédito Disponível</p>
          <p className="font-semibold text-gray-900">{formatCurrency(conta.creditoDisponivel)}</p>
        </div>
      </div>
      
      {conta.saldo < 0 && (
        <div className="mt-3 flex items-center text-sm text-red-600">
          <DollarSign className="h-4 w-4 mr-1" />
          <span>Esta conta está com saldo negativo</span>
        </div>
      )}
    </div>
  );
};

export default ContaCard;