import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyles } from './styles/GlobalStyles';
import { Home } from './pages/Home/index';
import { NewRoom } from './pages/NewRoom';
import { AuthContextProvider } from './contexts/AuthContext';
import { Room } from './pages/Room';
import { AdminRoom } from './pages/AdminRoom';

const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms/new" element={<NewRoom />} />
          <Route path="/rooms/:id" element={<Room />} />

          <Route path="/admin/rooms/:id" element={<AdminRoom />} />
        </Routes>
      </AuthContextProvider>
      <GlobalStyles />
    </BrowserRouter>
  );
};

export default App;
