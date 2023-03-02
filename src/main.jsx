// 1. Usar Redux y
// 1. hacer una petición GET a https://jsonplaceholder.typicode.com/users/1 y
// guardar los datos en la Store.
// 2. Mostrar el nombre de usuario y el username en un componente llamado Header
// recogiendo los datos de la store.
// 3. Crear un componente Email que muestre el email del usuario en un campo de
// texto y que permita modificarlo.

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
