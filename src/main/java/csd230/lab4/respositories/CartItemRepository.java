package csd230.lab4.respositories;


import csd230.lab4.entities.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {
    void removeById(Long id);
}
