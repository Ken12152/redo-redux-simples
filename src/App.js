import './App.css';
import Card from './components/Card'

function App() {
    return (
        <div className="App">
            <h1>Redux-Redo</h1>

            <div className='line'>
                <Card title="Card1" Red>Contents</Card>
            </div>

            <div className='line'>
                <Card title="Card2" Green>Contents</Card>
                <Card title="Card3" Blue>Contents</Card>
                <Card title="Card4" Purple>Contents</Card>
            </div>
        </div>
    );
}

export default App;
