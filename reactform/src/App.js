import './index.css';
import Form from './components/Form';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Form />
      </div>
    </RecoilRoot>
  );
}

export default App;
