package mypackage.service;
import mypackage.model.*;
import mypackage.Repository.*;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeServices {

	
	@Autowired	
	EmployeeRepository emprepo;
	
	
	public List<Employee> GetEmployees(){
		return emprepo.findAll();
	}

	public Employee AddorUpdateEmployee(Employee e) {
		return emprepo.save(e);
	}
	
	public Employee GetEmployeeByID(int id){
		return emprepo.findById(id).get();
	}
	
	public Employee DeleteEmployee(int id) {
		Employee e =GetEmployeeByID(id);
		emprepo.delete(e);
		return e;
	}
	
	
}
