package mvc.vistas;

import javax.swing.*;

import java.awt.*;
import java.awt.event.ActionListener;
import java.net.http.WebSocket.Listener;
import java.awt.event.ActionEvent;
import javax.swing.GroupLayout.Alignment;
import javax.swing.LayoutStyle.ComponentPlacement;

public class buscarAlumnos {
	private JFrame frame;
	private JPanel panel;
	private JButton button1;
	private JButton button2;
	private JButton button3;
	private JButton buttonadd1;
	private JLabel lblNewLabel_1;
	private JTextField txtHola;

	public buscarAlumnos() {

		///////////////////// MENÚ Y FONDO/////////////////////////////77
		Toolkit toolkit = Toolkit.getDefaultToolkit();
		Dimension screenSize = toolkit.getScreenSize();

		frame = new JFrame("Consultar");
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.setSize(screenSize.width, screenSize.height);

		panel = new JPanel() {
			@Override
			protected void paintComponent(Graphics g) {

				// Carga y dibuja la imagen de fondo
				ImageIcon imageIcon = new ImageIcon("Imagenes/fondo.png");
				Image image = imageIcon.getImage();
				g.drawImage(image, 0, 0, getWidth(), getHeight(), this);
				setOpaque(false);
				setVisible(true);
				super.paintComponent(g);
			}
		};

		ImageIcon imagenHome = new ImageIcon("Imagenes/home.png");
		Image resizedImage = imagenHome.getImage().getScaledInstance(60, 60, Image.SCALE_SMOOTH);
		ImageIcon imagenAdd = new ImageIcon("Imagenes/mas.png");
		Image resizedAdd = imagenAdd.getImage().getScaledInstance(60, 60, Image.SCALE_SMOOTH);
		ImageIcon imagenConsultar = new ImageIcon("Imagenes/buscar.png");
		Image resizedConsultar = imagenConsultar.getImage().getScaledInstance(60, 60, Image.SCALE_SMOOTH);

		button1 = new JButton("");
		button1.setBorderPainted(false);
		button1.setBounds(115, 677, 90, 78);
		button1.setIcon(new ImageIcon(resizedImage));
		button1.setContentAreaFilled(false);
		button1.setFocusPainted(false);
		button1.setOpaque(false);

		button2 = new JButton("");
		button2.setBorderPainted(false);
		button2.setBounds(600, 677, 90, 78);
		button2.setIcon(new ImageIcon(resizedAdd));
		button2.setContentAreaFilled(false);
		button2.setFocusPainted(false);
		button2.setOpaque(false);

		button3 = new JButton("");
		button3.setBorderPainted(false);
		button3.setBounds(1085, 677, 90, 78);
		button3.setIcon(new ImageIcon(resizedConsultar));
		button3.setContentAreaFilled(false);
		button3.setFocusPainted(false);
		button3.setOpaque(false);

		frame.setContentPane(panel);
		panel.setLayout(null);

		// BOTONES DE BUSCAR
		ImageIcon imagenAnadir = new ImageIcon("Imagenes/lupa.png");
		Image resizedAnadir = imagenAnadir.getImage().getScaledInstance(60, 60, Image.SCALE_SMOOTH);

		buttonadd1 = new JButton("");
		buttonadd1.setBorderPainted(false);
		buttonadd1.setBounds(1185, 298, 90, 78);
		buttonadd1.setIcon(new ImageIcon(resizedAnadir));
		buttonadd1.setContentAreaFilled(false);
		buttonadd1.setFocusPainted(false);
		buttonadd1.setOpaque(false);

		panel.add(buttonadd1);
		panel.add(button1);
		panel.add(button2);
		panel.add(button3);

		///////////////////////////// LABELS//////////////////////////////////

		JLabel lblNewLabel = new JLabel("Introduzca el ID de Alumno");
		lblNewLabel.setHorizontalAlignment(SwingConstants.CENTER);
		lblNewLabel.setForeground(new Color(247, 254, 255));
		lblNewLabel.setFont(new Font("Kefa", Font.PLAIN, 90));
		lblNewLabel.setBounds(150, 6, 1174, 119);
		panel.add(lblNewLabel);
		
		lblNewLabel_1 = new JLabel("ID Alumno:");
		lblNewLabel_1.setFont(new Font("Lucida Grande", Font.PLAIN, 65));
		lblNewLabel_1.setBounds(255, 272, 364, 102);
		panel.add(lblNewLabel_1);
		
		txtHola = new JTextField();
		txtHola.setFont(new Font("Lucida Grande", Font.PLAIN, 65));
		txtHola.setBounds(656, 298, 375, 69);
		panel.add(txtHola);
		txtHola.setColumns(10);
		frame.setVisible(true);

	}

	public JButton getButton1() {
		return button1;
	}

	public JButton getButton2() {
		return button2;
	}

	public JButton getButton3() {
		return button3;
	}
}
