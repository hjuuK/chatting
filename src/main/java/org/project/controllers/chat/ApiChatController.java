package org.project.controllers.chat;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.project.commons.JSONData;
import org.project.entities.ChatRoom;
import org.project.models.chat.ChatMessageService;
import org.project.models.chat.ChatRoomSaveService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/chat")
@RequiredArgsConstructor
public class ApiChatController {
    private final ChatRoomSaveService roomSaveService;
    private final ChatMessageService messageService;

    public ResponseEntity<JSONData<List<ChatRoom>>> rooms() {
        return null;
    }

    @PostMapping("/room")
    public ResponseEntity<JSONData<ChatRoom>> registerRoom(@Valid @RequestBody ChatRoomForm form, Errors errors) {
        ChatRoom room = roomSaveService.save(form);
        HttpStatus status = HttpStatus.CREATED;

        JSONData<ChatRoom> data = new JSONData<>();
        data.setSuccess(true);
        data.setData(room);
        data.setStatus(status);

        return ResponseEntity.status(status).body(data);
    }

    @PostMapping("/message")
    public ResponseEntity<JSONData<Object>> registerMessage(@Valid @RequestBody ChatMessageForm form, Errors errors) {
        messageService.save(form);
        HttpStatus status = HttpStatus.CREATED;
        JSONData<Object> data = new JSONData<>();
        data.setSuccess(true);
        data.setStatus(status);

        return ResponseEntity.status(status).body(data);
    }
}
