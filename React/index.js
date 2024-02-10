import Div from "./Div/Div.js";
import Form from "./Form/Form.js";
import FullName from "./FullName/FullName.js";

const { createElement } = React; //Деструктуризация
/*
Same as:
const { createElement: createElement } = React;
Same as:
const createElement = React.createElement;
*/

function App() {
    return createElement {
        DocumentFragment,
        null,
        Div(),
        Form(),
        FullName({
            name: 'Vagif',
            surname: 'Gambarov',
        }),
        FullName({
            name: 'Kevin',
            surname: 'Brown',
        })
    }
}

const rootContainer = document.querySelector('#root');

if (rootContainer === null){

}

console.log(React);
console.log(createElement);