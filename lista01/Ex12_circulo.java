package lista01;

import java.util.Scanner;

public class Ex12_circulo {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		double raio, area;
		
		System.out.println("Digite o valor do raio do círculo: ");
		raio = sc.nextDouble();
		
		area = Math.PI*(raio*raio);
		
		System.out.println("A área do círculo é: " +area);
		
		sc.close();
	}

}
