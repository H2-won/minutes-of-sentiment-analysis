package com.boks.emotionalminutes.service;

import com.boks.emotionalminutes.domain.minutes.MinutesRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class MinutesService {
    private final MinutesRepository minutesRepository;
}
