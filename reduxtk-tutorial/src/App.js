import { store } from "./redux/store";
import { Provider } from "react-redux";

import CakeView from "./features/cake/CakeView";

import UserView from "./features/user/UserView";
import IcecreamView from "./features/icecream/IcecreamView";

function App() {
  return (
    <Provider store={store}>
      <CakeView />
      <IcecreamView />
      <UserView />
    </Provider>
  );
}

export default App;
