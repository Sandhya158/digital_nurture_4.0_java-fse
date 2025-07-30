import java.util.Scanner;
import java.util.Arrays;

public class SimpleSearch {
    public static void main(String[] args) {
        Product[] products = {
            new Product(1, "Book"),
            new Product(2, "Laptop"),
            new Product(3, "Camera"),
            new Product(4, "Shoes"),
            new Product(5, "Pen")
        };

        System.out.println("Available Products:");
        for (int i = 0; i < products.length; i++) {
            System.out.println( products[i].name);
        }

        Scanner sc = new Scanner(System.in);
        System.out.print("Enter product name to search: ");
        String searchName = sc.nextLine();

        int linearIndex = LinearSearch.search(products, searchName);
        if (linearIndex != -1) {
            System.out.println("Linear Search Found: " + products[linearIndex].name + " at index " + linearIndex);
        } else {
            System.out.println("Linear Search: Not Found");
        }

        Product[] sortedProducts = Arrays.copyOf(products, products.length);
        int binaryIndex = BinarySearch.search(sortedProducts, searchName);
        if (binaryIndex != -1) {
            System.out.println("Binary Search Found: " + sortedProducts[binaryIndex].name + " at index " + binaryIndex + " (in sorted list)");
        } else {
            System.out.println("Binary Search: Not Found");
        }

        sc.close();
    }
}
