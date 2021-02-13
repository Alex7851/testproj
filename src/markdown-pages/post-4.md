---
slug: "/blog/my-forth-post"
title: "mytitle"
date: "14-02-2021"
---

dsff
Hello World! <br>
I'm championdff
xxxx

## 3)  установить JAVA и задать переменную JAVA_HOME (для генерации shibboleth) 
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
dsff
Hello World! <br>
I'm championdff
xxxx

## 3)  установить JAVA и задать переменную JAVA_HOME (для генерации shibboleth) 
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