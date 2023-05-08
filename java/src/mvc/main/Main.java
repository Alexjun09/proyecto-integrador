package mvc.main;
import java.awt.EventQueue;

import mvc.vistas.*;

public class Main {
    public static void main(String[] args) {
   
       //altas vistAltas = new altas();
       //altasAlumnos vistAltasAlumnos = new altasAlumnos();
       //altasAreas vistAltasAreas = new altasAreas();
       //altasPI vistAltasPI = new altasPI();
       //consultas vistaConsultas = new consultas();
       //buscarAlumnos vistBuscarAlumnos = new buscarAlumnos();
       //buscarArea vistArea = new buscarArea();
       //buscarPI vistaBuscarPI = new buscarPI();
       //consultaAlumnos vistAlumnos = new consultaAlumnos();
       //consultaAreas vistAreas = new consultaAreas();
   		EventQueue.invokeLater(new Runnable() {
   			
		@Override
		public void run() {
   				
			home vistaHome = new home();
   			vistaHome.hacerVisible();
   				
   			}
   		});
    }       
}