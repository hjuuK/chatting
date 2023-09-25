package org.project.controllers.chat;

import jakarta.validation.constraints.NotBlank;
import lombok.Builder;
import lombok.NonNull;

@Builder
public record ChatRoomForm( // getter, 생성자, toString, equalsAndHashCode 자동 추가
        @NotBlank
        Long roomNo,
        @NotBlank
        String roomNm,
        @NonNull
        int max) {}