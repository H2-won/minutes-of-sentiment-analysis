package com.boks.emotionalminutes.service;


import com.boks.emotionalminutes.domain.participation.ParticipationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class ParticipationService {
    private final ParticipationRepository participationRepository;
}
