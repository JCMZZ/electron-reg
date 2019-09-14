-- 设置外键是否约束
SET FOREIGN_KEY_CHECKS = 1;
-- 创建reg数据库
create database if not exists reg;
-- 用户表
drop table if exists reg_user;
CREATE TABLE reg_user (
    user_id INT(11) AUTO_INCREMENT COMMENT '用户唯一id',
    nickname VARCHAR(64) NOT NULL DEFAULT '小R' COMMENT '用户昵称',
    email VARCHAR(255) NOT NULL UNIQUE COMMENT '用户邮箱',
    pwd VARCHAR(32) NOT NULL COMMENT '用户密码',
    motto VARCHAR(255) COMMENT '座右铭',
    avatar VARCHAR(255) COMMENT '头像路径',
    birthday DATE COMMENT '生辰日期',
    working_unit VARCHAR(124) COMMENT '在职单位',
    academy VARCHAR(124) COMMENT '毕业院校',
    user_desc VARCHAR(255) COMMENT '个人描述',
    state ENUM('1', '2') DEFAULT 1 NOT NULL COMMENT '用户状态：1 活跃，2 注销',
    create_time TIMESTAMP NOT NULL DEFAULT now(),
    update_time TIMESTAMP NOT NULL DEFAULT now(),
    PRIMARY KEY (user_id)
);
-- 用户标签
drop table if exists reg_label;
CREATE TABLE reg_label (
    label_id INT(11) AUTO_INCREMENT COMMENT '标签id',
    label_name VARCHAR(64) NOT NULL UNIQUE COMMENT '标签名称',
    user_id INT(11) NOT NULL COMMENT '标签创建人',
    create_time TIMESTAMP NOT NULL DEFAULT now(),
    PRIMARY KEY (label_id),
    FOREIGN KEY (user_id)
        REFERENCES reg_user (user_id)
);
-- 用户与标签关联表
drop table if exists reg_user_label;
create table reg_user_label (
	user_label_id int(11) auto_increment comment '关联id',
    label_id int(11) not null comment '标签外键',
    user_id int(11) not null comment '用户外键',
    primary key (user_label_id),
    foreign key (label_id) references reg_label(label_id),
    foreign key (user_id) references reg_user(user_id) 
);
-- 导航表
drop table if exists reg_navigation;
CREATE TABLE reg_navigation (
    nav_id INT(11) AUTO_INCREMENT COMMENT '导航id',
    nav_code VARCHAR(64) NOT NULL UNIQUE COMMENT '导航code',
    nav_icon VARCHAR(64) NOT NULL COMMENT '导航ICON',
    nav_name VARCHAR(64) NOT NULL UNIQUE COMMENT '导航名称',
    PRIMARY KEY (nav_id)
);
-- 页面表
drop table if exists reg_page;
CREATE TABLE reg_page (
    page_id INT(11) AUTO_INCREMENT COMMENT '页面id',
    page_code VARCHAR(64) NOT NULL UNIQUE COMMENT '页面code',
    title VARCHAR(24) NOT NULL UNIQUE COMMENT '页面名称',
    page_router VARCHAR(255) NOT NULL COMMENT '页面路由',
    page_icon VARCHAR(64) NOT NULL COMMENT '导航ICON',
    page_level VARCHAR(64) NOT NULL COMMENT '页面层级',
    nav_code VARCHAR(64) NOT NULL COMMENT '导航外键',
    PRIMARY KEY (page_id),
    FOREIGN KEY (nav_code)
        REFERENCES reg_navigation (nav_code)
);
-- 操作表
drop table if exists reg_oper;
CREATE TABLE reg_oper (
    oper_id INT(11) AUTO_INCREMENT COMMENT '操作id',
    oper_code VARCHAR(64) NOT NULL UNIQUE COMMENT '操作code',
    oper_desc VARCHAR(64) NOT NULL COMMENT '操作描述',
    page_code VARCHAR(64) NOT NULL COMMENT '页面外键',
    PRIMARY KEY (oper_id),
    FOREIGN KEY (page_code) 
		REFERENCES reg_page (page_code)
);
-- 页面与操作关联表
-- drop table if exists reg_page_oper;
-- CREATE TABLE reg_page_oper (
--     page_oper_id INT(11) AUTO_INCREMENT COMMENT '关联id',
--     page_code VARCHAR(64) NOT NULL COMMENT '页面外键',
--     oper_code VARCHAR(64) NOT NULL COMMENT '操作外键',
--     PRIMARY KEY (page_oper_id),
--     FOREIGN KEY (page_code)
--         REFERENCES reg_page (page_code),
--     FOREIGN KEY (oper_code)
--         REFERENCES reg_oper (oper_code)
-- );
-- 角色表
drop table if exists reg_role;
CREATE TABLE reg_role (
    role_id INT(11) AUTO_INCREMENT COMMENT '角色id',
    role_name VARCHAR(64) NOT NULL UNIQUE COMMENT '角色名称',
    create_time TIMESTAMP NOT NULL DEFAULT now(),
    update_time TIMESTAMP NOT NULL DEFAULT now(),
    PRIMARY KEY (role_id)
);
-- 角色与权限关联表
drop table if exists reg_role_permission;
CREATE TABLE reg_role_permission (
    role_permission_id INT(11) AUTO_INCREMENT COMMENT '关联id',
    role_id INT(11) NOT NULL COMMENT '角色外键',
    permission_id VARCHAR(64) NOT NULL COMMENT '页面、操作外键',
    permission_type ENUM ('oper', 'page') NOT NULL DEFAULT 'oper' COMMENT '权限类型：oper->操作；page->页面',
    PRIMARY KEY (role_permission_id),
    FOREIGN KEY (role_id)
        REFERENCES reg_role (role_id)
);
-- 角色与用户关联表
drop table if exists reg_user_role;
CREATE TABLE reg_user_role (
    user_role_id INT(11) AUTO_INCREMENT COMMENT '关联id',
    role_id INT(11) NOT NULL COMMENT '角色id',
    user_id INT(11) NOT NULL COMMENT '用户id',
    PRIMARY KEY (user_role_id),
    FOREIGN KEY (role_id)
        REFERENCES reg_role (role_id),
    FOREIGN KEY (user_id)
        REFERENCES reg_user (user_id)
);
-- reg数据表
drop table if exists reg_regexp;
CREATE TABLE reg_regexp (
    regexp_id INT(11) AUTO_INCREMENT COMMENT 'regid',
    content VARCHAR(255) NOT NULL UNIQUE COMMENT '正则表达式',
    regexp_desc VARCHAR(255) COMMENT '正则表达式描述',
    user_id INT(11) NOT NULL COMMENT '创建人id',
    create_time TIMESTAMP NOT NULL DEFAULT now(),
    update_time TIMESTAMP NOT NULL DEFAULT now(),
    PRIMARY KEY (regexp_id),
    FOREIGN KEY (user_id)
        REFERENCES reg_user (user_id)
);
-- 标签表
drop table if exists reg_tag;
CREATE TABLE reg_tag (
    tag_id INT(11) AUTO_INCREMENT COMMENT '标签id',
    tag_name VARCHAR(64) NOT NULL UNIQUE COMMENT '标签名称',
    user_id INT(11) NOT NULL COMMENT '用户外键',
    create_time TIMESTAMP NOT NULL DEFAULT now(),
    PRIMARY KEY (tag_id),
    FOREIGN KEY (user_id)
        REFERENCES reg_user (user_id)
);
-- reg数据与标签关联表
drop table if exists reg_regexp_tag;
CREATE TABLE reg_regexp_tag (
    regexp_tag_id INT(11) AUTO_INCREMENT COMMENT '关联id',
    tag_id INT(11) NOT NULL COMMENT '标签外键',
    regexp_id INT(11) NOT NULL COMMENT 'reg数据外键',
    PRIMARY KEY (regexp_tag_id),
    FOREIGN KEY (tag_id)
        REFERENCES reg_tag (tag_id),
    FOREIGN KEY (regexp_id)
        REFERENCES reg_regexp (regexp_id)
);
-- 评价表
drop table if exists reg_evaluate;
CREATE TABLE reg_evaluate (
    evaluate_id INT(11) AUTO_INCREMENT COMMENT '评论id',
    evaluate VARCHAR(255) NOT NULL COMMENT '评论',
    regexp_id INT(11) NOT NULL COMMENT 'reg数据外键',
    user_id INT(11) NOT NULL COMMENT '用户外键',
    create_time TIMESTAMP NOT NULL DEFAULT now(),
    PRIMARY KEY (evaluate_id),
    FOREIGN KEY (regexp_id)
        REFERENCES reg_regexp (regexp_id),
    FOREIGN KEY (user_id)
        REFERENCES reg_user (user_id)
);
-- 系统日志
drop table if exists reg_log;
CREATE TABLE reg_log (
    id INT AUTO_INCREMENT COMMENT '日志id',
    nickname VARCHAR(64) NOT NULL COMMENT '昵称',
    email VARCHAR(255) NOT NULL COMMENT '邮箱',
    ip VARCHAR(64) NOT NULL COMMENT 'IP',
    module VARCHAR(64) NOT NULL COMMENT '所属模块',
    log_desc VARCHAR(128) NOT NULL COMMENT '操作描述',
    create_time TIMESTAMP NOT NULL DEFAULT NOW(),
    PRIMARY KEY (id)
);
desc reg_log;