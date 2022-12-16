package lista01;

import java.util.Scanner;

public final class Ex10_losango {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		float diagonalMenor, diagonalMaior, area;
		
		System.out.println("Digite o valor da diagonal menor do losando: ");
		diagonalMenor = sc.nextFloat();
		
		System.out.println("Digite o valor da diagonal maior do losango: ");
		diagonalMaior = sc.nextFloat();
		
		area = diagonalMaior * diagonalMenor/2;
		
		System.out.println("A área do losango é: " +area);
		
		sc.close();
	}

}
