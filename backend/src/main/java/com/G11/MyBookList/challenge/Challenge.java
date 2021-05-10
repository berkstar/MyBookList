package com.G11.MyBookList.challenge;

import java.time.LocalDate;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Challenge
 */
@Entity
@Table
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long chal_id;
    private String challenge_name;
    private String type;
    private LocalDate due_date;

    public Student() {
    }

    public Student(Long chal_id, String challenge_name, String type, LocalDate due_date) {
        this.chal_id = chal_id;
        this.challenge_name = challenge_name;
        this.type = type;
        this.due_date = due_date;
    }

    public Student(String challenge_name, String type, LocalDate due_date) {
        this.challenge_name = challenge_name;
        this.type = type;
        this.due_date = due_date;
    }

    public Long getChal_id() {
        return chal_id;
    }

    public void setChal_id(Long chal_id) {
        this.chal_id = chal_id;
    }

    public String getChallenge_name() {
        return challenge_name;
    }

    public void setChallenge_name(String challenge_name) {
        this.challenge_name = challenge_name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public LocalDate getDue_date() {
        return due_date;
    }

    public void setDue_date(LocalDate due_date) {
        this.due_date = due_date;
    }

    @java.lang.Override
    public java.lang.String toString() {
        return "Student{" +
                "chal_id=" + chal_id +
                ", challenge_name='" + challenge_name + '\'' +
                ", type='" + type + '\'' +
                ", due_date=" + due_date +
                '}';
    }
}
