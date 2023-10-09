from . import db

# 权限表
class Privilege(db.Model):
    __tablename__ = 'privilege'
    id = db.Column(db.Integer, autoincrement=True, primary_key=True, nullable=False, comment="主键")
    serialNumber = db.Column(db.String(100), nullable=True, comment="权限编号")
    privilegeName = db.Column(db.String(100), nullable=False, comment="权限名称")

# 职位表
class Position(db.Model):
    __tablename__ = 'position'
    id = db.Column(db.Integer, autoincrement=True, primary_key=True, nullable=False, comment="主键")
    positionNumber = db.Column(db.String(100), nullable=True, comment="权限编号")
    positionName = db.Column(db.String(100), nullable=True, comment="职位名称")
    privilege_id = db.Column(db.Integer, db.ForeignKey("privilege.id") , comment="权限外键")
    privilege =  db.relationship('Privilege', backref=db.backref('privilege'), foreign_keys=[privilege_id])

