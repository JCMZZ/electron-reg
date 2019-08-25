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
insert into reg_oper (oper_code, oper_name) value 
('D001', '删除1'),
('R001', '查看1'),
('U001', '更新1'),
('C001', '添加1');
select * from reg_oper;
-- 页面导航
insert into reg_navigation (nav_code, nav_name) values
('RN01', '个人中心'),
('RN02', '应用中心'),
('RN03', '管理中心');
select * from reg_navigation;
-- 页面建立
insert into reg_page  (page_code, title, page_router, nav_code) values 
('RP00', '个人信息', '/personage', 'RN01'),
('RP01', '修改密码', '/changpwd', 'RN01'),
('RP02', '评论信息', '/reviewinfo', 'RN01'),
('RP03', '查询列表', '/queryreg', 'RN02'),
('RP04', '测试场', '/testreg', 'RN02'),
('RP05', '建立正则', '/addreg', 'RN02'),
('RP06', '用户列表', '/userlist', 'RN03');
select * from reg_page;
-- 页面与操作关联
insert into reg_page_oper (page_code, oper_code) values
('RP00', 'R001'),
('RP00', 'D001'),
('RP00', 'U001'),
('RP01', 'R001'),
('RP02', 'R001'),
('RP03', 'R001'),
('RP04', 'R001'),
('RP05', 'R001'),
('RP06', 'R001');
select * from reg_page_oper;
-- 角色
insert into reg_role (role_name) values
('超级管理员'),( '普客');
select * from reg_role;
-- 角色与权限关联
insert into reg_role_auth (auth_id, role_id) values 
(1, 1),(2, 1),(3, 1),(4, 1),(5, 1),(6, 1),(7, 1),(8, 1),(9, 1),
(1, 2),(2, 2),(3, 2),(4, 2);
select * from reg_role_auth;
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


