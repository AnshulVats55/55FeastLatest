import AllRoutes from "./components/routes/Routes";
import store from './store/index';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { Provider } from "react-redux";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

let persistor = persistStore(store);

function App(){
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <AllRoutes />
                </LocalizationProvider>   
            </PersistGate>
        </Provider>
    );
}

export default App;
