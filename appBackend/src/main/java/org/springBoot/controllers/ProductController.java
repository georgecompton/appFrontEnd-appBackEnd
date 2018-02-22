package org.springBoot.controllers;

import java.util.List;

import org.springBoot.entities.Product;
import org.springBoot.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:4200", allowedHeaders="*")
public class ProductController {
	
	@Autowired
	private ProductRepository productRepository;

	@GetMapping("/products")
	public List<Product> getProducts() {
		return productRepository.findAll();
	}

	@GetMapping("/product/{id}")
	public Product getProduct(@PathVariable Long id) {
		return productRepository.findOne(id);
	}

	@DeleteMapping("/product/{id}")
	public boolean deleteProduct(@PathVariable Long id) {
		productRepository.delete(id);
		return true;
	}

	@PutMapping("/product")
	public Product updateProduct(@RequestBody Product product) {
		return productRepository.save(product);
	}

	@PostMapping("/product")
	public Product createProduct(@RequestBody Product product) {
		return productRepository.save(product);
	}
}
