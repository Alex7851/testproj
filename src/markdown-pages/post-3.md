---
slug: "/blog/my-third-post"
title: "mytitle"
date: "13-02-2021"
---

## 1) выкачать проект на сервер 
## 2) установить docker и docker-compose
 **docker:** https://docs.docker.com/engine/install/ubuntu/  
**docker-compose:** https://docs.docker.com/compose/install/ 

## 3) установить JAVA и задать переменную JAVA_HOME (для генерации shibboleth)  
**установка JAVA:**
```
sudo apt update  
sudo apt install default-jre
```
**установка переменной JAVA_HOME:**

- узнать путь каталогу JAVA 
```
sudo update-alternatives --config java
```

- скопировать путь до папки bin (саму папку bin в путь не включать)

- открыть файл переменных окружения

```
sudo vi /etc/environment
```
- в открывшемся файле добавить переменную JAVA_HOME и сохранить файл
```
JAVA_HOME="<путь до папки с JAVA>"
```
- выполнить команду 
```
sudo source /etc/environment
```