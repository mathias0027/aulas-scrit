

 linha -------------------
coluna|   
      |
      |
      |
     

USE ti3k5791_mathiasantonio;

     CREATE TABLE id clientes 
( 
 id INT PRIMARY KEY AUTO_INCREMENT,  
 nome VARCHAR(n) NOT NULL,  
 email VARCHAR(n) NOT NULL,  
 telefone VARCHAR(n) NOT NULL,  
 endereço VARCHAR(n),  
 UNIQUE (email,telefone)
);


----------------------------------------------------------------------------------------------
comendos basicos
DDL linguagem de definiçao de dados, comandos para criar, alterar ou excluir coisas


CREATE TABLE nome_tabela (
 --coluna/tipo de dado/restriçao


id_Clientes INT PRIMARY KEY,
nome VARCHAR(100),
telefone VARCHAR(100),
);


CREATE TABLE if NOT EXISTS clientes

---------------------------------------------------------------------
como alterar tabelas 

alter table nome_tabela 
ADD email VARCHAR(100)


alter table nome_tabela  ------renomear
rename to clientes

-------------------------------------------


drop table nome_tabela --deletar tabela




DML  ====   linguagem de manipulaçao de dados 
manipular dados, inserir, atualizar, excluir ou consultar dados dentro das tabelas



INSERT INTO clientes(id_Clientes, nome , email_clientes)
VALUES (1, 'rafa', 'rafa@gmail.com');

INSERT INTO clientes(id_Clientes, nome , email_clientes)

VALUES (2, 'rafa', 'rafa@gmail.com'),
 	   (3, 'rafa', 'rafa@gmail.com'),
       (3, 'rafa', 'rafa@gmail.com');

       INSERT ignore into clientes 


       update clientes
       set email = 'novoemail.@'
       where id_Clientes = 1; -- condiçao// sem where *********muda toda a lista*******

       delete from  clientes
       where id_Clientes = 1;

      

      COMO consultar dados ----------------------------


select (id_Clientes, email_clientes , telefone);
from clientes; 


select *
from clientes 
where id_Clientes => 6 ;   --mostra todos

ordenar---

select *
 from clientes 
 order by nome asc; -- ordem crescente -- desc ordena ao contrario

select





CREATE TABLE Pedidos (
idPedido int AUTO_INCREMENT PRIMARY KEY,
id_Clientes int,
    numeroPedidos varchar(40),
    valorTotal decimal (10, 2),
    dataPedido date,
    FOREIGN KEY (id_Clientes) REFERENCES clientes(id_Clientes)

);




--valores de datas ano mes dia ---


USE ti3k5791_mathiasantonio;

INSERT INTO Pedidos (id_Clientes, numeroPedidos, valorTotal, dataPedido)
VALUES (1, 'pedid-001' , 200.00 , '2023-07-12'),
       (1, 'pedid-002' , 150.00 , '2023-07-12'),
       (1, 'pedid-003' , 180.56 , '2023-07-12');

       

select SUM(valorTotal) AS valor_total_pedidos
FROM Pedidos ;






select count (*)
from Pedidos