CREATE DATABASE `tinysales` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

flush privileges;

CREATE USER 'bilibili'@'%' IDENTIFIED BY 'Init1234$';

flush privileges;

grant all privileges on tinysales.* to 'bilibili'@'%' identified by 'Init1234$';

flush privileges;
