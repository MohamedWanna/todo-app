import React,{useState,useEffect,useRef} from 'react';

function Addtask(props) {
const [input,setInput] = useState(props.edit ? props.edit.value : '' );

const inputRef = useRef (null)
useEffect(() => {
  inputRef.current.focus()
})

const handleChange = e => {
    setInput(e.target.value);
};

const handleSubmit = e => {
    e.preventDefault();

   props.onSubmit({
        id: Math.floor(Math.random() * 10000),
       text: input
  });
    setInput('');
};
  return (

<form className='task-form' onSubmit={handleSubmit}>
 {props.edit ? (
  <>
 <input 
    type="text"
     placeholder='Update'
     value={input} 
     name="text" 
     className='task-input edit'
     onChange={handleChange}
     ref={inputRef}
     />
    <button className='task-button edit'>Update</button>
    </> 
    ) :
    (
    <>
    <input 
      type="text"
       placeholder='Add a new task'
       value={input} 
       name="text" 
       className='task-input'
       onChange={handleChange}
       ref={inputRef}
       />
      <button className='task-button'>Add task</button>
      </>
      )
      }   
  </form>


  );
}

export default Addtask