package com.G11.MyBookList.student;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api/user")
public class ChallengeController {

    private final ChallengeService challengeService;

    @Autowired
    public ChallengeController(ChallengeService challengeService) {
        this.challengeService = challengeService;
    }

    @GetMapping(path = "/getAll")
    public ResponseEntity<List<Challenge>> getChallenge(@RequestHeader("Authorization") String token, Long id){
        // token servise sor token aktif mi
        return new ResponseEntity<>(challengeService.getChallenge(), HttpStatus.OK);
    }

    @GetMapping(path = "/getByUsernmPwd")
    public ResponseEntity<List<Student>> getStudents(String username, String passwd) {
        // if(UserService.login(username, passwd)) {
        //      return new ResponseEntity<List<Student>>(Null, HttpStatus.OK);
        // } else {
        //      return new ResponseEntity<List<Student>>(Null, HttpStatus.Unauthorized);
        // }

        return new ResponseEntity<>(studentService.getStudents(), HttpStatus.OK);
    }

    @GetMapping(path = "/getByUsernm")
    public ResponseEntity<List<Student>> getStudents(String username) {
        // if(UserService.login(username, passwd)) {
        //      return new ResponseEntity<List<Student>>(Null, HttpStatus.OK);
        // } else {
        //      return new ResponseEntity<List<Student>>(HttpStatus.UNAUTHORIZED);
        // }

        List<Student> list = studentService.getStudentsByName(username);
        if( list != null ) {
            return new ResponseEntity<>(list, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }



}
