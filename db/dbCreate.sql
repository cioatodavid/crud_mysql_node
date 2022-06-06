--command to create database in mysql server

CREATE TABLE REPLACEMENT_PART(
    ID INT NOT NULL AUTO_INCREMENT,
    SERIAL_NUMBER VARCHAR(300) NOT NULL,
    WIDTH DOUBLE(100, 2) NOT NULL,
    HEIGHT DOUBLE(100, 2) NOT NULL,
    DEPTH DOUBLE(100, 2) NOT NULL,
    WEIGHT DOUBLE(100, 2) NOT NULL,
        PRIMARY KEY (ID)
);

CREATE TABLE MACHINE(
    ID INT NOT NULL AUTO_INCREMENT,
    SERIAL_NUMBER VARCHAR(300) NOT NULL,
    WIDTH DOUBLE(100, 2) NOT NULL,
    HEIGHT DOUBLE(100, 2) NOT NULL,
    DEPTH DOUBLE(100, 2) NOT NULL,
    WEIGHT DOUBLE(100, 2) NOT NULL,
        PRIMARY KEY (ID)
);

CREATE TABLE REPLACEMENT_PART_FOR_MACHINE(
    MACHINE_ID INT NOT NULL,
    REPLACEMENT_PART_ID INT NOT NULL,
        PRIMARY KEY (MACHINE_ID, REPLACEMENT_PART_ID),
        FOREIGN KEY (MACHINE_ID) REFERENCES MACHINE(ID),
        FOREIGN KEY (REPLACEMENT_PART_ID) REFERENCES REPLACEMENT_PART(ID)
);