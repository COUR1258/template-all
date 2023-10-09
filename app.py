# 入口文件
from flask import Flask
from flask_migrate import Migrate
from model import db
from conf.config import TestConfig


# 蓝图导入
from views.admin.index import admin


def create_app():
    app = Flask(__name__, static_folder="static", static_url_path="/static",template_folder="templates",)
    # 加载配置文件
    app.config.from_object(TestConfig)
    # 注册蓝图
    app.register_blueprint(admin, url_prefix="/")
    db.init_app(app)
    return app

app = create_app()
migrate = Migrate(app, db)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
