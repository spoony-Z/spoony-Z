---
order: 3
---

# SQL

## SQL 通用语法
1. **SQL** 语句可以单行或多行书写，以分号结尾。
2. **SQL** 语句可以使用空格/缩进来增强语句的可读性。
3. **MySQL** 数据库的 **SQL** 语句不区分大小写，关键字建议使用大写
4. 注释
    - 单行注释：**--** 注释内容或 **#** 注释内容（**MySQL** 特有）
    - 多行注释： /*注释内容*/

## SQL 分类
![](./images/2.png)

### DDL（Data Definition Language）
> **数据定义语言，用来定义数据库对象(数据库，表，字段)**

#### DDL 数据库操作
- 查询
```sh
# 查询所有数据库
SHOW DATABASES;

# 查询当前数据库
SELECT DATABASE();
```

- 创建
```sh
CREATED DATABASE [IF NOT EXISTS] 数据库名 [DEFAULT CHARSET 字符集] [COLLATE 排序规则];

# 例：创建 myfristsql 数据库
create database myfristsql;

# 若存在 则不创建 不存在则创建
create database if not exists myfristsql;

# 创建字符集为 utf8mb4
create database if not exists myfristsql default charset utf8mb4;
```

- 删除
```sh
DROP DATABASE[IF EXISTS] 数据库名;

# 例：删除 myfristsql 数据库
drop database myfristsql

# 若存在 则删除 不存在则不删除
drop database if exists myfristsql;
```

- 使用
```sh
USE 数据库名;
```

#### DDL 表操作
- 查询（通过 USE 数据库名 使用之后查询）
```sh
# 查询当前数据库所有表
SHOW TABLES;

# 查询表结构
DESC 表名;

# 查询指定表的建表语句
SHOW CREATE TABLE 表明;
```

- 创建（通过 USE 数据库名 使用之后查询）
```sh
CREATE TABLE 表名(
    字段1 字段1类型 COMMENT 字段1注释,
    字段2 字段2类型 COMMENT 字段2注释,
    字段3 字段3类型 COMMENT 字段3注释,
    ······
)[COMMENT 表注释];
```

- 修改
```sh
ALTER TABLE 表名 RENAME TO 新表名;
```

- 删除
```sh
# 直接删除
DROP TABLE [if EXISTS] 表明;

# 删除并重新创建
TRUNCATE TABLE 表明;
```

- 数据类型
    > MySQL中的数据类型有很多，主要分为三类:数值类型、字符串类型、日期时间类型

    1. 数值类型
        ![](./images/3.png)
    1. 字符串类型
        ![](./images/4.png)
    1. 日期时间类型
        ![](./images/5.png)


- 添加字段 & 修改字段 & 删除字段
```sh
# 添加字段
ALTER TABLE 表名 ADD 字段名 类型(长度) COMMENT 注释 约束;

# 例：为 emp 表增加一个新的字段“昵称”为 nickname，类型为varchar(20)
alter table emp add nickname varchar(20) comment "昵称";

# 添加完成之后查看
desc emp;

# 修改数据类型
ALTER TABLE 表名 MODIFY 字段名 新数据类型(长度);

# 修改字段名和字段类型
ALTER TABLE 表名 CHANGE 旧字段名 新字段名 类型(长度) COMMENT 注释;

# 删除字段
ALTER TABLE 表名 DROP 字段名;
```

### DML（Data Manipulation Language）
**数据操作语言，用来对数据库表中的数据进行增删改**

- 添加数据
```sh
# 给指定字段添加数据
INSERT INTO 表名 (字段名1, 字段名2, ···) VALUES (值1, 值2, ···);

# 给全部指定字段添加数据
INSERT INTO 表名 VALUES(值1, 值2, ···);

# 批量指定字段添加数据
INSERT INTO 表名 (字段名1, 字段名2, ···) VALUES (值1, 值2, ···), (值1, 值2, ···), (值1, 值2, ···);

# 批量给全部字段添加数据
INSERT INTO 表名 VALUES (值1, 值2, ···), (值1, 值2, ···), (值1, 值2, ···),;
```
:::warning 注意
- 插入数据时，指定的字段顺序需要与值的顺序是一一对应的.
- 字符串和日期型数据应该包含在引号中
- 插入的数据大小，应该在字段的规定范围内。
:::

- 修改数据
```sh
UPDATE 表名 SET 字段名1 = 值1, 字段名2 = 值2, ···[WHERE 条件];

# 例
update employee set name = '修改后的值' where id = 1;
```
:::warning 注意
修改语句的条件可以有，也可以没有，如果没有条件，则会修改整张表的所有数据.
:::

- 删除数据
```sh
DELETE FROM 表名 [WHERE 条件];

# 例
delete from employee where id = 1;
# 删除表所有数据
delete from employee;
```

### DQL（Data Query Langtage）
**数据查询语言，用来查询数据库中表的记录**

- 基本查询
```sh
# 查询多个字段
SELECT 字段1, 字段2, 字段3,··· FROM 表名;
# 查询返回所有字段(尽量不要用 * 效率低)
SELECT * FROM 表名;

# 设置别名
SELECT 字段1 [AS 别名1], 字段2 [AS 别名2] ··· FROM 表名;

# 去除重复记录
SELECT DISTINCT 字段列表 FROM 表名;

```

- 条件查询(WHERE)


- 聚合函数(count、max、min、avg、sum)

- 分组查询 (GROUP BY)

- 排序查询 (ORDER BY)

- 分页查询 (LIMIT)

### DCL（Data Control Language）
**数据控制语言，用来创建数据库用户、控制数据库的访问权限**

