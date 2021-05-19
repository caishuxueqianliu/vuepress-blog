# node中使用mysql
## 配置mysqlconfig
``` js
const util = require('util');
var mysqlConfig = {
        config : {
            host : "localhost",
            user : "root",
            password : "11111111",
            database : "mine",
            port : 3306,
            connectionLimit : 30
        },

        tables : {
            user : "Tuser"
        },

        sql : {
            mysqlusersql: "create user 'root'@'localhost' identified by '11111111';" +
                "grant all privileges on mine.* to 'root'@localhost;" +
                "flush privileges;",

            _createDataBase : 'CREATE DATABASE IF NOT EXISTS `%s` DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_general_ci',
            createDataBase(){
                return util.format(this._createDataBase,mysqlConfig.config.database)
            },

            _createUsersTable : 'CREATE TABLE IF NOT EXISTS `%s` (' +
                '`uid` int(11) NOT NULL AUTO_INCREMENT COMMENT "自增ID",' +
                '`uname` varchar(10) NOT NULL COMMENT "uname",' +
                '`upasswd` varchar(32) NOT NULL COMMENT "upasswd",' +
                '`power` varchar(10) NOT NULL COMMENT "power",' +
                'PRIMARY KEY (`uid`) USING BTREE' +
                ') ENGINE=InnoDB DEFAULT CHARSET=utf8mb4',
            createUsersTable(){
                return  util.format(this._createUsersTable, mysqlConfig.tables.user)
            },
        _createUser : 'INSERT INTO `%s` SELECT "1", "xuegao", "5f72bdb72c6af06aefcd6dfd6698e6b3", "3"'+
            'FROM dual WHERE not exists (select * from Tuser where uname = "xuegao")',
        createUser(){
            return  util.format(this._createUser, mysqlConfig.tables.user )
        }
    }
}
module.exports = mysqlConfig

```
## 配置mysql
``` js
// 引入mysql
var mysql = require('mysql');
var {config, sql} = require('./mysqlconfig')
//连接数据库池
var pool = mysql.createPool(config);

var db = {
    init: function () {
        if (this.inited) return;

        new Promise((resolve, reject) => {
            let baseconfig = {...config}
            delete baseconfig.database
            let connection = mysql.createConnection(baseconfig)

            connection.query(sql.createDataBase(), (err, result, fields) => {
                if (err) {
                    reject(err)
                    return
                }

                pool = mysql.createPool(config)
                resolve(result)
            })
        }).then(
            () => db.query(sql.createUsersTable())
        ).then(
            () => db.query(sql.createUser())
        ).then(
            () => {
                this.inited = true
            }
        ).catch(err => {
            console.error(err)
        })
    },

    query(sql) {
        // sql = String
        return this._operation(sql);
    },

    select(array, table, where, link) {
        // array = Array
        // table = String
        // where = { key: value }
        // link = 'AND' or 'OR' default 'AND'
        let sql = "SELECT ";
        array.forEach(((value, index) => {
            if (index === 0) {
                sql += value;
            } else {
                sql += ',' + value
            }
        }));
        sql += ' FROM ' + table;
        if (where) {
            sql += this._handleWhereString(where, link);
        }
        return this._operation(sql);
    },

    insert(info, table) {
        // info = { key: value }
        // table = String
        let sql = "INSERT INTO " + table + "(";
        let keyArray = [];
        let valueArray = [];
        Object.keys(info).forEach((key) => {
            keyArray.push(key);
            valueArray.push("'" + info[key] + "'");
        });
        let keyStr = keyArray.join(',');
        let valueStr = valueArray.join(',');
        sql += keyStr + ') ';
        sql += 'VALUES(' + valueStr + ')';
        return this._operation(sql);
    },

    update(info, table, where, link) {
        let sql = "UPDATE " + table + " SET ";
        let sqlArray = [];
        Object.keys(info).forEach((key) => {
            sqlArray.push(key + "='" + info[key] + "'");
        });
        sql += sqlArray.join(',');
        if (where) {
            sql += this._handleWhereString(where, link);
        }
        return this._operation(sql);
    },

    delete(info, table, where, link) {
        // info = { key: value }
        // table = String
        // where = { key: value }
        // link = 'AND' or 'OR' default 'AND'
        let sql = "DELETE FROM " + table;
        if (where) {
            sql += this._handleWhereString(where, link);
        }
        return this._operation(sql);
    },

    _operation(sql) {
        return new Promise((resolve, reject) => {
            pool.getConnection(function (error, connection) {
                if (error) {
                    reject(error.message)
                    console.error(error)
                } else {
                    connection.query(sql, (error, result, fields) => {
                        if (error) {
                            console.log(error.message);
                            reject(error.message);
                        } else {
                            resolve(result);
                        }
                    });
                }
                pool.releaseConnection(connection)
            })
        });
    },

    _handleWhereString(where, link) {
        let str = "";
        if (typeof where === "string") {
            str = " WHERE " + where
        } else if (typeof where === "object") {
            let whereArray = [];
            Object.keys(where).forEach((key) => {
                whereArray.push(String(key + "='" + where[key] + "'"));
            });
            if (link) {
                let whereStr = whereArray.join(" " + link + " ");
                str += " WHERE " + whereStr;
            } else {
                let whereStr = whereArray.join(" AND ");
                str += " WHERE " + whereStr;
            }
        }
        return str;
    }
}

module.exports = db;

```
## app.js
``` js
require('./mysql/mysql.js').init()
```
## mysql增删改查
``` js
// SQL语句封裝
var user = {
    insert:'INSERT INTO mydb(id, name, age) VALUES(?,?,?)',
    update:'UPDATE mydb SET name=?, age=? WHERE id=?',
    delete: 'DELETE FROM mydb WHERE id=?',
    queryById: 'SELECT * FROM user WHERE id=?',
    queryAll: 'SELECT * FROM user'
};
module.exports = user;
```