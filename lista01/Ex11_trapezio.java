package lista01;

import java.util.Scanner;

public class Ex11_trapezio {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		float baseMenor, baseMaior, altura, area;
		
		System.out.println("Digite o valor da base maior: ");
		baseMaior = sc.nextFloat();
		
		System.out.println("Digite o valor da base menor: ");
		baseMenor = sc.nextFloat();
		
		System.out.println("Digite o valor da altura: ");
		altura = sc.nextFloat();
		
		area = (baseMaior + baseMenor)*altura/2;
		
		System.out.println("A área do trapézio é: " +area);
		
		sc.close();
	}

}
