package com.mycomp.springreact.repositories;

import com.mycomp.springreact.model.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface ContactRepo extends JpaRepository <Contact, Integer> {
}
