import React,{useState} from 'react'

export default function TextForm(props) {
    const handleOnChnage=(event)=>{
        setText(event.target.value);
    }
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    }
    const handleClearClick=()=>{
      let newText="";
      setText(newText);
      props.showAlert("TextBox is Cleared","success");
    }
    const handleCopyClick=()=>{
      var text=document.getElementById('myBox');
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to Clipboard!","success");
    }
    const [text,setText]=useState('');
  return (
    <>
    <div>
        <h1>{props.heading}</h1>
        <div className='input-group'>
        <textarea className={`form-control bg-${props.mode==='light'?'light':'dark'} text-${props.mode==='light'?'black':'light'}`} value={text} onChange={handleOnChnage} id='myBox' rows="8" aria-label="With textarea"></textarea>
        </div>
        <button disabled={text.length===0} className={`${props.mode==='light'?'btn btn-primary':'btn btn-dark'} my-3 mx-2`} onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className={`${props.mode==='light'?'btn btn-primary':'btn btn-dark'} my-3 mx-2`} onClick={handleLoClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className={`${props.mode==='light'?'btn btn-primary':'btn btn-dark'} my-3 mx-2`} onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className={`${props.mode==='light'?'btn btn-primary':'btn btn-dark'} my-3 mx-2`} onClick={handleCopyClick}>Copy Text To clipboard</button>
    </div>
    <div className="container my-3">
      <h1>Your Text Summary</h1>
      <p>{`${text.trim().length===0?0:text.trim().split(/\s+/).length} - words and ${text.length}`} - characters</p>
      <p>Time to read:- {0.008 * text.split(" ").length} Minutes</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to Preview! "}</p>
    </div>
    </>
  )
}
