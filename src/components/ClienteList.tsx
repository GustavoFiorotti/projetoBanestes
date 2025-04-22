import React, { useState, useEffect } from "react";
import { Cliente } from "../types";
import ClienteCard from "./ClienteCard";
import Pagination from "./Pagination";
import { Search } from "lucide-react";

interface ClienteListProps {
  clientes: Cliente[];
  onSelectCliente: (cliente: Cliente) => void;
}

const ClienteList: React.FC<ClienteListProps> = ({
  clientes,
  onSelectCliente,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredClientes, setFilteredClientes] = useState<Cliente[]>([]);

  const itemsPerPage = 10;

  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredClientes(clientes);
      return;
    }
  
    const searchTermLower = searchTerm.toLowerCase();
  
    const formatNum = (valor: string) => valor.replace(/\D/g, "");
  
    const filtered = clientes.filter((cliente) =>
      cliente.nome.toLowerCase().includes(searchTermLower) ||
      formatNum(cliente.cpfCnpj).includes(formatNum(searchTerm))
    );
  
    setFilteredClientes(filtered);
    setCurrentPage(1);
  }, [searchTerm, clientes]);
  

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredClientes.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredClientes.length / itemsPerPage);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <div className="mb-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Buscar por nome ou CPF/CNPJ..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {filteredClientes.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">Nenhum cliente encontrado.</p>
        </div>
      ) : (
        <>
          <p className="text-sm text-gray-500 mb-4">
            Mostrando {Math.min(filteredClientes.length, indexOfFirstItem + 1)}-
            {Math.min(indexOfLastItem, filteredClientes.length)} de{" "}
            {filteredClientes.length} clientes
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentItems.map((cliente) => (
              <ClienteCard
                key={cliente.id}
                cliente={cliente}
                onClick={() => onSelectCliente(cliente)}
              />
            ))}
          </div>

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </>
      )}
    </div>
  );
};

export default ClienteList;
