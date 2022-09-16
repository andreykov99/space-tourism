import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components';
import { HomePage, CrewPage, DestinationPage, TechnologyPage } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="crew" element={<CrewPage />} />
        <Route path="destination" element={<DestinationPage />} />
        <Route path="technology" element={<TechnologyPage />} />
      </Route>
    </Routes>
  );
}

export default App;
