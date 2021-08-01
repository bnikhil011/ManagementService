package services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import dao.StudentDao;
import model.Student;
@Service
public class StudentService {
	@Autowired
	private StudentDao studentDao;
	
	public List<Student>findAllStudents()
	{
		return (List<Student>) studentDao.findAll();
	}
	public Optional<Student> findStudent(int id )
	{
		return studentDao.findById(id);
	}
	public Student saveStudent(Student student)
	{
		return studentDao.save(student);
	}
	public Student updateStudent(Student student)
	{
		return studentDao.save(student);
	}
	public void deleteStudent(Student student)
	{
		studentDao.delete(student);
	}
}
