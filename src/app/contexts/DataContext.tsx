import { ReactNode, createContext, useContext } from 'react';
import { useFetch } from '../hooks/useFetch';

type DataContext = {
  data: Venda[] | null;
  loading: boolean;
  error: any;
};

type Venda = {
  id: string;
  nome: string;
  preco: number;
  status: 'pago' | 'processando' | 'falha';
  pagamento: 'boleto' | 'pix' | 'cartão';
  date: string;
  parcelas: number | null;
};

const DataContext = createContext<DataContext | null>({} as DataContext);

export const DataContextProvider = ({ children }: { children: ReactNode }) => {
  const { data, loading, error } = useFetch<Venda[]>({
    url: 'https://data.origamid.dev/vendas',
  });
  return (
    <DataContext.Provider
      value={{
        data,
        loading,
        error,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error('Use data needs to be within DataContext provider');
  return context
};
