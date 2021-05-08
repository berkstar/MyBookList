package com.G11.MyBookList.student;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * StudentRepository
 */
@Repository
public interface StudentRepository extends JpaRepository<Student, Long>{
    @Query("SELECT s FROM Student s WHERE s.name = ?1")
    List<Student> findByName(String name);
}