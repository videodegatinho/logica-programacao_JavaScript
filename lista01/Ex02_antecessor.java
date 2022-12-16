package lista01;

import java.util.Scanner;

public class Ex02_antecessor {

	public static void main(String[] args) {
		Scanner sc = new Scanner (System.in);
		
		int numero, resultado;
		
		System.out.println("Digite um número: ");
		numero = sc.nextInt();	
		
		resultado = numero - 1;
		
		System.out.println("O número antecessor a "+numero+" é "+resultado);
		
		sc.close();
		
	}

}
