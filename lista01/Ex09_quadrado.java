package lista01;

import java.util.Scanner;

public class Ex09_quadrado {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		float lado, area;
		
		System.out.println("Digite o valor do lado do quadrado: ");
		lado = sc.nextFloat();
		
		area = lado*lado;
		
		System.out.println("A área do quadrado é: " +area);
		
		sc.close();
	}

}
