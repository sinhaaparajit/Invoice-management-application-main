package com.highradius.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.highradius.implementation.InvoiceDao;
import com.highradius.implementation.InvoiceDaoImpl;
import com.highradius.model.Invoice;

@WebServlet("/EditServlet")
public class EditServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // TODO Auto-generated method stub
        InvoiceDao dao = null;
        Invoice invoice = null;

        
        String Sl_no = request.getParameter("Sl_no");
        String CUSTOMER_ORDER_ID = request.getParameter("CUSTOMER_ORDER_ID");
        String SALES_ORG = request.getParameter("SALES_ORG");
        String DISTRIBUTION_CHANNEL = request.getParameter("DISTRIBUTION_CHANNEL");
        String COMPANY_CODE = request.getParameter("COMPANY_CODE");
        String ORDER_CREATION_DATE = request.getParameter("ORDER_CREATION_DATE");
        String ORDER_CURRENCY = request.getParameter("ORDER_CURRENCY");
        String CUSTOMER_NUMBER = request.getParameter("CUSTOMER_NUMBER");
        String AMOUNT_IN_USD = request.getParameter("AMOUNT_IN_USD");
        String ORDER_AMOUNT = request.getParameter("ORDER_AMOUNT");

        if (Sl_no != null && CUSTOMER_ORDER_ID != null && SALES_ORG != null
                && DISTRIBUTION_CHANNEL != null && COMPANY_CODE != null && ORDER_CREATION_DATE != null
                && ORDER_CURRENCY != null && CUSTOMER_NUMBER != null && AMOUNT_IN_USD != null
                && ORDER_AMOUNT != null) {

            invoice = new Invoice(Sl_no, CUSTOMER_ORDER_ID, SALES_ORG,
                    DISTRIBUTION_CHANNEL, COMPANY_CODE, ORDER_CREATION_DATE, ORDER_CURRENCY, CUSTOMER_NUMBER,
                    AMOUNT_IN_USD, ORDER_AMOUNT);
            dao = new InvoiceDaoImpl();
            boolean update = dao.updateInvoice(invoice);
            if (update) {
                response.getWriter().append("Invoice with ID " + Sl_no+ " has been updated successfully");
            } else {
                response.getWriter().append("Failed to update invoice with ID " + Sl_no);
            }
        } else {
            response.getWriter().append("Invalid invoice details");
        }
    }

}
