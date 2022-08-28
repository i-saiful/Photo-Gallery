import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import ImageFeedback from "./pages/ImageFeedback";
import {Provider} from 'react-redux';
import store from "./redux/store";
import UserForm from "./pages/UserForm";

function App() {
  return (
    <Provider store={store}>
      {/* <Navigation /> */}
      {/* <Home /> */}
      {/* <ImageFeedback /> */}
      <UserForm />
    </Provider>
  );
}

export default App;
