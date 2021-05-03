package com.boks.emotionalminutes;

import com.boks.emotionalminutes.config.AppProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties(AppProperties.class)
public class EmotionalMinutesApplication {

    public static void main(String[] args) {
        SpringApplication.run(EmotionalMinutesApplication.class, args);
    }

}
