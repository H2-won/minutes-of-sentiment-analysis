package com.boks.emotionalminutes.service;

import com.boks.emotionalminutes.domain.bookmark.Bookmark;
import com.boks.emotionalminutes.domain.bookmark.BookmarkRepository;
import com.boks.emotionalminutes.domain.sentence.Sentence;
import com.boks.emotionalminutes.domain.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class BookmarkService {
    private final BookmarkRepository bookmarkRepository;

    @Transactional
    public Bookmark save(User user, Sentence sentence, String memo) {
        Bookmark bookmark = Bookmark.builder()
                .user(user)
                .sentence(sentence)
                .memo(memo)
                .build();

        bookmarkRepository.save(bookmark);
        return bookmark;
    }
}
