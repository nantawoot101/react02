const root = ReactDOM.createRoot(document.querySelector('#root'));

function Counter() {
        return (
            <div className="counter">
                <button>+</button>
                <h2>{0}</h2>
                <button>-</button>
                <button>C</button>
                <button>X</button>
            </div>
        )
    }
    

function App(){
    return (
        <div className="counter1">
            <h1>Today : {new Date().toDateString()}</h1>
            <h1 className="Sum">Sum = 0</h1>
            <button on> Add Counter</button>
            <Counter />
        </div>
    );
}



root.render(<App />)