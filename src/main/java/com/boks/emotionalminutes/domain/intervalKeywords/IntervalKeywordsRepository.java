package com.boks.emotionalminutes.domain.intervalKeywords;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IntervalKeywordsRepository extends JpaRepository<IntervalKeywords, Long> {
}
