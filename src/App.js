import './App.css';
import Ex1 from './components/Ex1';
import Ex2 from './components/Ex2';
import Counter from './components/Counter';
import Toggle from './components/Toggle';
import FormHandling from './components/FormHandling';
import NameList from "./components/NameList";
import SearchList from "./components/SearchList";
import SimpleClock from "./components/SimpleClock";
import TodoList from "./components/TodoList";
import BlogList from "./components/BlogList";
function App() {
    return (
        <div className="App">
            <h1>ReactJS</h1>
            <div className="table-container">
                <table>
                    <thead>
                    <tr>
                        <th>Exercise</th>
                        <th>Output</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Ex1</td>
                        <td><Ex1/></td>
                    </tr>
                    <tr>
                        <td>Ex2</td>
                        <td><Ex2 name="Vutuann"/></td>
                    </tr>
                    <tr>
                        <td>Ex3</td>
                        <td><Counter/></td>
                    </tr>
                    <tr>
                        <td>Ex4</td>
                        <td><Toggle/></td>
                    </tr>
                    <tr>
                        <td>Ex5</td>
                        <td><FormHandling/></td>
                    </tr>
                    <tr>
                        <td>Ex6</td>
                        <td><NameList/></td>
                    </tr>
                    <tr>
                        <td>Ex7</td>
                        <td><SearchList/></td>
                    </tr>
                    <tr>
                        <td>Ex8</td>
                        <td><SimpleClock/></td>
                    </tr>
                    <tr>
                        <td>Ex9</td>
                        <td><TodoList/></td>
                    </tr>
                    <tr>
                        <td>Ex10</td>
                        <td><BlogList/></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default App;
