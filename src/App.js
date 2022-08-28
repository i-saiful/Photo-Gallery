import { Provider } from 'react-redux';
import store from "./redux/store";
import AllPages from "./pages/AllPages";

function App() {
  return (
    <Provider store={store}>
      <AllPages />
    </Provider>
  );
}

export default App;
