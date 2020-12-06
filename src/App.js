import './App.css';
import Interval from './components/Interval'
import Average from './components/Average'
import Sum from './components/Sum'
import Random from './components/Random'

function App() {
    return (
        <div className="App">
            <h1>Redux-Redo</h1>

            <div className='line'>
                <Interval></Interval>
            </div>

            <div className='line'>
                <Average></Average>
                <Sum></Sum>
                <Random></Random>
            </div>
        </div>
    );
}

export default App;
