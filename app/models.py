from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Deficiencia(db.Model):
    __tablename__ = 'deficiencia'
    codigo = db.Column(db.Integer, primary_key=True)
    deficiencia = db.Column(db.String(100))

class Senha(db.Model):
    __tablename__ = 'senha'
    id = db.Column(db.Integer, primary_key=True)
    senha = db.Column(db.String(100))

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100))
    email = db.Column(db.String(100))
    deficiencia = db.Column(db.Integer, db.ForeignKey('deficiencia.codigo'))
    idade = db.Column(db.Integer)

    # Relacionamento com a tabela Deficiencia
    deficiencia_rel = db.relationship('Deficiencia', backref=db.backref('usuarios', lazy=True))
