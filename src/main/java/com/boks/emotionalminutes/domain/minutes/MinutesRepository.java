package com.boks.emotionalminutes.domain.minutes;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MinutesRepository extends JpaRepository<Minutes, Long> {
    @Query("select m from Minutes m order by m.id desc")
    List<Minutes> findAllDesc();

    Optional<Minutes> findByMeetingCode(String meeting_code);
}
