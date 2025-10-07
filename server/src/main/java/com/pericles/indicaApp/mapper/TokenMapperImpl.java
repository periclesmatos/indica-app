package com.pericles.indicaApp.mapper;

import com.pericles.indicaApp.dto.response.TokenResponse;
import org.springframework.stereotype.Component;

@Component
public class TokenMapperImpl implements TokenMapper {

    @Override
    public TokenResponse toResponse(String token, Long expiresIn) {
        return new TokenResponse(token, expiresIn);
    }

}
