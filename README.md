# Setup the project

-  install the ORM 
    ` npm i sequelize `

- install the driver for your corresponding db
- In my case i am using mysql database 
    `  npm i mysql2 `

- Install the sequelize cli for config of db 
    `  npm i sequelize-cli `

- Project code is in the src folder
- go to the path of src folder by doing 
 ` cd src `

- Then do 
 ` npx sequelize init `


- Inside the `src/config` folder create a file named as `config.json` and write the following code: 

{
    "development": {
        "username": "root",
        "password": null,
        "database": "database_development",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "test": {
        "username": "root",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "production": {
        "username": "root",
        "password": null,
        "database": "database_production",
        "host": "127.0.0.1",
        "dialect": "mysql"
    }
}

- If you are setting up your development environment, then write the username of your db, password of your db and in dialect mention whatever db you are using ex: mysql, maridb, postgress etc

- If you're setting up test or prod environment, make sure you also replace the host with the hosted db url
