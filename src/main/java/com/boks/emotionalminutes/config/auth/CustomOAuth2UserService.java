package com.boks.emotionalminutes.config.auth;

import com.boks.emotionalminutes.config.auth.dto.OAuth2UserInfo;
import com.boks.emotionalminutes.domain.user.User;
import com.boks.emotionalminutes.domain.user.UserRepository;
import com.boks.emotionalminutes.security.UserPrincipal;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.InternalAuthenticationServiceException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import javax.servlet.http.HttpSession;
import java.security.AuthProvider;
import java.util.Collections;
import java.util.Map;
import java.util.Optional;

@Service
public class CustomOAuth2UserService extends DefaultOAuth2UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest oAuth2UserRequest) throws OAuth2AuthenticationException {
        OAuth2User oAuth2User = super.loadUser(oAuth2UserRequest);
        System.out.println("유저 정보 읽음");
        System.out.println(oAuth2User.getName());
        Map<String, Object> attributes = oAuth2User.getAttributes();
        for (String name :
                attributes.keySet()) {
            System.out.println(name + " : " + attributes.get(name));
        }

        try {
            System.out.println("유저 처리");
            return processOAuth2User(oAuth2User);
        } catch (AuthenticationException ex) {
            throw ex;
        } catch (Exception ex) {
            throw new InternalAuthenticationServiceException(ex.getMessage(), ex.getCause());
        }
    }

    private OAuth2User processOAuth2User(OAuth2User oAuth2User) {
        OAuth2UserInfo oAuth2UserInfo = new OAuth2UserInfo(oAuth2User.getAttributes());
        if(oAuth2UserInfo.getEmail().isEmpty()) {
            throw new RuntimeException("Email not found from OAuth2 provider");
        }

        Optional<User> userOptional = userRepository.findByEmail(oAuth2UserInfo.getEmail());
        System.out.printf("유저의 이메일(%s)이 이미 가입되어 있는지 확인함.\n", oAuth2UserInfo.getEmail());
        User user;
        if(userOptional.isPresent()) {
            System.out.println("이미 있다면 갱신(update)");
            user = userOptional.get();
            user = updateExistingUser(user, oAuth2UserInfo);
        } else {
            System.out.println("없다면 새로 등록(register)");
            user = registerNewUser(oAuth2UserInfo);
        }
        System.out.println("반환을 UserPrincipal로 함");
        return UserPrincipal.create(user, oAuth2User.getAttributes());
    }

    private User registerNewUser(OAuth2UserInfo oAuth2UserInfo) {
        return userRepository.save(User.builder()
                .name(oAuth2UserInfo.getName())
                .email(oAuth2UserInfo.getEmail())
                .build());
    }

    private User updateExistingUser(User existingUser, OAuth2UserInfo oAuth2UserInfo) {
        existingUser.update(oAuth2UserInfo.getName());
        return userRepository.save(existingUser);
    }

}
