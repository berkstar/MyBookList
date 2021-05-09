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
    @Query(value="SELECT * FROM Student WHERE name = :name", nativeQuery=true)
    List<Student> findByName(String name);
}