package org.project.controllers.chat;

public record ChatRoomForm(Long roomNo, String roomNm, int max) {} // getter, 생성자, toString, equalsAndHashCode 자동 추가
