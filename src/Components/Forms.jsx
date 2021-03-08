import React, { useState } from 'react'

const initialValue = {
    name: '',
    phone: '',
    email: ''
}

function Forms() {
    const [formValue, setFormValue] = useState(initialValue);
    const [firstTableValue, setFirstTableValue] = useState([]);
    const [secondTableValue, setSecondTableValue] = useState([]);
    const [selectedField, setSelectedField] = useState(firstTableValue || []);
    const [selectedList, setSelectedList] = useState([]);

    const getFirstTableData = React.useCallback(() => {
        const firstData = localStorage.getItem("data");
        setFirstTableValue(firstData !== null ? JSON.parse(firstData) : firstTableValue);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getSecondTableData = React.useCallback(() => {
        const secondData = localStorage.getItem("secondData");
        setSecondTableValue((secondData !== null || secondData !== [])  ? JSON.parse(secondData) : secondTableValue);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    React.useEffect(() => {
        getFirstTableData();
    }, [getFirstTableData])

    React.useEffect(() => {
        getSecondTableData();
    }, [getSecondTableData])

    const handleChange = (e) => {
        console.log(e.target.name)
        setFormValue((preValue) => {
            return {
                ...preValue,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("data", JSON.stringify([...firstTableValue, formValue]));
        setFormValue(initialValue);
        getFirstTableData();
    }

    const handleDelete = (data) => {
        const deleted = firstTableValue && firstTableValue.filter((items, index) => index === data).map(newItem => newItem)
        const remaining = firstTableValue && firstTableValue.filter((items, index) => index !== data).map(newItem => newItem)
        localStorage.setItem("data", JSON.stringify(remaining));
        localStorage.setItem("secondData", JSON.stringify([...secondTableValue, deleted[0]]));
        getFirstTableData();
        getSecondTableData();
    }

    const handlePermanentDelete =(data)=>{
        const deleted = secondTableValue && secondTableValue.filter((items,index)=> index !== data).map(data=> data);
        localStorage.setItem("secondData", deleted);
        getSecondTableData();
        console.log(deleted)
    }
    return (
        <>
            <div className="item formArea">
                <h1 className="heading">Add Details</h1>
                <form className="forms" onSubmit={(e) => handleSubmit(e)}>
                    <div className="formGroup">
                        <div className="fields">
                            <label className="labels">Name</label>
                            <input type="text" placeholder="Enter your name" value={formValue.name} name="name" onChange={(e) => handleChange(e)} />
                            {/* <div className="error-message">This field can't be empty</div> */}
                        </div>
                    </div>
                    <div className="formGroup">
                        <div className="fields">
                            <label className="labels">Phone</label>
                            <input type="text" name="phone" placeholder="Enter your phone number" value={formValue.phone} onChange={(e) => handleChange(e)} />
                            {/* <div className="error-message">This field can't be empty</div> */}
                        </div>
                    </div>
                    <div className="formGroup">
                        <div className="fields">
                            <label className="labels">Email</label>
                            <input type="text" placeholder="Enter your email address" name="email" value={formValue.email} onChange={(e) => handleChange(e)} />
                            {/* <div className="error-message">This field can't be empty</div> */}
                        </div>
                    </div>
                    <div className="formGroup">
                        <button className="btn right-btn">Submit</button>
                    </div>
                </form>
            </div>
            <div className="item table1">
                <table>
                    <thead>
                        <tr className="heading-row">
                            <th>S.N.</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {firstTableValue && firstTableValue.map((items,index) => {
                            return (
                                <tr className="data-row">
                                    <td>{index + 1}</td>
                                    <td>{items.name}</td>
                                    <td>{items.phone}</td>
                                    <td>{items.email}</td>
                                    <td>
                                        <div>
                                            <button className="btn btn-delete" type="button" onClick={()=> handleDelete(index)}>Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className="item table2">
                <table>
                    <thead>
                        <tr className="heading-row">
                            <th>S.N.</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    { secondTableValue && secondTableValue.map((items,index)=>{
                        return(
                        <tr className="data-row">
                            <td>{index + 1}</td>
                            <td>{items.name}</td>
                            <td>{items.phone}</td>
                            <td>{items.email}</td>
                            <td>
                                <div>
                                    <button className="btn btn-delete mr-2" type="button" onClick={()=> handlePermanentDelete(index)}>Delete</button>
                                    <button className="btn btn-delete">Restore</button>
                                </div>
                            </td>
                        </tr>)})}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Forms;
