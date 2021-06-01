package com.boks.emotionalminutes.controller;

import com.boks.emotionalminutes.domain.bookmark.Bookmark;
import com.boks.emotionalminutes.service.BookmarkService;
import com.boks.emotionalminutes.web.dto.bookmark.BookmarkListResponseDto;
import com.boks.emotionalminutes.web.dto.bookmark.BookmarkRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class BookmarkController {
    private final BookmarkService bookmarkService;

    @GetMapping("/api/minutes/{minutesId}/bookmark")
    public List<BookmarkListResponseDto> findAll(@PathVariable Long minutesId) {
        return bookmarkService.findAll(minutesId);
    }

    @PostMapping("/api/bookmark")
    public Long save(@RequestBody BookmarkRequestDto requestDto) {
        return bookmarkService.save(requestDto);
    }

    @PutMapping("/api/bookmark/update/{bookmarkId}")
    public List<BookmarkListResponseDto> update(@PathVariable Long bookmarkId, @RequestBody String memo) {
        return bookmarkService.update(bookmarkId, memo);
    }

    @DeleteMapping("/api/bookmark/delete/{bookmarkId}")
    public List<BookmarkListResponseDto> delete(@PathVariable Long bookmarkId) {
        return bookmarkService.delete(bookmarkId);
    }
}
