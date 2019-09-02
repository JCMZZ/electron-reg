SET @user_id = 7;
SET @pwd = md5('666666');
-- 获取用户角色
select @role_id:=ur.role_id as role_id from reg_user_role ur where ur.user_id = @user_id;
-- 获取角色信息
SELECT DISTINCT
    p.page_id,
    p.page_code,
    p.title,
    p.page_router,
    n.nav_name,
    n.nav_code
FROM
    reg_role_permission rp,
    reg_page p
        LEFT JOIN
    reg_navigation n ON n.nav_code = p.nav_code
WHERE
    rp.permission_id = p.page_code
        AND rp.permission_type = 'page'
        AND rp.role_id IN (1 , 2);
SELECT DISTINCT
    o.oper_id, o.*
FROM
    reg_role_permission rp,
    reg_oper o
WHERE
    rp.permission_id = o.oper_code
        AND rp.permission_type = 'oper'
        AND rp.role_id IN (1 , 2);
select * from reg_user;

