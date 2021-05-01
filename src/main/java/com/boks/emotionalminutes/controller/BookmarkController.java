package com.boks.emotionalminutes.controller;

import com.boks.emotionalminutes.domain.bookmark.Bookmark;
import com.boks.emotionalminutes.service.BookmarkService;
import com.boks.emotionalminutes.web.dto.bookmark.BookmarkRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class BookmarkController {
    private final BookmarkService bookmarkService;

    @PostMapping("/api/bookmark")
    public Bookmark save(@RequestBody BookmarkRequestDto requestDto) {
        return bookmarkService.save(requestDto);
    }
}
