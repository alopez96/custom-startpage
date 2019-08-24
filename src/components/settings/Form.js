import React, {useState} from 'react';

function Form({addLink}){
    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return;
        addLink(value);
        setValue('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={value}
            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
            onChange={e => setValue(e.target.value)} placeholder='add link'>                
            </input>
        </form>
    )
}

export default Form;