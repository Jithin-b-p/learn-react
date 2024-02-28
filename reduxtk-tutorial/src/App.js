import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div>hai</div>
    </Provider>
  );
}

export default App;
