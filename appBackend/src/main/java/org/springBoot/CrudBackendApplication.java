package org.springBoot;

import org.springBoot.entities.Product;
import org.springBoot.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CrudBackendApplication implements CommandLineRunner {
	@Autowired
	private ProductRepository productRepository;
	
	
	public static void main(String[] args) {
		SpringApplication.run(CrudBackendApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		productRepository.save(new Product("Boneco de Neve", "Boneco feito de neve", "R$ 80,00"));
		productRepository.save(new Product("Smartphone XX", "Smartphone Modelo X", "R$ 70,00"));
		productRepository.save(new Product("Batedeira", "Batedeira Modelo T - Econômico", "R$ 90,00"));
	}
}
