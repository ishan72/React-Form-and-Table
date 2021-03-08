import React from 'react'

function Forms() {
    return (
        <>
            <div className="item formArea">
                <h1 className="heading">Add Details</h1>
                <form className="forms">
                    <div className="formGroup">
                        <div className="fields">
                            <label className="labels">Name</label>
                            <input type="text" placeholder="Enter your name" /><span></span>
                        </div>
                    </div>
                    <div className="formGroup">
                        <div className="fields">
                            <label className="labels">Phone</label>
                            <input type="text" placeholder="Enter your phone number" /><span></span>
                        </div>
                    </div>
                    <div className="formGroup">
                        <div className="fields">
                            <label className="labels">Email</label>
                            <input type="text" placeholder="Enter your email address" /><span></span>
                        </div>
                    </div>
                    <div className="formGroup">
                        <button className="btn right-btn">Submit</button>
                    </div>
                </form>
            </div>
            <div className="item table1">
                <table>
                    <tr className="heading-row">
                        <th>S.N.</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                    <tr className="data-row">
                        <td>1</td>
                        <td>Ram</td>
                        <td>9843595174</td>
                        <td>chelseaishan@gmail.com</td>
                        <td>Actions</td>
                    </tr>
                </table>
            </div>
            <div className="item table2">
                <table>
                    <tr className="heading-row">
                        <th>S.N.</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                    <tr className="data-row">
                        <td>1</td>
                        <td>Ram</td>
                        <td>9843595174</td>
                        <td>chelseaishan@gmail.com</td>
                        <td>Actions</td>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default Forms;
