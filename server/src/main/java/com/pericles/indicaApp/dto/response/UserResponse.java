package com.pericles.indicaApp.dto.response;

import java.util.UUID;

public record UserResponse(
        UUID id,
        String email,
        String name,
        int points
) {
}
