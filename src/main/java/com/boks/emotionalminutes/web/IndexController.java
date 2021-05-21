package com.boks.emotionalminutes.web;

import com.boks.emotionalminutes.domain.user.User;
import com.boks.emotionalminutes.domain.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

@RequiredArgsConstructor
@Controller
public class IndexController {

    private final HttpSession httpSession;
    private final UserRepository userRepository;
    boolean flag = false;

     @GetMapping("/")
     public String index() {
         if (!flag) {
             User user = User.builder()
                     .name("남기복")
                     .email("nkb7714@naver.com")
                     .build();
             userRepository.save(user);
             flag = true;
         }
     return "index2";
     }

//    @GetMapping("/test/go/main")
//    public String index() {
//        return "index2";
//    }
}