package com.example.security;
import com.auth0.jwt.JWT;
import com.auth0.jwt.interfaces.DecodedJWT;
import org.springframework.stereotype.Component;

@Component
public class JwtUtil {

    public String extractUserId(String token) {
        DecodedJWT jwt = JWT.decode(token);
        return jwt.getSubject(); 
    }
}