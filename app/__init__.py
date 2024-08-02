from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:1234@localhost/IncluRate'
app.config['SECRET_KEY'] = "lucascezararruda"
app.config['DEBUG'] = True
db = SQLAlchemy(app)

from app import routes
