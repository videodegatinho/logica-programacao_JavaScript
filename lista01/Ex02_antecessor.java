package lista01;

import java.util.Scanner;

public class Ex02_antecessor {

	public static void main(String[] args) {
		Scanner sc = new Scanner (System.in);
		
		int numero, resultado;
		
		System.out.println("Digite um n�mero: ");
		numero = sc.nextInt();	
		
		resultado = numero - 1;
		
		System.out.println("O n�mero antecessor a "+numero+" � "+resultado);
		
		sc.close();
		
	}

}
