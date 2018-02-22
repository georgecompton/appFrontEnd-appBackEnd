package org.springBoot.repositories;

import org.springBoot.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository  extends JpaRepository<Product, Long>{

}
