from flask import Flask, render_template, request, redirect, url_for, flash
from app.models import Deficiencia, User, Senha
from app import app, db

@app.route('/templates/')
def index():
    return render_template('index.html')

@app.route('/template', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        nome = request.form['nome']
        email = request.form['email']
        senha = request.form['senha']
        idade = 10
        deficiencia_codigo = 1

        # Armazenamento no banco de dados
        novo_usuario = User(nome=nome, email=email, idade=idade, deficiencia=deficiencia_codigo)
        db.session.add(novo_usuario)
        db.session.commit()

        nova_senha = Senha(id=novo_usuario.id, senha=senha)
        db.session.add(nova_senha)
        db.session.commit()

        flash('Conta criada com sucesso!', 'success')
        return redirect(url_for('index'))

    deficiencias = Deficiencia.query.all()
    return render_template('signup.html', deficiencias=deficiencias)

# @app.route('/', methods=['GET', 'POST'])
# def login():
#     if request.method == 'POST':
#         email = request.form['email']
#         senha = request.form['senha']

#         user = User.query.filter_by(email=email).first()
#         if user:
#             user_senha = Senha.query.filter_by(id=user.id, senha=senha).first()
#             if user_senha:
#                 flash('Login realizado com sucesso!', 'success')
#                 return redirect(url_for('index'))
#             else:
#                 flash('Senha incorreta.', 'danger')
#         else:
#             flash('Usuário não encontrado.', 'danger')

#     return render_template('login.html')