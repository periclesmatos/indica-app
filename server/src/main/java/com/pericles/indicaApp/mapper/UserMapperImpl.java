package com.pericles.indicaApp.mapper;

import com.pericles.indicaApp.dto.request.RegisterRequest;
import com.pericles.indicaApp.dto.response.UserResponse;
import com.pericles.indicaApp.model.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class UserMapperImpl implements UserMapper {

    private final PasswordEncoder passwordEncoder;

    public UserMapperImpl(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public User toEntity(RegisterRequest request) {
        return new User(
                request.name(),
                request.email(),
                passwordEncoder.encode(request.password())
        );
    }

    @Override
    public UserResponse toResponse(User user) {
        return  new UserResponse(
                user.getId(),
                user.getEmail(),
                user.getName(),
                user.getPoints()
        );
    }

}
