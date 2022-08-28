import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import ImageFeedback from "./pages/ImageFeedback";
import {Provider} from 'react-redux';
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      {/* <Navigation /> */}
      {/* <Home /> */}
      {/* <ImageFeedback /> */}
    </Provider>
  );
}

export default App;
