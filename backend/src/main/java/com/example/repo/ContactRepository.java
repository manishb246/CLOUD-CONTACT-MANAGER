package com.example.repo;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.entity.Contact;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long>  {

	 List<Contact> findByNameContainingIgnoreCase(String name);
	 
	 List<Contact> findByUserId(String userId);

	 List<Contact> findByUserIdAndNameContainingIgnoreCase(String userId, String name);
}
