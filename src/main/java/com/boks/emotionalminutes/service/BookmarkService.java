package com.boks.emotionalminutes.service;

import com.boks.emotionalminutes.domain.bookmark.Bookmark;
import com.boks.emotionalminutes.domain.bookmark.BookmarkRepository;
import com.boks.emotionalminutes.domain.sentence.Sentence;
import com.boks.emotionalminutes.domain.sentence.SentenceRepository;
import com.boks.emotionalminutes.domain.user.User;
import com.boks.emotionalminutes.domain.user.UserRepository;
import com.boks.emotionalminutes.web.dto.bookmark.BookmarkRequestDto;
import com.boks.emotionalminutes.web.dto.bookmark.BookmarkResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@RequiredArgsConstructor
@Service
public class BookmarkService {
    @Autowired
    private final BookmarkRepository bookmarkRepository;

    @Autowired
    private final UserRepository userRepository;

    @Autowired
    private final SentenceRepository sentenceRepository;

    @Transactional
    public Long save(BookmarkRequestDto requestDto) {
        User user = userRepository.findById(requestDto.getUserId()).get();
        Sentence sentence = sentenceRepository.findById(requestDto.getSentenceId()).get();
        Bookmark bookmark = Bookmark.builder()
                .user(user)
                .sentence(sentence)
                .memo(requestDto.getMemo())
                .build();
        return bookmarkRepository.save(bookmark).getId();
    }

    @Transactional
    public Long update(Long id, String memo) {
        Bookmark bookmark = bookmarkRepository.findById(id).get();
        bookmark.setMemo(memo);
        return id;
    }

    @Transactional
    public void delete(Long id) {
        Bookmark bookmark = bookmarkRepository.findById(id).get();
        bookmark.getUser().getBookmarks().remove(bookmark);
        bookmark.getSentence().setBookmark(null);
        bookmarkRepository.deleteById(id);
    }
}
