package com.prova.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.prova.entities.ComprasEntity;

public interface ComprasRepository extends JpaRepository<ComprasEntity, Long> {
    
}
