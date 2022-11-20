import { Routes, Route } from 'react-router-dom';
import {
  Layout,
  CrewLayout,
  DestinationLayout,
  TechnologyLayout,
} from './components';
import { HomePage, CrewPage, DestinationPage, TechnologyPage } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="destination" element={<DestinationLayout />}>
          <Route index element={<DestinationPage />} />
          <Route path=":name" element={<DestinationPage />} />
        </Route>
        <Route path="crew" element={<CrewLayout />}>
          <Route index element={<CrewPage />} />
          <Route path=":name" element={<CrewPage />} />
        </Route>
        <Route path="technology" element={<TechnologyLayout />}>
          <Route index element={<TechnologyPage />} />
          <Route path=":name" element={<TechnologyPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
