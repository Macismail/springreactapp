package com.mycomp.springreact.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Data
public class Contact {
  @Id
  @GeneratedValue
  private int id;
  private String firstname;
  private String lastname;
  private String email;

  public Contact() {
  }

  public Contact(int id, String firstname, String lastname, String email) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
  }
}
