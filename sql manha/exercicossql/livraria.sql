use exercicio-livraria;




CREATE TABLE Autores (



 AutorID int , PRIMARY KEY, AUTO_INCREMENT,
Nome VARCHAR(50), NOT null ,
Nacionalidade VARCHAR(50)


)



CREATE table livros (

livro_id int, PRIMARY KEY, AUTO_INCREMENT, 
titulo VARCHAR(30), NOT null,
genero VARCHAR(25),
ano_publicacao date, 
autor_id int,  foreign KEY references Autores 

)


CREATE TABLE IF NOT EXISTS Autores (
    AutorID INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(100) NOT NULL,
    Nacionalidade VARCHAR(50)
);


--------------------------------------------------------------------

use exercicio-livraria


CREATE COLUMNS Autores
from exercicio-livraria(



AutorID int , PRIMARY KEY, AUTO_INCREMENT,
Nome VARCHAR(50), NOT null ,
Nacionalidade VARCHAR(50)


)



CREATE COLUMNS livros
from exercicio-livraria (

livro_id int, PRIMARY KEY, AUTO_INCREMENT, 
titulo VARCHAR(30), NOT null,
genero VARCHAR(25),
ano_publicacao date, 
autor_id int,  foreign KEY references Autores 

)




use exercicio-livraria;



USE exercicio-livrari;

CREATE TABLE Livro (
    livro_id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(30) NOT NULL,
    genero VARCHAR(25),
    ano_publicacao DATE,
    autor_id INT,
    FOREIGN KEY (autor_id) REFERENCES Autores(autor_id)
);