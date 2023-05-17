import React, {useState} from 'react'

export default function TextForm(props) {
const handleUpperCase = () => {
    console.log("uppercase button clicked");
    let newtext = text.toUpperCase();
    setText(newtext); //updates the value of text with newText
    props.showAlert(" Converted to uppercase","success ");
}
const handleLowerCase = () => {
    console.log("uppercase button clicked");
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert(" Converted to lowercase","success ");   
}
const handleClearText = () => {
    let newtext = ('');
    setText(newtext);
    props.showAlert(" Text cleared","success "); 
}
const handleExtraSpace = () => {
    const outputString = text.replace(/\s+/g, ' ').trim();
    setText(outputString);
    props.showAlert(" Extra spaces removed","success ");
}
const hndleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value) // can change the value of text by calling
    //  this and data is added to the text entered by the user 
    // this onchange function is necessary so we can type in text box or else we cant 
}
const[text, setText] = useState('');
//text = "enter Text here also"; //wrong way to change state 
//setText("enter Text here also"); //right way to change state 
  return (
    <>
        <div className='contianer' style={{color:props.mode==='light'?'black':'white'}} >
            <h1>{props.heading}</h1>
            <div className="my-3">
                <textarea className="form-control" onChange={hndleOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey',
                 color:props.mode==='light'?'black':'white'}}
                value={text} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpperCase}>Convert to uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowerCase}>Convert to uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
        </div>
        <div className="container my-4" style={{color:props.mode==='light'?'black':'white'}} >
            <h2>Your text summary</h2>
            <p>{text.split(' ').length} words and {text.length} characters</p>
            <p>Minutes to read = {0.008 * text.split(" ").length}</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter something in above text box to preview here'}</p>
        </div>
    </>
  )
}
