package com.example.bookapp;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
public class BookController {

    private final BookRepository repo;

    public BookController(BookRepository repo) {
        this.repo = repo;
    }

    @PostMapping("/books")
    public Book save(@RequestBody Book book) {
        return repo.save(book);
    }

    @GetMapping("/books")
    public List<Book> getAll() {
        return repo.findAll();
    }
}
