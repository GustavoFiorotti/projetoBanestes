import { Cliente, Conta, Agencia } from '../types';
import { parseCSV, parseClientes, parseContas, parseAgencias } from '../utils/csvParser';

const CLIENTES_URL = 'https://docs.google.com/spreadsheets/d/1PBN_HQOi5ZpKDd63mouxttFvvCwtmY97Tb5if5_cdBA/gviz/tq?tqx=out:csv&sheet=clientes';
const CONTAS_URL = 'https://docs.google.com/spreadsheets/d/1PBN_HQOi5ZpKDd63mouxttFvvCwtmY97Tb5if5_cdBA/gviz/tq?tqx=out:csv&sheet=contas';
const AGENCIAS_URL = 'https://docs.google.com/spreadsheets/d/1PBN_HQOi5ZpKDd63mouxttFvvCwtmY97Tb5if5_cdBA/gviz/tq?tqx=out:csv&sheet=agencias';


export const fetchClientes = async (): Promise<Cliente[]> => {
  try {
    const response = await fetch(CLIENTES_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch clientes data');
    }
    const csvData = await response.text();
    const parsedData = parseCSV(csvData);
    return parseClientes(parsedData);
  } catch (error) {
    console.error('Error fetching clientes:', error);
    throw error;
  }
};


export const fetchContas = async (): Promise<Conta[]> => {
  try {
    const response = await fetch(CONTAS_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch contas data');
    }
    const csvData = await response.text();
    const parsedData = parseCSV(csvData);
    return parseContas(parsedData);
  } catch (error) {
    console.error('Error fetching contas:', error);
    throw error;
  }
};


export const fetchAgencias = async (): Promise<Agencia[]> => {
  try {
    const response = await fetch(AGENCIAS_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch agencias data');
    }
    const csvData = await response.text();
    const parsedData = parseCSV(csvData);
    return parseAgencias(parsedData);
  } catch (error) {
    console.error('Error fetching agencias:', error);
    throw error;
  }
};


export const getAgenciaByCodigo = (agencias: Agencia[], codigo: number): Agencia | undefined => {
  return agencias.find(agencia => agencia.codigo === codigo);
};


export const getContasForCliente = (contas: Conta[], cpfCnpj: string): Conta[] => {
  return contas.filter(conta => conta.cpfCnpjCliente === cpfCnpj);
};


export const formatCurrency = (value: number): string => {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
};


export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('pt-BR');
};