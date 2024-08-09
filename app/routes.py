from flask import Flask, render_template, request, redirect, url_for, flash
from app.models import Deficiencia, User, Senha
from app import app, db

@app.route('/')
def index():
    return render_template('index.html')

# ------------------------------------------------------------------------- signup -------------------------------------------------------------------------

@app.route('/templates/signup.html', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        nome_user = request.form['nome']
        email = request.form['email']
        senha = request.form['senha']
        idade = 10

        return acessibilidade(nome=nome_user, email=email, idade=idade, senha=senha) 

    return render_template('signup.html')

# ------------------------------------------------------------------------- acessibilidade -------------------------------------------------------------------------
# Dicionário para mapear deficiências aos seus respectivos valores
mapa_deficiencias = {
    "Dificuldade de locomoção": 1,
    "Deficiência visual": 2,
    "Deficiência auditiva": 3,
    "Sensibilidade Sensorial": 4,
    "Deficiência de Fala": 5,
    "Deficiência Cognitiva": 6,
    "Deficiência Intelectual": 7,
    "Deficiência Psicossocial": 8
}

@app.route('/templates/acessibilidade.html', methods=['GET', 'POST'])
def acessibilidade():  

    nome = request.args.get('nome')
    email = request.args.get('email')
    senha = request.args.get('senha')
    idade = request.args.get('idade')

    print(nome, email, senha, idade, "\n\n\n\n\n\n\n\n\n\n\n\n\n")

    if request.method == 'POST':
        deficiencias_selecionadas = request.form.getlist('deficiencia')
        valores_deficiencias = Deficiencia.query.filter(Deficiencia.tipo.in_(deficiencias_selecionadas)).all()

        # Armazenamento no banco de dados
        novo_usuario = User(nome=nome, email=email, idade=idade, deficiencias=valores_deficiencias)
        db.session.add(novo_usuario)
        db.session.commit()

        nova_senha = Senha(id=novo_usuario.id, senha=senha)
        db.session.add(nova_senha)
        db.session.commit()

        flash('Conta criada com sucesso!', 'success')
        
        return render_template('home.html')

    return render_template('acessibilidade.html', nome=nome, email=email, idade=idade, senha=senha)



# ------------------------------------------------------------------------- login -------------------------------------------------------------------------

@app.route('/templates/login.html', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        senha = request.form['senha']

        user = User.query.filter_by(email=email).first()
        if user:
            user_senha = Senha.query.filter_by(id=user.id, senha=senha).first()
            if user_senha:
                flash('Login realizado com sucesso!', 'success')
                return redirect(url_for('index'))
            else:
                flash('Senha incorreta.', 'danger')
        else:
            flash('Usuário não encontrado.', 'danger')

    return render_template('login.html')

# ------------------------------------------------------------------------- home -------------------------------------------------------------------------

@app.route('/templates/home.html')
def home():
    return render_template('home.html')


# ------------------------------------------------------------------------- mapa -------------------------------------------------------------------------
@app.route('/templates/mapa.html')
def mapa():
    return render_template('mapa.html')

# -------------------------------------------------------------------------pesquisar -------------------------------------------------------------------------
@app.route('/templates/pesquisar.html')
def pesquisar():
    return render_template('pesquisar.html')

# ------------------------------------------------------------------------- usuario -------------------------------------------------------------------------
@app.route('/templates/usuario.html', methods=['GET', 'POST'])
def usuario():
    return render_template('usuario.html')