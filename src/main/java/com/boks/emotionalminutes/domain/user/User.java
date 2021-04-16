package com.boks.emotionalminutes.domain.user;

import com.boks.emotionalminutes.domain.Participation;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
public class User {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String email;

    @Builder
    public User(String name, String email) {
        this.name = name;
        this.email = email;
    }

    public User update(String name) {
        this.name = name;

        return this;
    }
}
