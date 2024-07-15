const { useState } = require("react");

function CalculatorCard() {

    const [numbera, setNumbera] = useState(1);
    const [numberb, setNumberb] = useState(1);
    const [operation, setOperation] = useState('add');

    function calculate() {
        switch (operation) {
            case 'add':
                return numbera + numberb;
                break;
            case 'subtract':
                return numbera - numberb;
                break;
            case 'multiply':
                return numbera * numberb;
                break;
            case 'divide':
                return numbera / numberb;
                break;
            default:
                return 'Invalid operation';
        }
    }

    const result = calculate();

    return (<article className="card">
        <div className="card-header">
            Rechner
        </div>
        <div className="card-body">
            <div className="mb-3">
                <label htmlFor="numbera" className="form-label">Zahl A</label>
                <input type="number" className="form-control" name="numbera" 
                value={numbera}
                onChange={(e) => setNumbera(parseFloat(e.target.value))}
                required />
            </div>
            <div className="mb-3">
                <label htmlFor="operation" className="form-label">Operation</label>
                <select name="operation" className="form-select" aria-label="Default select example" 
                value={operation}
                onChange={(e) => setOperation(e.target.value)}
                required>
                    <option value="add">A + B</option>
                    <option value="subtract">A - B</option>
                    <option value="multiply">A * B</option>
                    <option value="divide">A / B</option>
                </select>
                <div id="operatorHelp" className="form-text">
                    Wähle die auszuführende Operation
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="numberb" className="form-label">Zahl B</label>
                <input type="number" className="form-control" name="numberb"
                 value={numberb}
                 onChange={(e) => setNumberb(parseFloat(e.target.value))}
                 required />
            </div>

            <div className="mb-3">
                <div id="result" className="form-text">
                    <strong>Resultat: {result} </strong>
                </div>
            </div>
        </div>
    </article>
    );
}

export default CalculatorCard;