import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

export const Home = () => {
    const [getStudent, setStudent] = useState([]);
    const [showUpdateButton, setUpdateButton] = useState(false);
    const [showAddButton, setAddButton] = useState(true);
    useEffect(function () {
        GetEmployee();
        setUpdateButton(false);
        setAddButton(true);
    }, []);

    const employee_id = useRef();
    const employee_name = useRef();
    const employee_email = useRef();
    const employee_mobile = useRef();
    const employee_department = useRef();
    const salary = useRef();
    const employee_dob = useRef();
    const employee_address = useRef();

    const GetEmployee = () => {
        axios({
            url: "http://localhost:9092/api/employee",
            method: 'get',
            contentType: 'application/json',
        }).then(e => {
            setStudent(e.data)
        })
    }
    const AddEmployee = () => {
        var ename = employee_name.current.value
        var eemail = employee_email.current.value
        var emobile = employee_mobile.current.value
        var edepartment = employee_department.current.value
        var esalary = salary.current.value
        var edob = employee_dob.current.value;
        var eaddress = employee_address.current.value
        var employeeData = { "employee_name": ename, "employee_email": eemail, "employee_mobile": emobile, "department": edepartment, "salary": esalary, "employee_dob": edob, "address": eaddress };
        axios({
            url: "http://localhost:9092/api/employee",
            method: 'post',
            data: employeeData,
        }).then(e => {
            alert("Employee Added Successfully");
            GetEmployee();

        })

    }

    const ViewEmployee = (d) => {
        setUpdateButton(true);
        setAddButton(false);
        employee_id.current.value = d.employee_id;
        employee_name.current.value = d.employee_name;
        employee_email.current.value = d.employee_email;
        employee_mobile.current.value = d.employee_mobile;
        employee_department.current.value = d.department;
        salary.current.value = d.salary;
        employee_dob.current.value = d.employee_dob;
        employee_address.current.value = d.address;
    }

    const UpdateEmployee = () => {
        var eid = employee_id.current.value;
        var ename = employee_name.current.value;
        var eemail = employee_email.current.value;
        var emobile = employee_mobile.current.value;
        var edepartment = employee_department.current.value;
        var esalary = salary.current.value;
        var edob = employee_dob.current.value || new Date().toLocaleString();
        var eaddress = employee_address.current.value;
        var employeeData = { "employee_id": eid, "employee_name": ename, "employee_email": eemail, "employee_mobile": emobile, "department": edepartment, "salary": esalary, "employee_dob": edob, "address": eaddress };
        axios({
            url: "http://localhost:9092/api/employee",
            method: 'put',
            data: employeeData,
        }).then(e => {
            alert("Employee Updated Successfully");
            GetEmployee();
        })
    }

    const DeleteEmployee = (id) => {
        axios({
            url: "http://localhost:9092/api/employee/" + id,
            method: "Delete",
            contentType: 'application/json',
        }).then(e => {
            alert("Employee Delete Successfully");
            GetEmployee();

        })
    }

    const clearData = () => {
        employee_id.current.value = ""
        employee_name.current.value = ""
        employee_email.current.value = ""
        employee_mobile.current.value = ""
        employee_department.current.value = ""
        salary.current.value = ""
        employee_dob.current.value = ""
        employee_address.current.value = ""
    }

    return (
        <div>
            <div className="container-fluid" >
                <div className="row mt-1 d-flex">
                    <div className="text-center pt-2 bg-light text-dark " style={{ boxShadow: "3px 3px 3px #888888" }}>
                        <h4 className="bg-light text-dark p-2">Employee Management System</h4>
                    </div>
                    <hr />
                    <div className="text-end">
                        <button className="btn btn-primary" data-bs-toggle="modal" href="#myModal" >Add Employee</button>
                    </div>
                </div>
                <div className="row">
                    <div id="myModal" class="modal fade" role="dialog">
                        <div class="modal-dialog modal-xl ">
                            {/* <!-- Modal content--> */}
                            <div class="modal-content ">
                                <div class="modal-header bg-primary">
                                    <h4 class="modal-title mr-auto text-white">Add Employee</h4>
                                    <button type="button" class="close btn btn-danger" data-bs-dismiss="modal">&times;</button>
                                </div>
                                <div class="modal-body ">
                                    <div className="row ">
                                        <div class="col-md-4 " disabled hidden >
                                            <div class="form-group" >
                                                <input class="form-control" ref={employee_id}
                                                    type="number" />
                                            </div>
                                        </div>
                                        <div class="col-md-4 ">
                                            <div class="form-group">
                                                <label>Employee Name</label>
                                                <input class="form-control" ref={employee_name}
                                                    type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-4 ">
                                            <div class="form-group">
                                                <label>Email Address</label>
                                                <input type="text" ref={employee_email}
                                                    class="form-control" />
                                            </div>
                                        </div>
                                        <div class="col-md-4 ">
                                            <div class="form-group">
                                                <label>Mobile Number</label>
                                                <input class="form-control" ref={employee_mobile}
                                                    type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row ">
                                        <div class="col-md-4 ">
                                            <div class="form-group ">
                                                <label>Department:</label> &nbsp;<br />
                                                <select ref={employee_department} className="mt-2 p-1" >
                                                    <option selected disabled>Select Department</option>
                                                    <option value="Manager">Manager</option>
                                                    <option value="Employee">Employee</option>
                                                    <option value="Trainer">Trainer</option>

                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-4 ">
                                            <div class="form-group">
                                                <label>Salary</label>
                                                <input type="text" ref={salary}
                                                    class="form-control" />
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Date Of Birth</label>
                                                <input class="form-control" ref={employee_dob}
                                                    type="date" />
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="col-md-4 ">
                                            <div class="form-group">
                                                <label>Address</label>
                                                <textarea ref={employee_address}
                                                    class="form-control" style={{ resize: "none" }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="modal-footer">
                                    <button type="button" class="btn btn-danger close"
                                        onClick={() => clearData()}>Clear</button>
                                    {showAddButton && (<button type="button" class="btn btn-default btn-primary" id="btnadd"
                                        data-bs-dismiss="modal" onClick={() => AddEmployee()}>Add
                                    </button>)}

                                    {showUpdateButton && (<button type="button" class="btn btn-default btn-primary" id="btnupdate"
                                        data-bs-dismiss="modal" onClick={() => UpdateEmployee()}>Update
                                    </button>)}
                                </div>

                            </div>

                        </div>

                    </div>
                </div >
                <div className="col-md-12 mt-3">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Employee_id</th>
                                <th>Employee_name</th>
                                <th>Employee_email</th>
                                <th>Employee_mobile</th>
                                <th>Employee_department</th>
                                <th>Employee_salary</th>
                                <th>Employee_address</th>
                                <th>Employee_dob</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                getStudent.map((d, k) => (
                                    <tr key={k}>
                                        <td>{d.employee_id}</td>
                                        <td>{d.employee_name}</td>
                                        <td>{d.employee_email}</td>
                                        <td>{d.employee_mobile}</td>
                                        <td>{d.department}</td>
                                        <td>{d.salary}</td>
                                        <td>{d.address}</td>
                                        <td>{d.employee_dob}</td>
                                        <td>
                                            <input type="button" className="btn btn-info" value="View" href="#myModal" data-bs-toggle="modal" onClick={() => ViewEmployee(d)} /> &nbsp;
                                            <input type="button" className="btn btn-danger" value="Delete" onClick={() => DeleteEmployee(d.employee_id)} />
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div >
        </div>
    )
}