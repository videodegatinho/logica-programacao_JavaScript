package lista01;

import java.util.Scanner;

public class Ex07_retangulo {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		float base, altura, area;
		
		System.out.println("Digite o valor da base do retângulo: ");
		base = sc.nextFloat();
		
		System.out.println("Digite o valor da altura do retângulo: ");
		altura = sc.nextFloat();
		
		area = base*altura;
		
		System.out.println("O valor da área do retângulo é: " +area);
		
		sc.close();
	}

}
