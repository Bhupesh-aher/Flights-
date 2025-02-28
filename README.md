# Setup the project

-  install the ORM 
    ` npm i sequelize `

- install the driver for your corresponding db
- In my case i am using mysql database 
    `  npm i mysql2 `

- Install the sequelize cli for config of db 
    `  npm i sequelize-cli `

- go inside the `src` folder by executing - 
    ` cd src `

- and then execute the following command - 
 ` npx sequelize init `

- By executing the above command you will get migrationms and seeders folder along with a config.json inside the config folder


- inside `src/config/config.json` do the following 

- If you are setting up your development environment, then write the username of your db, password of your db and in dialect mention whatever db you are using ex: mysql, maridb, postgress etc

- If you're setting up test or prod environment, make sure you also replace the host with the hosted db url


- To run the server execute 
    `npm run dev`