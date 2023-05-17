package mvc.vistas;

import javax.swing.*;

import mvc.control.*;

public class VistaPrincipal extends JFrame {
	VistaLogin login;

	public VistaPrincipal(String titulo) {
		super(titulo);
		inicializar();

	}

	public void inicializar() {
		setSize(500, 500);
		getContentPane().setLayout(null);

		JLabel lblNewLabel = new JLabel("Bienvenido");
		lblNewLabel.setBounds(195, 32, 163, 16);
		getContentPane().add(lblNewLabel);

		JButton botonLogIn = new JButton("Log In");
		botonLogIn.setBounds(67, 141, 117, 29);
		getContentPane().add(botonLogIn);
		EscuchadorPrincipalLogIn escuchador = new EscuchadorPrincipalLogIn(this);
		escuchador.actionPerformed(null);
		botonLogIn.addActionListener(escuchador);

		JButton botonSignUp = new JButton("Sign Up");
		botonSignUp.setBounds(271, 141, 117, 29);
		getContentPane().add(botonSignUp);
		EscuchadorPrincipalSignUp escuchador2 = new EscuchadorPrincipalSignUp(this);
		escuchador2.actionPerformed(null);
		botonSignUp.addActionListener(escuchador2);
	}

	public void hacerVisible() {
		setVisible(true);
	}

	public void hacerInisible() {
		setVisible(false);
	}

}
