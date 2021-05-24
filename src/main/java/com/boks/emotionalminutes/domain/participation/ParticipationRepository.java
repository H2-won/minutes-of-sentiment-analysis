package com.boks.emotionalminutes.domain.participation;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ParticipationRepository extends JpaRepository<Participation, Long> {
    List<Participation> findAllByUserId(Long user_id);

    Optional<Participation> findByUserIdAndMeetingCode(Long user_id, String meeting_code);
}
