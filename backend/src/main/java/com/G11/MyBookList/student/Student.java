package com.G11.MyBookList.student;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Student
 */
@Entity
@Table(name ="student")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long user_id;
    @Column(unique = true)
    private String user_name;
    @Column(unique = true)
    private String email;
    private String name;
    private String biography;
    private String password;
    
    public Student(){
    }

    

    

    public Student(String user_name, String email, String name, String biography, String password) {
        this.user_name = user_name;
        this.email = email;
        this.name = name;
        this.biography = biography;
        this.password = password;
    }





    public Long getUser_id() {
        return user_id;
    }




    public void setUser_id(Long user_id) {
        this.user_id = user_id;
    }




    public String getUser_name() {
        return user_name;
    }




    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }




    public String getEmail() {
        return email;
    }




    public void setEmail(String email) {
        this.email = email;
    }




    public String getName() {
        return name;
    }




    public void setName(String name) {
        this.name = name;
    }




    public String getBiography() {
        return biography;
    }




    public void setBiography(String biography) {
        this.biography = biography;
    }






    public String getPassword() {
        return password;
    }




    public void setPassword(String password) {
        this.password = password;
    }




    @Override
    public String toString() {
        return "Student [biography=" + biography + ", email=" + email + ", name=" + name + ", password=" + password
                + ", user_id=" + user_id + ", user_name=" + user_name + "]";
    }






    
    
    
}