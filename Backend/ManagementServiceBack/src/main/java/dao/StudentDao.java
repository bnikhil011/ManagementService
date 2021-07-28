package dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import model.Student;

public interface StudentDao extends JpaRepository<Student, Integer> {

}
