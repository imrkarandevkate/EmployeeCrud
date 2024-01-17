package mypackage.controller;
import mypackage.model.*;
import mypackage.service.*;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin(origins="*",allowedHeaders = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE} )
public class EmployeeController {

	
	@Autowired
	EmployeeServices empservice;
	
	
	@GetMapping("api/employee")
	public List<Employee>GetAll(){
		return empservice.GetEmployees();
	}
	
	@GetMapping("api/employee/{id}")
	public Employee GetByID(@PathVariable("id")int id){
		return empservice.GetEmployeeByID(id);
	}
	
	@PostMapping("api/employee")
	public Employee AddEmployee(@RequestBody Employee e){
		return empservice.AddorUpdateEmployee(e);
	}	
	
	@PutMapping("api/employee")
	public Employee UpdateEmployee(@RequestBody Employee e){
		return empservice.AddorUpdateEmployee(e);
	}	
	
	@DeleteMapping("api/employee/{employee_id}")
	public Employee DeleteEmployeeByID(@PathVariable("employee_id")int id){
		return empservice.DeleteEmployee(id);
	}
}
