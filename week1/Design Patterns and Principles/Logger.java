
public class Logger {
    private static Logger loggerinstance;
    private Logger(){
    }

    public static Logger getinstance() {
        if (loggerinstance == null) {
            loggerinstance = new Logger();
        }
        return loggerinstance;
    }

    public static void main(String[] args) {
        Logger l1 = Logger.getinstance();
        Logger l2 = Logger.getinstance();

        if (l1 == l2) {
            System.out.println("Same instance used!");
        } else {
            System.out.println("Different instances!");
        }
    }
}

