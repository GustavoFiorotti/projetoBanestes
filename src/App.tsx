import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import ClienteList from './components/ClienteList';
import ClienteDetails from './components/ClienteDetails';
import Loading from './components/Loading';
import ErrorMessage from './components/ErrorMessage';
import { Cliente, Conta, Agencia } from './types';
import { 
  fetchClientes, 
  fetchContas, 
  fetchAgencias, 
  getAgenciaByCodigo, 
  getContasForCliente 
} from './services/dataService';

function App() {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [contas, setContas] = useState<Conta[]>([]);
  const [agencias, setAgencias] = useState<Agencia[]>([]);
  const [selectedCliente, setSelectedCliente] = useState<Cliente | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {

      const [clientesData, contasData, agenciasData] = await Promise.all([
        fetchClientes(),
        fetchContas(),
        fetchAgencias()
      ]);
      
      setClientes(clientesData);
      setContas(contasData);
      setAgencias(agenciasData);
      setLoading(false);
    } catch (err) {
      console.error('Error loading data:', err);
      setError('Ocorreu um erro ao carregar os dados. Por favor, tente novamente.');
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSelectCliente = (cliente: Cliente) => {
    setSelectedCliente(cliente);

    window.scrollTo(0, 0);
  };

  const handleBackToList = () => {
    setSelectedCliente(null);
  };

  if (loading) {
    return (
      <Layout>
        <Loading />
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <ErrorMessage message={error} onRetry={loadData} />
      </Layout>
    );
  }


  return (
    <Layout>
      {selectedCliente ? (
        <ClienteDetails
          cliente={selectedCliente}
          contas={getContasForCliente(contas, selectedCliente.cpfCnpj)}
          agencia={getAgenciaByCodigo(agencias, selectedCliente.codigoAgencia)}
          onBack={handleBackToList}
        />
      ) : (
        <>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Gerenciamento de Clientes</h2>
          <ClienteList 
            clientes={clientes} 
            onSelectCliente={handleSelectCliente} 
          />
        </>
      )}
    </Layout>
  );
}

export default App;