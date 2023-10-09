import os

from flask import Blueprint

admin = Blueprint("admin", __name__)

@admin.route('/')
def index_pages():
    return 'sadsadas'