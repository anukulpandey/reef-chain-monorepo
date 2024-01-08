import * as utilLib from '@reef-chain/util-lib';

export function App() {
  const handleClick = ()=>{
    console.log(utilLib)
  }
  return (
    <div>
      <button onClick={handleClick}>log test</button>
    </div>
  );
}

export default App;
