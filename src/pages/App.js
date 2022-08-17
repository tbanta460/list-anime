import './App.css';
import Main from './main';
import {Provider} from 'react-redux'
import store  from '../config/redux/store';
function App() {

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
