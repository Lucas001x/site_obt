from flask_sqlalchemy import SQLAlchemy
from app import db

# Tabela de associação
user_deficiencia_association = db.Table('user_deficiencia',
    db.Column('user_id', db.Integer, db.ForeignKey('user.id')),
    db.Column('deficiencia_tipo', db.Integer, db.ForeignKey('deficiencia.tipo'))  # Alterado para referenciar 'tipo'
)

class Deficiencia(db.Model):
    __tablename__ = 'deficiencia'
    tipo = db.Column(db.Integer, primary_key=True)  # Mantendo 'tipo' como chave primária
    deficiencia = db.Column(db.String(100))
    users = db.relationship('User', secondary=user_deficiencia_association, back_populates='deficiencias')

class Senha(db.Model):
    __tablename__ = 'senha'
    id = db.Column(db.Integer, primary_key=True)
    senha = db.Column(db.String(100))

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100))
    email = db.Column(db.String(100))
    idade = db.Column(db.Integer)

    # Relacionamento muitos-para-muitos com Deficiencia
    deficiencias = db.relationship('Deficiencia', secondary=user_deficiencia_association, back_populates='users')
