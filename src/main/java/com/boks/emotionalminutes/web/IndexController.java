package com.boks.emotionalminutes.web;

import com.boks.emotionalminutes.config.auth.dto.SessionUser;
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

    @GetMapping("/main")
    public SessionUser loginPage(Model model) {
        SessionUser user = (SessionUser) httpSession.getAttribute("user");
        // if (user != null) {
        // model.addAttribute("userName", user.getName());
        // }
        return user;
    }

    @GetMapping("/api/check")
    public SessionUser check() {
        User user = User.builder().name("방규빈").email("rbqls1057@naver.com").build();
        return new SessionUser(user);
    }
}