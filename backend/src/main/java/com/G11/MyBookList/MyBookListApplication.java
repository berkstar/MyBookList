package com.G11.MyBookList;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2
public class MyBookListApplication {

	public static void main(String[] args) {
		SpringApplication.run(MyBookListApplication.class, args);
	}

}
