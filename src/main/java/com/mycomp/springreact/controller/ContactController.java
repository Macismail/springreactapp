package com.mycomp.springreact.controller;

import com.mycomp.springreact.model.Contact;
import com.mycomp.springreact.repositories.ContactRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URISyntaxException;
import java.util.Collection;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ContactController {

  @Autowired
  private ContactRepo contactRepo;

  @GetMapping("/contacts")
  Collection <Contact> getContacts(){
    return (Collection <Contact>) contactRepo.findAll();
  }

  @PostMapping("/addcontact")
  ResponseEntity<Contact> createContact (@Valid @RequestBody Contact contact) throws URISyntaxException {
    Contact result =  contactRepo.save(contact);
    return ResponseEntity.ok().body(result);
  }

}
