import React ,{useState,useEffect,useRef}from 'react'

const  Calculator =()=> {

    const [result,setResult]=useState('')
    const inputRef:any = useRef(null);
    useEffect(()=>{
        inputRef.current.focus()
    })
    // useEffect(()=>{
    //     inputRef.current.focus()
    // })
    //useEffect(() => inputRef.current.focus());

    const handleClick =(e :any)=>{
        setResult(result.concat(e.target.name));
    }
    const clear = ()=>{
        setResult('')

    }

    const backspace = ()=>{
        setResult(result.slice(0, -1))
    }

    const calculate = ()=>{
        try{
            setResult(eval(result).toString())
        }
        catch(e){
            setResult("error")
        }
    }
    return (
        <div className='calc-app'>
            <form>
                <input type='text' ref={inputRef} value={result} />
            </form>
            <div className='keypad'>
                <button id='clear' onClick={clear} >Clear</button>
                <button id='backspace' onClick={backspace}>C</button>
                <button name="+" onClick={handleClick} >+</button>
                <button name="7" onClick={handleClick} >7</button>
                <button name="8" onClick={handleClick} >8</button>
                <button name="9"onClick={handleClick} >9</button>
                <button name="-" onClick={handleClick} >-</button>
                <button name="4" onClick={handleClick} >4</button>
                <button name="5" onClick={handleClick} >5</button>
                <button name="6" onClick={handleClick} >6</button>
                <button name="*" onClick={handleClick} >*</button>
                <button name="1" onClick={handleClick} >1</button>
                <button name="2" onClick={handleClick} >2</button>
                <button name="3" onClick={handleClick} >3</button>
                <button name="/" onClick={handleClick} >/</button>
                <button name="0" onClick={handleClick} >0</button>
                <button name="." onClick={handleClick} >.</button>
                <button id='result' onClick={calculate} >Result</button>

                
            </div>
    
        </div>
    )
}
export default Calculator

