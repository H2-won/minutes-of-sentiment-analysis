package com.boks.emotionalminutes.domain.minutes;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MinutesRepository extends JpaRepository<Minutes, Long> {
}
