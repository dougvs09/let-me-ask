import { Routes, Route, BrowserRouter } from "react-router-dom";

import { GlobalStyles } from "./styles/GlobalStyles";
import { Home } from "./pages/Home/index";
import { NewRoom } from "./pages/NewRoom";
import { AuthContextProvider } from "./contexts/AuthContext";

const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/rooms/new" element={<NewRoom />}/>
        </Routes>
      </AuthContextProvider>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
