import { Provider } from 'react-redux';
import store from "./redux/store";
import AllPages from "./pages/AllPages";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AllPages />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
