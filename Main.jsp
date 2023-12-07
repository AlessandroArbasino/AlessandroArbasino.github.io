<%@ page session="true"
         language="java"
         contentType="text/html; charset=UTF-8"
         import="java.sql.*" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/sql" prefix="sql" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<%@ include file="NavigationBar.jspf" %>
   

    <table width="100%" height="65%">
        <tr>
            <td colspan="2" align="center">
                <h2>Unity Games</h2>
            </td>
            <td colspan="2" align="center">
                <h2>Unreal engine Games</h2>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <h3>Digital Bros Game Academy Games</h3>
                <ul>
                    <li>
                        Pongan
                    </li>
                    <li>
                        Conventio Lutheri
                    </li>
                    <li>
                        Conventio Lutheri
                    </li>
                    <li>
                        Eclipse Exodus
                    </li>
                </ul>
            </td>
            <td valign="top">
                <h3>Progetti individuali</h3>
                <ul>
                    <li>Flappy bird like game</li>
                    <li>Lost planetMaze</li>
                </ul>
            </td>
            <td valign="top">
                <h3>Digital Bros Game Academy Games</h3>
            </td>
            <td valign="top">
                <h3>Progetti individuali</h3>
            </td>
        </tr>
    </table>

</body>
</html>