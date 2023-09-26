package org.project.controllers.chat;

import jakarta.validation.constraints.NotBlank;
import lombok.Builder;

@Builder
public record ChatRoomForm( // getter, 생성자, toString, equalsAndHashCode 자동 추가
        Long roomNo,
        @NotBlank(message="채팅방 이름을 입력하세요.")
        String roomNm,
        int max) {}