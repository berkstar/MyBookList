package com.G11.MyBookList.student;

import java.time.LocalDate;

import java.time.Month;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class StudentConfig {
    
    @Bean
    CommandLineRunner commandLineRunner(StudentRepository repository){

        return args->{
            Student test = new Student("user_name", "email", "name", "biography", "password");

            repository.save(test);
        };
    }
}
