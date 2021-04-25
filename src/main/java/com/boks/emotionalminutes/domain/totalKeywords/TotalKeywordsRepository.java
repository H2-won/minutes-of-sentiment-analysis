package com.boks.emotionalminutes.domain.totalKeywords;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TotalKeywordsRepository extends JpaRepository<TotalKeywords, Long> {
}
