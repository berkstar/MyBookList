package com.G11.MyBookList.challenge;

import java.time.LocalDate;

import java.time.Month;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ChallengeConfig {

    @Bean
    CommandLineRunner commandLineRunner(ChallengeRepository repository){

        return args->{
            Challenge test = new Challenge(
                    "Horror Challenge",
                    "type1",
                    LocalDate.of(2020, Month.AUGUST, 10)
            );

            private String challenge_name;
            private String type;
            private LocalDate due_date;

            Student test2 = new Student(
                    "HARDCORE",
                    "typee",
                    LocalDate.of(2020, Month.AUGUST, 13)
            );

            repository.saveAll(List.of(test, test2));
        };
    }
}