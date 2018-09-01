INSERT INTO cidades (nome, area, estado_id)
values ('Campinas', 795, 31)

INSERT INTO cidades (nome, area, estado_id)
values ('Niterói', 133.9, 25)

INSERT INTO cidades (nome, area, estado_id)
values ('Caruaru', 920.6, (select id from estados where sigla = 'PE'))

INSERT INTO cidades (nome, area, estado_id)
values ('Juazeiro do Noite', 248.6, (select id from estados where sigla = 'CE'))