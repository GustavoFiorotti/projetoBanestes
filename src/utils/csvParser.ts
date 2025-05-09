import { Cliente, Conta, Agencia } from '../types';


export const parseCSV = (csv: string): string[][] => {
  const lines = csv.split('\n');
  return lines.map(line => {
   
    const values: string[] = [];
    let currentValue = '';
    let insideQuotes = false;
    
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      
      if (char === '"') {
        insideQuotes = !insideQuotes;
      } else if (char === ',' && !insideQuotes) {
        values.push(currentValue);
        currentValue = '';
      } else {
        currentValue += char;
      }
    }
    
   
    values.push(currentValue);
    return values;
  }).filter(line => line.length > 1);
};


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const convertValue = (value: string, type: string): any => {
  value = value.replace(/^"|"$/g, '');
  
  if (type === 'number') {
    
    return value ? Number(value.replace(/\./g, '').replace(',', '.')) : 0;
  } else if (type === 'date') {

    if (!value) return new Date();
    
    const parts = value.split('/');
    if (parts.length === 3) {
      return new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0]));
    }
    return new Date();
  } else if (type === 'boolean') {
    return value.toLowerCase() === 'true' || value === '1';
  }
  
 
  return value;
};


export const parseClientes = (csvData: string[][]): Cliente[] => {
  
  const dataRows = csvData.slice(1);
  
  return dataRows.map(row => {
    return {
      id: row[0],
      cpfCnpj: row[1],
      rg: row[2] || undefined,
      dataNascimento: convertValue(row[3], 'date'),
      nome: row[4],
      nomeSocial: row[5] || undefined,
      email: row[6],
      endereco: row[7],
      rendaAnual: convertValue(row[8], 'number'),
      patrimonio: convertValue(row[9], 'number'),
      estadoCivil: row[10] as "Solteiro" | "Casado" | "Viúvo" | "Divorciado",
      codigoAgencia: convertValue(row[11], 'number')
    };
  });
};


export const parseContas = (csvData: string[][]): Conta[] => {

  const dataRows = csvData.slice(1);
  
  return dataRows.map(row => {
    return {
      id: row[0],
      cpfCnpjCliente: row[1],
      tipo: row[2] as "corrente" | "poupanca",
      saldo: convertValue(row[3], 'number'),
      limiteCredito: convertValue(row[4], 'number'),
      creditoDisponivel: convertValue(row[5], 'number')
    };
  });
};


export const parseAgencias = (csvData: string[][]): Agencia[] => {

  const dataRows = csvData.slice(1);
  
  return dataRows.map(row => {
    return {
      id: row[0],
      codigo: convertValue(row[1], 'number'),
      nome: row[2],
      endereco: row[3]
    };
  });
};