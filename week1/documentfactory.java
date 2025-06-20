import java.util.Scanner;

public class Documentfactory {
    interface Document {
        void open();
    }

    static class Word implements Document {
        public void open() {
            System.out.println("opening word file ");
        }
    }

    static class Pdf implements Document {
        public void open() {
            System.out.println("opening pdf file ");
        }
    }

    static class Excel implements Document {
        public void open() {
            System.out.println("opening excel file");
        }
    }

    static class InnerDocumentFactory {
        Document create(String data) {
            if (data.equals("word")) {
                return new Word();
            } else if (data.equals("pdf")) {
                return new Pdf();
            } else if (data.equals("excel")) {
                return new Excel();
            } else {
                return null;
            }
        }
    }

    public static void main(String[] args) {
        InnerDocumentFactory factory = new InnerDocumentFactory();
        System.out.println("Enter the document type to open.");
        Scanner sc = new Scanner(System.in);
        String data = sc.nextLine();
        Document doc1 = factory.create(data);
      doc1.open();
    
    }
}
