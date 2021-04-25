package com.boks.emotionalminutes.domain.totalEmotions;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TotalEmotionsRepository extends JpaRepository<TotalEmotions, Long> {
}
