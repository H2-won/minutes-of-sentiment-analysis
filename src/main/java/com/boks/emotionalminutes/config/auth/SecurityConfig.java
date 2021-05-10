package com.boks.emotionalminutes.config.auth;

import com.boks.emotionalminutes.security.CustomUserDetailsService;
import com.boks.emotionalminutes.security.RestAuthenticationEntryPoint;
import com.boks.emotionalminutes.security.TokenAuthenticationFilter;
import com.boks.emotionalminutes.security.oauth2.HttpCookieOAuth2AuthorizationRequestRepository;
import com.boks.emotionalminutes.security.oauth2.OAuth2AuthenticationFailureHandler;
import com.boks.emotionalminutes.security.oauth2.OAuth2AuthenticationSuccessHandler;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.BeanIds;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@RequiredArgsConstructor
@EnableWebSecurity           // Spring Security 활성화
@EnableGlobalMethodSecurity( // SecurityMethod 활성화
        securedEnabled = true,
        jsr250Enabled = true,
        prePostEnabled = true
)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final CustomUserDetailsService customUserDetailsService;

    private final CustomOAuth2UserService customOAuth2UserService;

    private final OAuth2AuthenticationSuccessHandler oAuth2AuthenticationSuccessHandler;

    private final OAuth2AuthenticationFailureHandler oAuth2AuthenticationFailureHandler;

    private final HttpCookieOAuth2AuthorizationRequestRepository httpCookieOAuth2AuthorizationRequestRepository;

    @Bean
    public TokenAuthenticationFilter tokenAuthenticationFilter() {
        return new TokenAuthenticationFilter();
    }

    // Spring OAuth2는 HttpSessionOAuth2AuthorizationRequestRepository를 사용해서 권한 부여 요청을 저장하지만,
    // jwt를 사용하여 세션을 이용하지 않기때문에, 요청을 Base64로 인코딩하여 쿠키에 저장한다.
    @Bean
    public HttpCookieOAuth2AuthorizationRequestRepository cookieAuthorizationRequestRepository() {
        return new HttpCookieOAuth2AuthorizationRequestRepository();
    }

    // Authorization에 사용할 userDetailService와 password Encoder를 정의한다.
    @Override
    public void configure(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
        authenticationManagerBuilder
                .userDetailsService(customUserDetailsService);
//                .passwordEncoder(passwordEncoder());
    }

//    // Custom Security Config에서 사용할 password encoder를 BCryptPasswordEncoder로 정의
//    @Bean
//    PasswordEncoder passwordEncoder(){
//        return new BCryptPasswordEncoder();
//    }

    // AuthenticationManager 외부에서 사용하기 위해서, AuthenticationManagerBean을 이용하여
    // SpringSecurity 밖으로 Authentication을 빼 내야 한다. ( @Bean 설정 해야함 )
    // 단순히 @Autowired 사용하면 에러
    @Bean(BeanIds.AUTHENTICATION_MANAGER)
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .cors() // cors 허용
                .and()
                .sessionManagement() // session Creation Policy를 stateless 정의하여 session 사용 안함
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS) // 토큰 사용하기 위해
                .and()
                .csrf().disable()
                .formLogin().disable()
                .httpBasic().disable()
                .headers().frameOptions().disable()
                .and()
                .exceptionHandling().authenticationEntryPoint(new RestAuthenticationEntryPoint())
                .and().addFilterBefore(tokenAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class)
                .authorizeRequests()
                .antMatchers("/",
                        "/error",
                        "/favicon.ico",
                        "/**/*.png",
                        "/**/*.gif",
                        "/**/*.svg",
                        "/**/*.jpg",
                        "/**/*.html",
                        "/**/*.css",
                        "/**/*.js",
                        "/h2-console/**",
                        "/*.json").permitAll()
                .antMatchers("/auth/**", "/oauth2/**").permitAll()
                .anyRequest().authenticated()
                .and()
                .oauth2Login()
                .authorizationEndpoint()
                .baseUri("/oauth2/authorization") // client 에서 처음 로그인 시도 URI
                .authorizationRequestRepository(cookieAuthorizationRequestRepository())
                .and()
                .userInfoEndpoint()
                .userService(customOAuth2UserService)
                .and()
                .successHandler(oAuth2AuthenticationSuccessHandler)
                .failureHandler(oAuth2AuthenticationFailureHandler);

        // Add our custom Token based authentication filter
        // UsernamePasswordAuthenticationFilter 앞에 custom 필터 추가!
//        http.addFilterBefore(tokenAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class);
    }
}
