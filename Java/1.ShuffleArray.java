import java.util.Arrays;
import java.util.Random;

public class ShuffleArray  {
    public static void main(String[] args) {
        int[] originalArray = {1, 2, 3, 4, 5, 6, 7};

        int n = originalArray.length;
        Random rand = new Random();

        for (int i = n - 1; i > 0; i--) {
            int j = rand.nextInt(i + 1);

            int temp = originalArray[i];
            originalArray[i] = originalArray[j];
            originalArray[j] = temp;
        }

        System.out.println(Arrays.toString(originalArray));
    }
}
