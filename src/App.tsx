import { DataContextProvider } from './app/contexts/DataContext';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './pages/Dashboard';

function App() {
  return (
    <DataContextProvider>
      <Sidebar />
      <Header />
      <Dashboard />
    </DataContextProvider>
  );
}

export default App;
