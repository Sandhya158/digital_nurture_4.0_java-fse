package com.cognizant.springlearn;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.text.SimpleDateFormat;
import java.util.Date;

public class SpringLearnApplication {

    public static void main(String[] args) throws Exception {
        System.out.println("SpringLearnApplication main() started...");
        displayDate();
    }

    public static void displayDate() throws Exception {
      	ApplicationContext context = new ClassPathXmlApplicationContext("date-format.xml");
		SimpleDateFormat format = context.getBean("dateFormat", SimpleDateFormat.class);
		String dateString = "31/12/2018";
        Date parsedDate = format.parse(dateString);
        System.out.println("Parsed Date: " + parsedDate);
    }
}
