package com.pericles.indicaApp.dto.response;

public record LoginResponse(
        TokenResponse token,
        UserResponse user
) {
}
