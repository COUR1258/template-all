class BaseConfig():
    """通用基础配置"""
    MEDIA_ROOT = "/static/media"
    DEBUG = True
    # 密钥用于会话 cookie 的安全签名，并可用于应用或者扩展的其他安全需求。 密钥应当是一个长的随机的 bytes 或者 str 。
    SECRET_KEY = '!@#ASD!@C#WQE#$#@$CQCF'

class TestConfig(BaseConfig):
    """测试环境配置"""
    DEBUG = True
    # 数据库配置
    # 数据库的配置
    DIALCT = "mysql"
    DRITVER = "pymysql"
    HOST = '60.6.212.145'
    PORT = "3390"
    USERNAME = "db_root"
    PASSWORD = "S3BmYb2PNrYGAcDx"
    DBNAME = 'db_root'
    # 数据库连接
    SQLALCHEMY_DATABASE_URI = f"{DIALCT}+{DRITVER}://{USERNAME}:{PASSWORD}@{HOST}:{PORT}/{DBNAME}?charset=utf8"

    # 请求结束之后自动提交
    SQLALCHEMY_COMMIT_ON_TEARDOWN = True
    # 跟踪修改，flask 1.x之后增加的配置项
    SQLALCHEMY_RTACK_MODIFICATIONS = True


class ProConfig(BaseConfig):
    """生产环境配置"""
    DEBUG = False
    DB = '47.18.1.1'

