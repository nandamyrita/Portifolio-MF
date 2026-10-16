# Conteúdo do portfólio

Os dados pessoais e os projetos ficam em `src/data/portfolio.ts`.
Os campos ainda não confirmados aparecem como pendências no site. A entrega
acadêmica depende do preenchimento dessas informações reais.

- `profile.fullName`: nome completo, incluindo sobrenomes.
- `profile.startSemester`: semestre de ingresso (o ano de 2024 já constava no site).
- `profile.graduation`: previsão de conclusão.
- `profile.courses`: cursos de extensão, com nome, instituição, local, horas, início e término. Use `null` no término para cursos em andamento.
- `profile.languages`: idiomas e níveis.
- `projects[].semester`: número de 1 a 5, conforme o semestre de realização. Use `null` enquanto não houver confirmação. É possível incluir vários projetos por semestre.
- `projects[].contribution`: descrição da participação individual.

Os cards originais permanecem em `src/components/Projects.tsx`. Os dados
complementares de semestre e contribuição estão em `src/data/portfolio.ts`.
A associação é feita pelo endereço do repositório. O botão de detalhes
abre a apresentação do projeto em uma janela com descrição, captura,
tecnologias, links e participação individual.

A experiência profissional está em `src/components/Experience.tsx`.

## Dados conferidos e escopo

- Curso da Ada: Trilha de Front-end — Elas+ Tech, 92 horas, maio de 2026, conforme certificado enviado pela aluna. Imagem em `public/certificado-ada.png`, acessível pelo link "Ver certificado" no curso.
- A modalidade online e o início em março eram sugestões e foram retirados: o certificado não informa esses dados.

O Simone Buffet aparece apenas como projeto do 4º semestre, conforme solicitado pela aluna, e foi removido da linha de experiências.

As tecnologias do Center Pet foram verificadas no `package.json` e no README
do repositório https://github.com/Center-Pet/center-pet-mobile. A descrição usa
também a captura enviada pela aluna.

O filtro e os avisos sobre o projeto do 1º semestre foram removidos a pedido da aluna. Esse trabalho não está incluído no portfólio, embora faça parte dos requisitos originais da entrega. Os projetos sem associação a semestre aparecem como complementares.

## Conferência antes da entrega

- Considerar que a entrega original exige os cinco primeiros semestres e que o projeto do 1º não está incluído.
- Completar as informações pendentes e revisar a participação individual em cada projeto.
- Conferir as capturas e os links dos repositórios e das demonstrações.
- Atualizar o currículo em `public/CurriculoEstagio.pdf`, se necessário.

A hospedagem existente foi mantida. Nenhuma publicação ou commit faz parte
destas alterações locais.
