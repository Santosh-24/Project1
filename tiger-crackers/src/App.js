import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Link to="/">Tiger-Crackers</Link>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" Component={ProductScreen} />
            <Route path="/" Component={HomeScreen} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
