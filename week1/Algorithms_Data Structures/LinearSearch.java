public class LinearSearch {
    public static int search(Product[] products, String searchName) {
        for (int i = 0; i < products.length; i++) {
            if (products[i].name.equals(searchName)) {
                return i;
            }
        }
        return -1;
    }
}
