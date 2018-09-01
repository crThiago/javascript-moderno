CREATE TABLE IF NOT EXISTS prefeitos (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome varchar(255) not null,
    cidade_id int unsigned,
    primary key(id),
    unique key (cidade_id),
    foreign key (cidade_id) references cidades (id)
)