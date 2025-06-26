import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calc;

    @Before
    public void setUp() {
        calc = new Calculator();
        System.out.println("Setup done");
    }

    @After
    public void tearDown() {
        calc = null;
        System.out.println("Teardown done");
    }

    @Test
    public void testAddition() {
        int a = 5, b = 3;
        int result = calc.add(a, b);
        assertEquals(8, result);
    }

    @Test
    public void testSubtraction() {
        int a = 10, b = 4;
        int result = calc.subtract(a, b);
        assertEquals(6, result);
    }
}
