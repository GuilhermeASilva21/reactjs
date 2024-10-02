package com.prova.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.prova.entities.ClienteEntity;

public interface ClienteRepository extends JpaRepository<ClienteEntity, Long> {
    
}
