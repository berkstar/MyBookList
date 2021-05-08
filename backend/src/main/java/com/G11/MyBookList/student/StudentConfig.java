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
            Student test = new Student(
							"Mahmut",
							"yo@gmail.com",
							LocalDate.of(2020, Month.AUGUST, 10),
							30
						);

            Student test2 = new Student(
                    "Memet",
                    "yoy@gmail.com",
                    LocalDate.of(2020, Month.AUGUST, 10),
                    31
            );

            repository.saveAll(List.of(test, test2));
        };
    }
}
