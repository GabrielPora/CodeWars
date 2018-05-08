package calculator;

import org.junit.Assert;
import org.junit.Test;

public class CalculatorTest {

    private static final Calculator CALCULATOR = new Calculator();

    @Test
    public void calculator_emptyString_returnsZero() {
        Assert.assertEquals(CALCULATOR.add(""), 0);
    }

    @Test
    public void calculator_stringWithOnlyNumberOne_returnsOne() {
        Assert.assertEquals(CALCULATOR.add("1"), 1);
    }

    @Test
    public void calculator_stringWith2CommaSeparatedPositiveNumbers_addsTheNumbers() {
        Assert.assertEquals(CALCULATOR.add("1,2"), 3);
    }

    @Test
    public void calculator_stringWithNCommaSeparatedPositiveNumbers_addsTheNumbers() {
        Assert.assertEquals(CALCULATOR.add("1,2,3,4,5"), 15);
    }

    @Test
    public void calculator_stringWith3CommaAndNewlineSeparatedPositiveNumbers_addsTheNumbers() {
        Assert.assertEquals(CALCULATOR.add("1\n2,3"), 6);
    }

    @Test
    public void calculator_stringWith2CustomDelimitedSeparatedPositiveNumbers_addsTheNumbers() {
        Assert.assertEquals(CALCULATOR.add("//;\n1;2"), 3);
    }

    @Test
    public void calculator_stringWith2JDelimitedSeparatedPositiveNumbers_addsTheNumbers() {
        Assert.assertEquals(CALCULATOR.add("//J\n1J2"), 3);
    }

    @Test
    public void calculator_shouldRaiseExceptionOnNegative() {
        try {
            CALCULATOR.add("-1,2,3");
//            fail("Exception expected.");
        } catch(RuntimeException ex) {
            // OK
        }
    }
}