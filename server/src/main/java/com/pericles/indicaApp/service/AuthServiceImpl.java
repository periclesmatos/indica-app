package com.pericles.indicaApp.service;

import com.pericles.indicaApp.dto.request.LoginRequest;
import com.pericles.indicaApp.dto.request.RegisterRequest;
import com.pericles.indicaApp.dto.response.LoginResponse;
import com.pericles.indicaApp.dto.response.TokenResponse;
import com.pericles.indicaApp.dto.response.UserResponse;
import com.pericles.indicaApp.mapper.UserMapper;
import com.pericles.indicaApp.model.User;
import com.pericles.indicaApp.repository.UserRepository;
import com.pericles.indicaApp.security.TokenService;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;


import java.util.UUID;

import static java.lang.IO.println;

@Service
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private final UserMapper userMapper;
    private final TokenService tokenService;


    public AuthServiceImpl(UserRepository userRepository, BCryptPasswordEncoder passwordEncoder, UserMapper userMapper, TokenService tokenService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.userMapper = userMapper;
        this.tokenService = tokenService;
    }

    @Override
    public User findByEntityFromEmail(String email) {
        return userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("User not found"));
    }

    @Override
    public UserResponse register(RegisterRequest request, UUID referralCode) throws IllegalAccessException {
        int points = 100;

        if (userRepository.existsByEmail(request.email())) {
            throw new IllegalAccessException("Email já cadastrado.");
        }

        User newUser = userMapper.toEntity(request);

        if (referralCode != null) {
            User referrer = userRepository.findById(referralCode).orElseThrow(() -> new IllegalAccessException("Codigo de indicação invalido."));

            if (referrer.getEmail().equals(newUser.getEmail())) {
                throw new IllegalArgumentException("Auto indicação não permitida");
            }

            referrer.changePoints(points);
            userRepository.save(referrer);
        }

        User saved = userRepository.save(newUser);
        return userMapper.toResponse(saved);
    }

    @Override
    public LoginResponse login(LoginRequest request) {
        User user = findByEntityFromEmail(request.email());

        if (!passwordEncoder.matches(request.password(), user.getPassword())) {
            throw new BadCredentialsException("Senha incorreta");
        }

        TokenResponse tokenResponse = tokenService.generateToken(user.getEmail());
        UserResponse userResponse = userMapper.toResponse(user);
        return new LoginResponse(tokenResponse, userResponse);
    }

    @Override
    public UserResponse getCurrenteUser(Authentication authentication) {
        if (authentication == null || !authentication.isAuthenticated()) {
            throw new RuntimeException("Acesso negado");
        }

        String email = authentication.getName();
        User user = findByEntityFromEmail(email);
        return userMapper.toResponse(user);
    }

}
