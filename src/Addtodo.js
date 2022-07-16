import { useState } from 'react'
import { useForm } from 'react-hook-form'
function Addtodo({onFormSubmit}) {

    const { register,handleSubmit, formState: { errors } } = useForm()
    const[todos,setTodos]=useState([]);
    
    const onFormSubmit = (todoObj) => {
        setTodos([...todos,todoObj.todo]);

    };
    const removeElement=(index)=>
    {
        var array=todos;
        array.splice(index,1);
        setTodos([...array]);
        console.log(todos);
    }



    return (
        <div className="row row-11 row-sm-10 pt-3 ms-5 align-items-center">
           
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <div className="mb-3">
                    <label htmlFor="todo" className="mb-3" >
                        Enter a task
                    </label>
                    <input type="text" id="todo" className="form-control" {...register("todo", { required: true })} />
                    {/* validation erro msg for todo */}
                    {errors.todo?.type === 'required' && <p className='text-danger'>*Task is required</p>}
                </div>
                <button className="btn btn-info w-50" type="submit">Add todo</button>
            </form>
        </div>
    )
}

export default Addtodo;