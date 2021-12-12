import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./books";
import Header from "./components/Header";
import Form from "./components/Form";
import Starter from "./components/Starter";

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Starter />} />
            <Route path="/new" element={<Form />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
