

alter table empresas modify cnpj varchar(14)    

insert into empresas
    (nome, cnpj)
values
    ('Bradesco', 199999999999),
    ('Vale', 299199999992),
    ('Cielo', 399999999993)


insert into empresas_unidades
    (empresa_id, cidade_id, sede)
values
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1)


