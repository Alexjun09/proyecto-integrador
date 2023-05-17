package mvc.vistas;

import javax.swing.JFrame;
import javax.swing.JLabel;

public class VistaConseguida extends JFrame {
	public VistaConseguida() {
		setSize(500, 500);
		getContentPane().setLayout(null);

		JLabel labelConseguido = new JLabel("Acceso Conseguido!!");
		labelConseguido.setBounds(160, 118, 142, 16);
		getContentPane().add(labelConseguido);
	}

	public void hacerVisible() {
		setVisible(true);
	}

	public void hacerInisible() {
		setVisible(false);
	}

}
