package com.pericles.indicaApp.security;

import com.pericles.indicaApp.dto.response.TokenResponse;

public interface TokenService {
    TokenResponse generateToken(String email);
    String getSubject(String token);
}
