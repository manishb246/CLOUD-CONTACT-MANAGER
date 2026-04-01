package com.example.dto;

import lombok.Data;

@Data
public class ContactDTO {

    private Long id;
    private String name;
    private String url;
    private String mobileNo;
    private String email;
    private String companyName;
    private String title;
    private String group;
    private String userId;
}