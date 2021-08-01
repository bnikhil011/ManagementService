package controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dao.StudentDao;
import model.Student;
import services.StudentService;

@RestController
@RequestMapping("/students")
public class StudentController {
	@Autowired
	StudentService studentService;
	
	@GetMapping("/getAll")
	public List<Student> getstudents()
	{
		return studentService.findAllStudents();
	}
	@GetMapping("/get/{id}")
	public Optional<Student> getStudent(@PathVariable int id)
	{
		return studentService.findStudent(id);
	}
	@PostMapping("/add")
	public Student addStudent(@RequestBody Student student)
	{
		
		return studentService.saveStudent(student);
	}
	
	@PutMapping("/update")
	public Student UpdateStudent(@RequestBody Student student)
	{
		return studentService.updateStudent(student);
	}
	@DeleteMapping("/delete/{id}")
	public void DeleteStudent(@PathVariable int id)
	{
		System.out.print("Delete Service Called");
		Student student = new Student();
		student.setId(id);
		studentService.deleteStudent(student);
	}
}
