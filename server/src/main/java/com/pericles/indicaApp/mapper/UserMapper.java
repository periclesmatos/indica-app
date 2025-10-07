package com.pericles.indicaApp.mapper;

import com.pericles.indicaApp.dto.request.RegisterRequest;
import com.pericles.indicaApp.dto.response.UserResponse;
import com.pericles.indicaApp.model.User;

public interface UserMapper {
    User toEntity(RegisterRequest request);
    UserResponse toResponse(User user);
}
