package lista01;

import java.util.Scanner;

public class Ex06_divisao {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		float  numero1, numero2, resultado;
		
		System.out.println("Digite um n�mero: ");
		numero1 = sc.nextFloat();
		
		System.out.println("Digite outro n�mero: ");
		numero2 = sc.nextFloat();
		
		resultado = numero1 / numero2;
		
		System.out.println("O resultado da divis�o �: " +resultado);
		
		sc.close();	

	}

}
