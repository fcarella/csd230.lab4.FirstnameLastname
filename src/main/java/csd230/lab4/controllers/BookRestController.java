package csd230.lab4.controllers;

import csd230.lab4.entities.Book;
import csd230.lab4.respositories.BookRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("rest/book")
public class BookRestController {
    private final BookRepository bookRepository;

    public BookRestController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @GetMapping()
    List<Book> all() {
        return bookRepository.findAll();
    }

    @GetMapping
    @RequestMapping(value = "/{id}", method = RequestMethod.GET, produces = "application/json")
    public Book getBook(@PathVariable int id) {
        Book x = bookRepository.findById(id);
        return x;
    }
}
