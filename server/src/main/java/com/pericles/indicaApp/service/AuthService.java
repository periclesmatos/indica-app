package com.pericles.indicaApp.service;

import com.pericles.indicaApp.dto.request.LoginRequest;
import com.pericles.indicaApp.dto.request.RegisterRequest;
import com.pericles.indicaApp.dto.response.LoginResponse;
import com.pericles.indicaApp.dto.response.UserResponse;
import com.pericles.indicaApp.model.User;
import org.springframework.security.core.Authentication;

import java.util.UUID;

public interface AuthService {
    User findByEntityFromEmail(String email);
    UserResponse register(RegisterRequest request, UUID referalCode) throws IllegalAccessException;
    LoginResponse login(LoginRequest request);
    UserResponse getCurrenteUser(Authentication authentication);
}
