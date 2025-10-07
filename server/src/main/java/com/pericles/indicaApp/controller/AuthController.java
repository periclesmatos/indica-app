package com.pericles.indicaApp.controller;

import com.pericles.indicaApp.dto.request.LoginRequest;
import com.pericles.indicaApp.dto.request.RegisterRequest;
import com.pericles.indicaApp.dto.response.LoginResponse;
import com.pericles.indicaApp.dto.response.TokenResponse;
import com.pericles.indicaApp.dto.response.UserResponse;
import com.pericles.indicaApp.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.UUID;

import static java.lang.IO.println;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public ResponseEntity<UserResponse> register(@RequestBody RegisterRequest request, @RequestParam(required = false) UUID referralCode, UriComponentsBuilder uriComponentsBuilder) throws IllegalAccessException {
        println(referralCode);
        UserResponse response = authService.register(request, referralCode);
        URI location = uriComponentsBuilder.path("/users/{id}").buildAndExpand(response.id()).toUri();
        return ResponseEntity.created(location).body(response);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) throws IllegalAccessException {
        LoginResponse response = authService.login(request);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/currentUser")
    public ResponseEntity<UserResponse> getCurrenteUser(Authentication authentication) throws IllegalAccessException {
        UserResponse response = authService.getCurrenteUser(authentication);
        return ResponseEntity.ok(response);
    }

}
