package mvc.vistas;

import javax.swing.*;

import mvc.control.EscuchadorLogIn;

public class VistaLogin extends JFrame {
	private JTextField txtUser;
	private JPasswordField txtPass;
	private JLabel alert;

	public VistaLogin(String titulo) {
		super(titulo);
		inicializar();

	}

	public void inicializar() {
		setSize(500, 500);
		getContentPane().setLayout(null);

		JLabel labelUser = new JLabel("Usuario");
		labelUser.setBounds(74, 80, 61, 16);
		getContentPane().add(labelUser);

		JLabel labelPass = new JLabel("Contraseña");
		labelPass.setBounds(74, 108, 90, 16);
		getContentPane().add(labelPass);

		txtUser = new JTextField();
		txtUser.setBounds(176, 75, 130, 26);
		getContentPane().add(txtUser);
		txtUser.setColumns(10);

		txtPass = new JPasswordField();
		txtPass.setBounds(176, 103, 130, 26);
		getContentPane().add(txtPass);

		JButton btn = new JButton("Log In");
		btn.setBounds(189, 141, 117, 29);
		getContentPane().add(btn);

		JLabel lblNewLabel = new JLabel("Log In");
		lblNewLabel.setBounds(207, 33, 61, 16);
		getContentPane().add(lblNewLabel);

		alert = new JLabel("");
		alert.setBounds(74, 201, 337, 16);
		getContentPane().add(alert);

		EscuchadorLogIn escuchador = new EscuchadorLogIn();
		escuchador.setVistaPrincipal(this);
		btn.addActionListener(escuchador);
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
