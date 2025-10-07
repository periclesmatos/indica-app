package com.pericles.indicaApp.mapper;

import com.pericles.indicaApp.dto.response.TokenResponse;

public interface TokenMapper {
    TokenResponse toResponse(String token, Long expiresIn);
}
