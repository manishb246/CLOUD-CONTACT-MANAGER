package com.example.controller;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.dto.ContactDTO;
import com.example.service.ContactService;

@RestController
@RequestMapping("/api/contacts")
public class ContactController {

    private final ContactService service;

    public ContactController(ContactService service) {
        this.service = service;
    }

 
    @PostMapping("/add")
    public ResponseEntity<ContactDTO> add(@RequestBody ContactDTO contactDTO) {
        return ResponseEntity.ok(service.addContact(contactDTO));
    }

   
    @GetMapping("/show")
    public ResponseEntity<List<ContactDTO>> getAll() {
        return ResponseEntity.ok(service.showAllContact());
    }

   
    @GetMapping("/show/{id}")
    public ResponseEntity<ContactDTO> getById(@PathVariable Long id) {
        return ResponseEntity.ok(service.showContactById(id));
    }

    
    @GetMapping("/search")
    public ResponseEntity<List<ContactDTO>> search(@RequestParam String name) {
        return ResponseEntity.ok(service.showContactByName(name));
    }

 
    @PutMapping("/update/{id}")
    public ResponseEntity<ContactDTO> update(
            @PathVariable Long id,
            @RequestBody ContactDTO contactDTO) {

        return ResponseEntity.ok(service.updateContactById(id, contactDTO));
    }

   
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<ContactDTO> delete(@PathVariable Long id) {
        return ResponseEntity.ok(service.deleteContactById(id));
    }
}