package com.prova.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.prova.entities.EnderecoEntity;

public interface EnderecoRepository extends JpaRepository<EnderecoEntity, Long> {
    
}
