import { MuiMode } from "./components/mui/MuiMode";
import { AppProviders } from "./components/providers/AppProviders";

const App = () => {
  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
      </div>
    </AppProviders>
  );
};

export default App;
