package lista01;

import java.util.Scanner;

public class Ex08_triangulo {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		
		float base, altura, area;
		
		System.out.println("Digite o valor da base: ");
		base = sc.nextFloat();
		
		System.out.println("Digite o valor da altura: ");
		altura = sc.nextFloat();
		
		area = base*altura/2;
		
		System.out.println("O valor da área do triângulo é: " +area);
		
		sc.close();
	}

}
