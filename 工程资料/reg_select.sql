-- 登录页
	-- 用户信息
    -- 用户权限
    -- 页面
SET @email = 'Reg@reg.cn';
SET @pwd = md5('666666');
SELECT 
    u.user_id,
    u.nickname,
    u.academy,
    u.birthday,
    u.email,
    u.head_portrait,
    u.motto,
    u.working_unit,
    u.user_desc,
    rr.role_name,
    rr.role_id,
    rra.auth_id,
    rpo.page_code,
    rpo.oper_code,
    rp.title,
    rp.page_router,
    rp.nav_code
FROM
    reg_user u,
    reg_user_role ur
        LEFT JOIN
    reg_role rr ON rr.role_id = ur.role_id
		left join
	reg_role_auth rra on rra.role_id = rr.role_id
		left join 
	reg_page_oper rpo on rpo.page_oper_id = rra.auth_id
		left join 
	reg_page rp on rp.page_code = rpo.page_code
WHERE
    u.user_id = ur.user_id
        AND email = @email
        AND pwd = @pwd;
-- 个人信息页
	SELECT 
    u.user_id,
    u.nickname,
    u.academy,
    u.birthday,
    u.email,
    u.head_portrait,
    u.motto,
    u.working_unit,
    u.user_desc,
    l.label_id,
    ll.label_name
FROM
    reg_user u,
    reg_user_label l
        LEFT JOIN
    reg_label ll ON ll.label_id = l.label_id
WHERE
    u.user_id = 7 AND u.user_id = l.user_id;
-- 正则列表
	