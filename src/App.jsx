import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import { generateClient } from 'aws-amplify/api';
// import { createTodo, updateTodo, deleteTodo } from './graphql/mutations';
// import { listTodos } from './graphql/queries';

function App() {
    const [count, setCount] = useState(0);
    const [itemID, setItemID] = useState("");
    const client = generateClient();

    // async function createItem(){
    //     const result = await client.graphql({
    //         query: createTodo,
    //         variables: {
    //             input: {
    //                 name: 'My first todo!'
    //             }
    //             }
    //     });
    //     setItemID(result.data.createTodo.id);
    //     console.log(result);   
    // }
    // async function listItems(){
    //     const result = await client.graphql({ query: listTodos });
    //     console.log(result);
    // }

    // async function updateItems(){
    //     const result = await client.graphql({
    //         query: updateTodo,
    //         variables: {
    //             input: {
    //                 id: itemID,
    //                 name: 'My first updated todo!'
    //             }
    //         }
    //     });
    //     console.log(result);
    // }

    // async function deleteItem(){
    //     const result = await client.graphql({
    //         query: deleteTodo,
    //         variables: {
    //             input: {
    //                 id: itemID
    //             }
    //         }
    //     });
    //     console.log(result);
    // }

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}> count is {count} </button>
                {/* <button onClick={()=>createItem()}> Create </button>
                <button onClick={()=>listItems()}> List </button>
                <button onClick={()=>updateItems()}> Update </button>
                <button onClick={()=>deleteItem()}> Delete </button> */}
                <p> Edit <code>src/App.jsx</code> and save to test HMR </p>
            </div>
            <p className="read-the-docs"> Click on the Vite and React logos to learn more </p>
        </>
    )
}

export default App;
