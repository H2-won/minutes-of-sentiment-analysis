package com.boks.emotionalminutes.domain.participation;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ParticipationRepository extends JpaRepository<Participation, Long> {
    List<Participation> findAllByUserId(Long user_id);

    @Query("select p from Participation p where p.user.id=:user_id and p.meeting.code=:meeting_code")
    Optional<Participation> findByUserIdAndMeetingCode(@Param("user_id") Long user_id, @Param("meeting_code") String meeting_code);
}
