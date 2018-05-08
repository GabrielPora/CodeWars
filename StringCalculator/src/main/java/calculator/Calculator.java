package calculator;

import java.util.Arrays;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Calculator {
    public static final Pattern CUSTOM_DELIMITER_PATTERN = Pattern.compile("//(.)\n(.*)");
    //    public Calculator() {
//
//    }


//    public Calculator(String random) {
//    }


    /*
    public int add(String numbers) {
        if (numbers.isEmpty()) {
            return 0;
        }
        String[] numbersArray = extractNumbersArray(numbers);
        return sumTextNumbers(numbersArray);
    }
     */

    public int add(String numbers) {
        int sum;
        if (numbers.isEmpty()) {
            sum = 0;
        } else {

            String[] numbersArray = extractNumbersArray(numbers);
            sum = sumTextNumbers(numbersArray);
        }
        return sum;
    }

    private String[] extractNumbersArray(String numbers) {
        String[] numbersArray;
        if (numbers.startsWith("//")) {
            Matcher matcher = CUSTOM_DELIMITER_PATTERN.matcher(numbers);
            matcher.find();

            String delimiter = matcher.group(1);
            numbersArray = matcher.group(2).split(delimiter);
        } else {
            numbersArray = numbers.split(",|\n");
        }
        return numbersArray;
    }

    private int sumTextNumbers(String[] numbersArray) {
        return Arrays.stream(numbersArray)
                .map(Integer::parseInt)
                .reduce(0, (num1, num2) -> num1 + num2);
    }

    /**
     * private int sumTextNumbers(String[] numbersArray) {
     *         int sum = 0;
     *         for (String textNumI : numbersArray) {
     *             sum += Integer.parseInt(textNumI);
     *         }
     *         return sum;
     *     }
     */

}
