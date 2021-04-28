package com.boks.emotionalminutes.config.auth;

import lombok.RequiredArgsConstructor;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@RequiredArgsConstructor
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final CustomOAuth2UserService customOAuth2UserService;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable().headers().frameOptions().disable()
                .and().antMatcher("/**")
                .authorizeRequests()
                .antMatchers("/", "/loginPage", "/h2-console/**", "/favicon.ico", "/css/**", "/js/**", "/node_modules").permitAll()
                .anyRequest().authenticated()
                .and().logout().logoutSuccessUrl("/loginPage")
                .and().oauth2Login().userInfoEndpoint().userService(customOAuth2UserService);
    }
}
