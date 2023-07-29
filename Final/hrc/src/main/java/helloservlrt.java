import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/helloservlrt")
public class helloservlrt extends HttpServlet {
    private static final long serialVersionUID = 1L;

    public helloservlrt() {
        super();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.getWriter().append("Served at: ").append(request.getContextPath());
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        Connection conn = null;
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        String customerIdString = request.getParameter("CUSTOMER_ORDER_ID");
        if (customerIdString == null || customerIdString.trim().isEmpty()) {
            out.println("<h1>Error: Please provide a valid customer ID.</h1>");
            return;
        }

        int CUSTOMER_ORDER_ID = Integer.parseInt(customerIdString);

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/hrc", "root", "Ashish@009");
            System.out.println("Connection is created successfully:");

            String tableName = "h2h_oap";
            String query = "SELECT CUSTOMER_ORDER_ID, SALES_ORG, DISTRIBUTION_CHANNEL, COMPANY_CODE, ORDER_CREATION_DATE, "
                    + "ORDER_AMOUNT, ORDER_CURRENCY, CUSTOMER_NUMBER FROM " + tableName + " WHERE CUSTOMER_ORDER_ID = ?";

            PreparedStatement stmt = conn.prepareStatement(query);
            stmt.setInt(1, CUSTOMER_ORDER_ID);
            ResultSet rs = stmt.executeQuery();
            ResultSetMetaData rsmd = rs.getMetaData();
            int columnCount = rsmd.getColumnCount();

            out.println("<table>");
            out.println("<tr>");
            // Print column names
            for (int i = 1; i <= columnCount; i++) {
                out.println("<th>" + rsmd.getColumnName(i) + "</th>");
            }
            out.println("</tr>");

            while (rs.next()) {
                out.println("<tr>");
                for (int i = 1; i <= columnCount; i++) {
                    out.println("<td>" + rs.getString(i) + "</td>");
                }
                out.println("</tr>");
            }

            out.println("</table>");

            rs.close();
        } catch (ClassNotFoundException e) {
            out.println("Driver not found: " + e.getMessage());
        } catch (SQLException e) {
            out.println("Database error: " + e.getMessage());
        } finally {
            try {
                if (conn != null) {
                    conn.close();
                }
            } catch (SQLException e) {
                out.println("Failed to close connection: " + e.getMessage());
            }
        }

        out.close();
    }
}
