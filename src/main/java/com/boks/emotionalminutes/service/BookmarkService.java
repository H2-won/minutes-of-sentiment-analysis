package com.boks.emotionalminutes.service;

import com.boks.emotionalminutes.domain.bookmark.BookmarkRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class BookmarkService {
    private final BookmarkRepository bookmarkRepository;
}
