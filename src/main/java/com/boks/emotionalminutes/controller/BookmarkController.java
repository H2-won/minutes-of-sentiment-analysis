package com.boks.emotionalminutes.controller;

import com.boks.emotionalminutes.domain.bookmark.Bookmark;
import com.boks.emotionalminutes.domain.sentence.Sentence;
import com.boks.emotionalminutes.domain.user.User;
import com.boks.emotionalminutes.service.BookmarkService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class BookmarkController {
    private final BookmarkService bookmarkService;

    @PostMapping("/api/bookmark")
    public Bookmark save(@RequestParam("user_id") User user,
                         @RequestParam("sentence_id") Sentence sentence,
                         @RequestParam("memo") String memo) {

        return bookmarkService.save(user, sentence, memo);
    }
}
