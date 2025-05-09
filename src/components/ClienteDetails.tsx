import React from "react";
import { Cliente, Conta, Agencia } from "../types";
import ContaCard from "./ContaCard";
import AgenciaInfo from "./AgenciaInfo";
import { ArrowLeft, Mail, MapPin, Calendar, Heart } from "lucide-react";
import { formatCurrency, formatDate } from "../services/dataService";
import { formatCpfCnpj } from "../utils/formatCpfCnpj";

interface ClienteDetailsProps {
  cliente: Cliente;
  contas: Conta[];
  agencia: Agencia | undefined;
  onBack: () => void;
}

const ClienteDetails: React.FC<ClienteDetailsProps> = ({
  cliente,
  contas,
  agencia,
  onBack,
}) => {
  const getEstadoCivilIcon = (estadoCivil: string) => {
    if (estadoCivil) {
      return <Heart className="h-5 w-5 text-red-500 mr-2" />;
    }};

  return (
    <div className="animate-fadeIn">
      <button
        onClick={onBack}
        className="mb-4 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        Voltar para lista
      </button>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-1">
              {cliente.nome}
            </h2>
            {cliente.nomeSocial && (
              <p className="text-gray-600 mb-3">
                Nome social: {cliente.nomeSocial}
              </p>
            )}

            <div className="flex flex-wrap gap-2 mt-2">
              <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                ID: {cliente.id}
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                CPF/CNPJ: {formatCpfCnpj(cliente.cpfCnpj)}
              </span>
              {cliente.rg && (
                <span className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                  RG: {cliente.rg}
                </span>
              )}
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex flex-col sm:flex-row gap-4">
              <div>
                <p className="text-xs text-gray-500">Renda Anual</p>
                <p className="font-semibold text-green-700">
                  {formatCurrency(cliente.rendaAnual)}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Patrimônio</p>
                <p className="font-semibold text-green-700">
                  {formatCurrency(cliente.patrimonio)}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <div className="flex items-start">
            <Mail className="h-5 w-5 text-gray-500 mr-2" />
            <div>
              <p className="text-xs text-gray-500">Email</p>
              <p className="text-gray-800">{cliente.email}</p>
            </div>
          </div>

          <div className="flex items-start">
            <Calendar className="h-5 w-5 text-gray-500 mr-2" />
            <div>
              <p className="text-xs text-gray-500">Data de Nascimento</p>
              <p className="text-gray-800">
                {formatDate(cliente.dataNascimento)}
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex items-center">
              {getEstadoCivilIcon(cliente.estadoCivil)}
              <div>
                <p className="text-xs text-gray-500">Estado Civil</p>
                <p className="text-gray-800">{cliente.estadoCivil}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-start">
            <MapPin className="h-5 w-5 text-gray-500 mr-2 mt-1" />
            <div>
              <p className="text-xs text-gray-500">Endereço</p>
              <p className="text-gray-800">{cliente.endereco}</p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-gray-800 mb-3">
        Informações da Agência
      </h3>
      <div className="mb-6">
        <AgenciaInfo agencia={agencia} />
      </div>

      <h3 className="text-xl font-semibold text-gray-800 mb-3">
        Contas Bancárias
        <span className="ml-2 text-sm font-normal text-gray-500">
          ({contas.length} {contas.length === 1 ? "conta" : "contas"})
        </span>
      </h3>

      {contas.length === 0 ? (
        <div className="bg-gray-100 p-4 rounded-md">
          <p className="text-gray-500 text-center">
            Este cliente não possui contas bancárias
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {contas.map((conta) => (
            <ContaCard key={conta.id} conta={conta} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ClienteDetails;
