package mypackage.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "employee_data")
public class Employee {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int employee_id;
	private String employee_name;
	private String employee_email;
	private String employee_mobile;
	private String department;
	private Float salary;
	private String Address;
	private String employee_dob;
	
	public Employee() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Employee(int employee_id, String employee_name, String employee_email, String employee_mobile,
			String department, Float salary, String address, String employee_dob) {
		super();
		this.employee_id = employee_id;
		this.employee_name = employee_name;
		this.employee_email = employee_email;
		this.employee_mobile = employee_mobile;
		this.department = department;
		this.salary = salary;
		Address = address;
		this.employee_dob = employee_dob;
	}
	public int getEmployee_id() {
		return employee_id;
	}
	public void setEmployee_id(int employee_id) {
		this.employee_id = employee_id;
	}
	public String getEmployee_name() {
		return employee_name;
	}
	public void setEmployee_name(String employee_name) {
		this.employee_name = employee_name;
	}
	public String getEmployee_email() {
		return employee_email;
	}
	public void setEmployee_email(String employee_email) {
		this.employee_email = employee_email;
	}
	public String getEmployee_mobile() {
		return employee_mobile;
	}
	public void setEmployee_mobile(String employee_mobile) {
		this.employee_mobile = employee_mobile;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	public Float getSalary() {
		return salary;
	}
	public void setSalary(Float salary) {
		this.salary = salary;
	}
	public String getAddress() {
		return Address;
	}
	public void setAddress(String address) {
		Address = address;
	}
	public String getEmployee_dob() {
		return employee_dob;
	}
	public void setEmployee_dob(String employee_dob) {
		this.employee_dob = employee_dob;
	}	
}
