use reg;
-- 创建用户
insert into reg_user (nickname, email, pwd, motto, head_portrait, birthday, working_unit, academy, user_desc, state) values 
('Admin', 'Admin@reg.cn', md5('666666'), '方法总比问题多', '', now(), '某某公司', '河北科大', '我是管理员', 1, now());
insert into reg_user (nickname, email, pwd, motto, head_portrait, birthday, working_unit, academy, user_desc, state) values 
('Anonymous', 'Anonymous@reg.cn', md5('666666'), 'Anonymous', '', now(), 'Anonymous', 'Anonymous', '我是Anonymous', 1, now());
insert into reg_user (email, pwd, motto, head_portrait, birthday, working_unit, academy, user_desc, state) values 
('Reg@reg.cn', md5('666666'), 'Reg', '', now(), 'Reg', 'Reg', 'Reg', 1, now());
SELECT * FROM reg_user;
-- 创建标签
insert into reg_label (label_name, user_id) values
('背包客', 8),
('肥宅', 9),
('皮卡丘', 8),
('智障', 9);
select * from reg_label;
-- 给予用户标签
insert into reg_user_label (label_id, user_id) values
(1, 7),
(2, 7),
(3, 7),
(4, 9);
select * from reg_user_label;
-- 操作权限
insert into reg_oper (oper_code, oper_desc, page_code) value 
('OPER_ROLE_MODIFY', '角色修改-- ','PAGE_ROLE_MANAGEMENT'),
('OPER_USER_MANAGEMENT_MODIFY', '用户修改','PAGE_USER_MANAGEMENT'),
('OPER_ROLE_MANAGEMENT_ADD', '角色添加','PAGE_ROLE_MANAGEMENT');
select * from reg_oper;
-- 页面导航
insert into reg_navigation (nav_code, nav_name) values
('NAV_PERSONAL_CENTER', '个人中心'),
('NAV_APPLICATION_CENTER', '应用中心'),
('NAV_MANAGEMENT_CENTER', '管理中心');
select * from reg_navigation;
-- 页面建立
insert into reg_page  (page_code, title, page_router, nav_code) values 
('PAGE_ROLE_MANAGEMENT', '角色管理', '/authority/management', 'NAV_MANAGEMENT_CENTER'),
('PAGE_USER_MANAGEMENT', '用户管理', '/user/management', 'NAV_MANAGEMENT_CENTER');
select * from reg_page;
-- 角色
insert into reg_role (role_name) values
('超级管理员'),( '普客');
select * from reg_role;
-- 角色与权限关联
insert into reg_role_permission (role_id, permission_id, permission_type) values 
(1, 'PAGE_ROLE_MANAGEMENT', 'page'),
(1, 'OPER_ROLE_MODIFY', 'oper'),
(1, 'PAGE_USER_MANAGEMENT', 'page'),
(1, 'OPER_USER_MANAGEMENT_MODIFY', 'oper'),
(2, 'PAGE_USER_MANAGEMENT', 'page'),
(2, 'OPER_USER_MANAGEMENT_MODIFY', 'oper');
select * from reg_role_permission;
-- 用户与角色
insert into reg_user_role (role_id, user_id) values 
(1,7), (2,9);
select * from reg_user_role;
-- 正则标签
insert into reg_tag (tag_name, user_id) values
('手机', 7), ('身份证', 7), ('电话', 7),
('数字', 8), ('WAY', 8);
select * from reg_tag;
-- 正则
insert into reg_regexp (content, regexp_desc, user_id) values
('/[0-9]/', '数字', 9),
('/WAY/', 'WAY', 7);
select * from reg_regexp;
-- 正则与标签
insert into reg_regexp_tag (tag_id, regexp_id) values
(4, 1), (5, 2);
select * from reg_regexp_tag; 
-- 评论
insert into reg_evaluate (evaluate, regexp_id, user_id) values
('数字不错', 1, 9),
('我感觉数字不错', 1, 7),
('WAY不错', 2, 7);
select * from reg_evaluate;


