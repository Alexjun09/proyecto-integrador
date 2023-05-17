package mvc.main;

import mvc.vistas.VistaPrincipal;

public class Main {

	public static void main(String[] args) {
		java.awt.EventQueue.invokeLater(new Runnable() {
			// ejecutamos la ventana
			public void run() {
				// le asignamos un nombre a la ventana
				VistaPrincipal v = new VistaPrincipal("Bienvenido");
				// hacemos visible la ventana
				v.hacerVisible();
			}
		});
	}

}