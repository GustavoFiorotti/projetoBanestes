import React from 'react';
import { Agencia } from '../types';
import { Building, MapPin } from 'lucide-react';

interface AgenciaInfoProps {
  agencia: Agencia | undefined;
}

const AgenciaInfo: React.FC<AgenciaInfoProps> = ({ agencia }) => {
  if (!agencia) {
    return (
      <div className="bg-gray-100 p-4 rounded-md">
        <p className="text-gray-500 text-center">Informações da agência não disponíveis</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-600">
      <div className="flex justify-between items-start">
      <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
        <Building className="h-5 w-5 text-blue-600 mr-2" />
        Agência {agencia.codigo} - {agencia.nome}
      </h3>
      <span className="text-xs bg-gray-100 px-3 py-1 rounded-full text-blue-900 ml-2">
        ID: {agencia.id}
      </span>
      </div>

      <div className="flex items-start">
        <MapPin className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
        <p className="text-gray-700">{agencia.endereco}</p>
      </div>
    </div>
  );
};

export default AgenciaInfo;