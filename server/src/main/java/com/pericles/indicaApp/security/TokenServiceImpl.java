package com.pericles.indicaApp.security;

import com.pericles.indicaApp.dto.response.TokenResponse;
import com.pericles.indicaApp.mapper.TokenMapper;
import org.springframework.security.oauth2.jwt.*;
import org.springframework.stereotype.Service;

import java.time.Instant;

@Service
public class TokenServiceImpl implements TokenService {

    private final JwtEncoder jwtEncoder;
    private final JwtDecoder jwtDecoder;
    private final TokenMapper  tokenMapper;

    public TokenServiceImpl(JwtEncoder jwtEncoder, JwtDecoder jwtDecoder, TokenMapper tokenMapper) {
        this.jwtEncoder = jwtEncoder;
        this.jwtDecoder = jwtDecoder;
        this.tokenMapper = tokenMapper;
    }

    @Override
    public TokenResponse generateToken(String email) {
        try {
            var now = Instant.now();
            var expiresIn = 300L;
            var claims = JwtClaimsSet.builder()
                    .issuer("indica-app")
                    .subject(email)
                    .issuedAt(now)
                    .expiresAt(now.plusSeconds(expiresIn))
                    .build();
            var jwtValue = jwtEncoder.encode(JwtEncoderParameters.from(claims)).getTokenValue();
            return tokenMapper.toResponse(jwtValue, expiresIn);
        } catch ( JwtEncodingException exception) {
            throw new RuntimeException("Erro ao gerar token JWT", exception);
        }
    }

    @Override
    public String getSubject(String token) {
        try {
            var jwtValue = jwtDecoder.decode(token);
            return jwtValue.getSubject();
        } catch (JwtException exception) {
            throw new RuntimeException("Token inválido ou expirado", exception);
        }
    }

}
