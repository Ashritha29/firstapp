import React from 'react';
import {useForm} from 'react-hook-form';
function Form() {
  let{register,handleSubmit,formState:{errors}}=useForm();
  let Userdata=(userobj)=>{
    console.log(userobj)
  }
  return <div>
    <div className="display-1 text-info">User Registration Form</div>
    <form onSubmit={handleSubmit(Userdata)}>
        <div className='m-3'>
            <label className="form-label" htmlFor='un'>Enter Username</label>
            <input type="text" id="un" className="form-control w-25" {...register("un",{required:true})}/>
            {errors.un?.type==='required'&& <p className='text-danger'>Username required</p>}
        </div>
        <div className='m-3'>
            <label className="form-label" htmlFor='dob'>Enter Date of Birth</label>
            <input type="date" id="dob" className="form-control w-25" {...register("dob",{required:true})}/>
            {errors.un?.type==='required'&& <p className='text-danger'>Date of Birth required</p>}
        </div>
        <div className='m-3'>
            <label className="form-label" htmlFor='mail'>Enter Email</label>
            <input type="email" id="mail" className="form-control w-25" {...register("mail",{required:true})}/>
            {errors.un?.type==='required'&& <p className='text-danger'>Email required</p>}
        </div>
        <div className='m-3'>
            <label className="form-label" htmlFor='mf'>Gender</label>
            <div>
            <input type="radio" id="f" className="form-check-input" {...register("mf")}/>
            <label className="form-check-label" htmlFor='f'>Female</label>
            </div>
            <div>
            <input type="radio" id="m" className="form-check-input" {...register("mf")}/>
            <label className="form-check-label" htmlFor='m'>Male</label>
            </div>
        </div>
        <div className='m-3'>
            <label className="form-label" htmlFor='skill'>Select skills</label>
            <div>
               <input type="checkbox" id="1" className="form-input" {...register("skill")}/>
               <label className="form-label" htmlFor='1'>AI</label>
            </div>
            <div>
               <input type="checkbox" id="2" className="form-input" {...register("skill")}/>
               <label className="form-label" htmlFor='2'>Web Devolopment</label>
            </div>
        </div>
        <div className='m-3'>
            <label className="form-label" htmlFor="branch">Select branch</label>
            <select id="branch" {...register("branch")}>
                <option value="cse" className='form-label'>CSE</option>
                <option value="it" className='form-label'>IT</option>
                <option value="mech" className='form-label'>MECHANICAL</option>
                <option value="civil" className='form-label'>CIVIL</option>
                <option value="ece" className='form-label'>ECE</option>
            </select>
        </div>
        <div className='m-3'>
           <button type='submit' className='btn btn-info ms-5'>Submit</button>
        </div>
    </form>
  </div>;
}
export default Form;