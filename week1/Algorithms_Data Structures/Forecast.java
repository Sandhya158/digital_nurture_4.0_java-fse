import java.util.Scanner;

public class Forecast {

    public static double forecastValue(int year, double currentValue, double growthRate) {
        if (year == 0) {
            return currentValue;
        } else {
            return forecastValue(year - 1, currentValue, growthRate) * (1 + growthRate);
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter current value: ");
        double currentValue = sc.nextDouble();

        System.out.print("Enter growth rate in decimal  (example : 0.10 for 10%): ");
        double growthRate = sc.nextDouble();

        System.out.print("Enter number of years: ");
        int years = sc.nextInt();

        double futureValue = forecastValue(years, currentValue, growthRate);

        System.out.println("Future value after " + years + " years is: " + futureValue);

        sc.close();
    }
}
