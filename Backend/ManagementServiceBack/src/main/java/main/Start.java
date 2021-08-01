package main;

import java.util.Arrays;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@SpringBootApplication
@EntityScan("model")
@EnableJpaRepositories("dao")
@ComponentScan({"services","controllers"})

public class Start {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		SpringApplication.run(Start.class, args);
	}
	@Bean
	public CorsFilter corsFilter() {
		CorsConfiguration config = new CorsConfiguration();
		config.setAllowCredentials(true);
		config.setAllowedOrigins(Arrays.asList("http://localhost:4200"));
		config.setAllowedMethods(Arrays.asList("GET","POST","PUT","DELETE","OPTIONS"));
		config.setAllowedHeaders(Arrays.asList("Origin","Access-Control-Allow-Origin","Content-Type","Accept","Authorization","Origin,Accept","Cache-Control","X-Requested-With","Access-Control-Request-Method","Access-Control-Request-Headers"));
		UrlBasedCorsConfigurationSource ubc = new UrlBasedCorsConfigurationSource();
		ubc.registerCorsConfiguration("/**", config);
		return new CorsFilter(ubc);
	}

//    @Bean
//    public CorsFilter corsFilter() {
//        final CorsConfiguration configuration = new CorsConfiguration();
//        configuration.setAllowCredentials(true);
//        configuration.setAllowedOrigins(Arrays.asList("https://localhost:4200"));
//        configuration.setAllowedHeaders(Arrays.asList("Origin","Access-Control-Allow-Origin","Content-Type","Accept","Authorization","Origin,Accept","Cache-Control","X-Requested-With","Access-Control-Request-Method","Access-Control-Request-Headers"));
//        configuration.setAllowedMethods(Arrays.asList("HEAD",
//                "GET", "POST", "PUT", "DELETE", "PATCH","OPTIONS"));
//        // setAllowCredentials(true) is important, otherwise:
//        // The value of the 'Access-Control-Allow-Origin' header in the response must not be the wildcard '*' when the request's credentials mode is 'include'.
//        
//        // setAllowedHeaders is important! Without it, OPTIONS preflight request
//        // will fail with 403 Invalid CORS request
//        
//        final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        source.registerCorsConfiguration("/**", configuration);
//        return new CorsFilter(source);
//    }

}
