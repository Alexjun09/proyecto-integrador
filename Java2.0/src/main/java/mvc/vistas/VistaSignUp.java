package mvc.vistas;

import javax.swing.*;

import mvc.control.*;

public class VistaSignUp extends JFrame {
	private JTextField txtUser;
	private JPasswordField txtPass;
	private JPasswordField txtRepetirPass;
	private JLabel alert;

	public VistaSignUp(String titulo) {
		super(titulo);
		inicializar();

	}

	public void inicializar() {
		setSize(500, 500);
		getContentPane().setLayout(null);

		JLabel labelUser = new JLabel("Usuario");
		labelUser.setBounds(45, 80, 61, 16);
		getContentPane().add(labelUser);

		JLabel labelPass = new JLabel("Contraseña");
		labelPass.setBounds(45, 108, 90, 16);
		getContentPane().add(labelPass);

		txtUser = new JTextField();
		txtUser.setBounds(176, 75, 130, 26);
		getContentPane().add(txtUser);
		txtUser.setColumns(10);

		txtPass = new JPasswordField();
		txtPass.setBounds(176, 103, 130, 26);
		getContentPane().add(txtPass);

		JButton botonSignup = new JButton("Sign Up");
		botonSignup.setBounds(176, 179, 117, 29);
		getContentPane().add(botonSignup);

		JLabel labelRepetirPass = new JLabel("Repetir Contraseña");
		labelRepetirPass.setBounds(45, 136, 130, 16);
		getContentPane().add(labelRepetirPass);

		txtRepetirPass = new JPasswordField();
		txtRepetirPass.setBounds(176, 131, 130, 26);
		getContentPane().add(txtRepetirPass);

		alert = new JLabel("");
		alert.setBounds(45, 215, 413, 16);
		getContentPane().add(alert);

		EscuchadorSignUp escuchador = new EscuchadorSignUp();
		escuchador.setVistaPrincipal(this);
		botonSignup.addActionListener(escuchador);

	}

	public void hacerVisible() {
		setVisible(true);
	}

	public void hacerInisible() {
		setVisible(false);
	}

	public JLabel getAlert() {
		return alert;
	}

	public void setAlert(JLabel alert) {
		this.alert = alert;
	}

	public JPasswordField getTxtRepetirPass() {
		return txtRepetirPass;
	}

	public void setTxtRepetirPass(JPasswordField txtRepetirPass) {
		this.txtRepetirPass = txtRepetirPass;
	}

	public JTextField getTxtUser() {
		return txtUser;
	}

	public void setTxtUser(JTextField txtUser) {
		this.txtUser = txtUser;
	}

	public JPasswordField getTxtPass() {
		return txtPass;
	}

	public void setTxtPass(JPasswordField txtPass) {
		this.txtPass = txtPass;
	}

}
