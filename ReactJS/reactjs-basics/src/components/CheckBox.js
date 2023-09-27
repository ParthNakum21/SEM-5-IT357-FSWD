import React,{useState} from 'react';

function CheckBox() {
    //for checkbox state
    const [isChecked,setIsChecked] = useState(false); //state to track checkbox status

    const toggleCheckbox = () =>{
        setIsChecked(!isChecked); //toggle check box status
    }

    return(
        <div className='checkbox'>
            {/* Checkbox */}
            <br/>
            <lable>
                <input type='checkbox' checked={isChecked} onChange={toggleCheckbox}/>
                I agree to terms and Condition
            </lable> <br/><br/>
            {/* Button */}
            <button disabled={!isChecked} className='submit-button'>
                Submit</button>
            <br/><br/><br/>
        </div>
    );
}

export default CheckBox;