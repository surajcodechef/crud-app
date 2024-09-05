import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const crud = () =>{

    const [inputVal,setInputVal] = useState({
        name :"",
        rollNo : ""
    })

    const [saveVal,setSaveVal] = useState([])

    const changeHandler = (e) =>{
        setInputVal({...inputVal,[e.target.name]:e.target.value})
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        setSaveVal([...saveVal,inputVal])
        console.log([...saveVal,inputVal])
      
    }

    const handleDelete = (index) =>{
       const filterData =  saveVal.filter((item,i)=> i !== index)
        setSaveVal(filterData)
    }

    return (
        <div className="crudApp">
            <div className="container">
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-12 mx-auto py-4">
                    <div className="card alert alert-success rounded-0">
                        <div className="card-body">
                            <form onSubmit={submitHandler}>
                                <div className="form-group">
                                        <label>Name</label>
                                        <input type="text" className="form-control" name="name" value={inputVal.name} onChange={changeHandler} placeholder="Enter your Name"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Roll No</label>
                                        <input type="number" className="form-control" name="rollNo" value={inputVal.rollNo} onChange={changeHandler} placeholder="Enter your Roll Number"/>
                                    </div>
                                    <div className="button-group pt-3">
                                        <button type="submit" className="btn btn-dark">Add</button>
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
                <div className="row">

                {
                    saveVal.map((items,i)=>(
                        <div key={i} className="col-xl-4 col-12">
                            <div className="card alert alert-warning shadow-sm">
                                <div className="card-body text-center">
                                    <h4>{items.rollNo}</h4>
                                    <h4>{items.name}</h4>
                                    <div className="mx-auto text-center">
                                        <button onClick={()=>handleDelete(i)} type="submit" className="btn btn-danger">X</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                   
                   
                </div>
            </div>
        </div>
    )
}


export default crud;