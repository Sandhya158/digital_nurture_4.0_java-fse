import java.util.Arrays;
import java.util.Comparator;

public class BinarySearch {

    public static int search(Product[] products, String searchName) {
        Arrays.sort(products, new NameComparator());

        System.out.println("\nSorted Product List (for Binary Search):");
        for (int i = 0; i < products.length; i++) {
            System.out.println(products[i].name);
        }

        int left = 0;
        int right = products.length - 1;

        while (left <= right) {
            int mid = (left + right) / 2;
            int compare = searchName.compareTo(products[mid].name);

            if (compare == 0) {
                return mid;
            } else if (compare < 0) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return -1;
    }

    static class NameComparator implements Comparator<Product> {
        public int compare(Product a, Product b) {
            return a.name.compareTo(b.name);
        }
    }
}
