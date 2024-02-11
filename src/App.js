import './App.css';
import { useSyncExternalStore, useMemo, useEffect, useState, useDeferredValue, useLayoutEffect, useRef } from 'react';
import { todosStore } from './todoStore.js';
import ListItem from './listItem.js';

const displayValue = (input) => {
  console.log('Rendering/Reloading displayValue', input)
}
  function App() {  
  const [inp, setInp] = useState('');
  const inputRef = useRef();
  const defferedInp = useDeferredValue(inp)
  let data = 4;
  const onChange = (event)=>{
    setInp(event.target.value)
  }
  useEffect(()=>{
    inputRef.current?.focus()
  },[])
  useEffect(()=> {
    console.log('Running useEffect')
    // Type faster to see magic
    console.log('inp, defferedInp', inp, defferedInp)
  }, [inp, defferedInp])

  useLayoutEffect(() => {
    console.log('Running useLayoutEffect')
  }, []);

  useMemo(() => displayValue(data), [data])
  const todos = useSyncExternalStore(todosStore.subscribe,
    todosStore.getSnapshot);
    
  return (
    <div className="App">
      <header className="App-header">
        <input ref={inputRef} value={inp} onChange={onChange}/>
        { <button onClick={() => todosStore.addTodo()}>Add todo</button> }
        <hr />
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>{todo.text}</li>
          )) }
        </ul>
        <ListItem item = {defferedInp}/>
      </header>
    </div>
  );
}

export default App;
