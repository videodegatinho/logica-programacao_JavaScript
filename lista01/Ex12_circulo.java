package lista01;

import java.util.Scanner;

public class Ex12_circulo {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		double raio, area;
		
		System.out.println("Digite o valor do raio do c�rculo: ");
		raio = sc.nextDouble();
		
		area = Math.PI*(raio*raio);
		
		System.out.println("A �rea do c�rculo �: " +area);
		
		sc.close();
	}

}
