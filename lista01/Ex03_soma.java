package lista01;

import java.util.Scanner;

public class Ex03_soma {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in); 
		
		int numero1, numero2, resultado;
		
		System.out.println("Digite um número: ");
		numero1 = sc.nextInt();
		
		System.out.println("Digite um número: ");
		numero2 = sc.nextInt();
		
		resultado = numero1 + numero2;
		
		System.out.println("O resultado da soma é: " +resultado);
		
		sc.close();
		}

}
