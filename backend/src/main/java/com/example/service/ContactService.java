package com.example.service;
import org.springframework.security.core.context.SecurityContextHolder;
import java.util.List;
import java.util.stream.Collectors;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import com.example.dto.ContactDTO;
import com.example.entity.Contact;
import com.example.repo.ContactRepository;

@Service
public class ContactService {

    private final ContactRepository contactrepository;
    private final ModelMapper mapper;

    public ContactService(ContactRepository contactrepository, ModelMapper mapper) {
        this.contactrepository = contactrepository;
        this.mapper = mapper;
    }

    private String getCurrentUser() {
        return (String) SecurityContextHolder.getContext()
                .getAuthentication().getPrincipal();
    }

   
    private ContactDTO mapToDTO(Contact contact) {
        return mapper.map(contact, ContactDTO.class);
    }

   
    private Contact mapToEntity(ContactDTO dto) {
        return mapper.map(dto, Contact.class);
    }

  
    public ContactDTO addContact(ContactDTO contactDTO) {
        Contact contact = mapToEntity(contactDTO);
        contact.setUserId(getCurrentUser());

        Contact saved = contactrepository.save(contact);
        return mapToDTO(saved);
    }

    
    public List<ContactDTO> showAllContact() {
        return contactrepository.findByUserId(getCurrentUser())
                .stream()
                .map(this::mapToDTO)
                .collect(Collectors.toList());
    }

  
    public ContactDTO showContactById(Long id) {
        Contact contact = contactrepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Not found"));

        if (!contact.getUserId().equals(getCurrentUser())) {
            throw new RuntimeException("Unauthorized");
        }

        return mapToDTO(contact);
    }

  
    public List<ContactDTO> showContactByName(String name) {
        return contactrepository
                .findByUserIdAndNameContainingIgnoreCase(name, getCurrentUser())
                .stream()
                .map(this::mapToDTO)
                .collect(Collectors.toList());
    }

   
    public ContactDTO updateContactById(Long id, ContactDTO newContactDTO) {

        Contact old = contactrepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Not found"));

        if (!old.getUserId().equals(getCurrentUser())) {
            throw new RuntimeException("Unauthorized");
        }

        old.setName(newContactDTO.getName());
        old.setUrl(newContactDTO.getUrl());
        old.setMobileNo(newContactDTO.getMobileNo());
        old.setEmail(newContactDTO.getEmail());
        old.setCompanyName(newContactDTO.getCompanyName());
        old.setTitle(newContactDTO.getTitle());
        old.setGroup(newContactDTO.getGroup());

        Contact updated = contactrepository.save(old);
        return mapToDTO(updated);
    }

  
    public ContactDTO deleteContactById(Long id) {
        Contact contact = contactrepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Not found"));

        if (!contact.getUserId().equals(getCurrentUser())) {
            throw new RuntimeException("Unauthorized");
        }

        contactrepository.delete(contact);

        return mapToDTO(contact);
    }
}