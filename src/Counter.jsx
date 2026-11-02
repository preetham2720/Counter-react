import { useState } from "react";

function Counter(){
    const [counter, setcounter] = useState(0);
    const [error,seterror] = useState(false)

    function increase(){
        seterror(false)
        setcounter(counter+1);
    }

    function decrease(){
        if(counter > 0){
            setcounter(counter-1);
        }else{
            seterror(true)
        }
    }

    function reset(){
        seterror(false)
        setcounter(0);
    }

    return(
        <div className="card">
            <div className="card_content">
                <h1>Counter Application</h1>
                <div className="card_content_display">
                    <p>Current Count</p>
                    <h2>{counter}</h2>
                </div>
                <div className="card_content_btn">
                    <button onClick={increase} className="inc">+ Increment</button>
                    <button onClick={decrease} className="dec">- Decrement</button>
                    <button onClick={reset} className="reset">Reset</button>
                </div>
                {error && <p className="error">Minimum limit reached</p>}
            </div>
           
        </div>
    )
}

export default Counter;