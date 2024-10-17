import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CharacterList } from "./screens/Characters/List";
import { CharacterDetails } from "./screens/Characters/Details";
import { Header } from "./components/Header";

export const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Navigate to="/character" />} />
      <Route path="/character">
        <Route index element={<CharacterList />} />
        <Route path="details" element={<CharacterDetails />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
