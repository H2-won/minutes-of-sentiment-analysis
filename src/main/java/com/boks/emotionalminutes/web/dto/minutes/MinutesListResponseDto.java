package com.boks.emotionalminutes.web.dto.minutes;

import com.boks.emotionalminutes.domain.minutes.Minutes;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.text.SimpleDateFormat;
import java.util.Date;

@Getter
@NoArgsConstructor
public class MinutesListResponseDto {
    private Long id;
    private String title;
    private String host;
    private String createdDate;

    @Builder
    public MinutesListResponseDto(Long id, String title, String host, Date createdDate) {
        this.id = id;
        this.title = title;
        this.host = host;
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        this.createdDate = format.format(createdDate);
    }
}
