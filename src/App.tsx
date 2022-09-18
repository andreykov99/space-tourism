import './App.css';
import { Routes, Route } from 'react-router-dom';
import { DynamicPage, Layout } from './components';
import { HomePage, DestinationPage, TechnologyPage } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<DynamicPage />} />
        <Route path="destination" element={<DestinationPage />} />
      </Route>
    </Routes>
  );
}

export default App;
