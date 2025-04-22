import React from 'react';
import { Cliente } from '../types';
import { User, Mail, MapPin, Building } from 'lucide-react';
import { formatCurrency } from '../services/dataService';
import { formatCpfCnpj } from '../utils/formatCpfCnpj';

interface ClienteCardProps {
  cliente: Cliente;
  onClick: () => void;
}

const ClienteCard: React.FC<ClienteCardProps> = ({ cliente, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex flex-col space-y-3">
        <div className="flex items-start">
          <div className="bg-blue-100 rounded-full p-2 mr-3">
            <User className="h-5 w-5 text-blue-700" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-800">{cliente.nome}</h3>
            {cliente.nomeSocial && (
              <p className="text-sm text-gray-600">Nome social: {cliente.nomeSocial}</p>
            )}
          </div>
        </div>
        
        <div className="flex items-center text-sm text-gray-600">
          <Mail className="h-4 w-4 text-gray-500 mr-2" />
          <span>{cliente.email}</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-600">
          <MapPin className="h-4 w-4 text-gray-500 mr-2" />
          <span className="truncate">{cliente.endereco}</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-600">
          <Building className="h-4 w-4 text-gray-500 mr-2" />
          <span>Agência: {cliente.codigoAgencia}</span>
        </div>
        
        <div className="flex justify-between mt-2 pt-2 border-t border-gray-100">
          <div className="text-sm">
            <p className="text-gray-500">CPF/CNPJ</p>
            <p className="font-medium">{formatCpfCnpj(cliente.cpfCnpj)}</p>
          </div>
          <div className="text-sm text-right">
            <p className="text-gray-500">Patrimônio</p>
            <p className="font-medium text-green-700">{formatCurrency(cliente.patrimonio)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClienteCard;