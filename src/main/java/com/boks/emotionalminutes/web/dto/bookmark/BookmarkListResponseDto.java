package com.boks.emotionalminutes.web.dto.bookmark;

import lombok.Builder;
import lombok.Getter;

import java.sql.Time;
import java.text.SimpleDateFormat;

@Getter
public class BookmarkListResponseDto {
    private final Long bookmarkId;
    private final String userName;
    private final String memo;
    private final String createdTime;
    private final Long sentenceId;

    @Builder
    public BookmarkListResponseDto(Long bookmarkId, String userName, String memo, Time createdTime, Long sentenceId) {
        this.bookmarkId = bookmarkId;
        this.userName = userName;
        this.memo = memo;
        SimpleDateFormat format = new SimpleDateFormat("HH:mm:ss");
        this.createdTime = format.format(createdTime);
        this.sentenceId = sentenceId;
    }
}
