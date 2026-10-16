export interface Project {
  slug: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  live?: string;
  semester: number | null;
  contribution: string;
}

// null indica informação não fornecida; dados do curso conferidos no certificado.
export const profile = {
  name: 'Maria Fernanda',
  fullName: 'Maria Fernanda Silva Mirita' as string | null,
  github: 'https://github.com/nandamyrita',
  linkedin: 'https://www.linkedin.com/in/maria-fernanda-439137202/',
  email: 'mariafernanda.mfsm8@gmail.com',
  institution: 'Fatec Zona Leste',
  course: 'Desenvolvimento de Software Multiplataforma',
  startYear: '2024',
  currentSemester: 6,
  startSemester: '1º semestre' as string | null,
  graduation: 'Dezembro de 2026' as string | null,
  languages: [
    { name: 'Português', level: 'Nativo' },
    { name: 'Inglês', level: 'Intermediário' },
  ] as { name: string; level: string }[],
  courses: [
    {
      name: 'Trilha de Front-end — Elas+ Tech',
      institution: 'Ada',
      location: null,
      hours: 92,
      start: null,
      end: 'Maio de 2026',
      certificate: 'certificado-ada.png',
    },
  ] as { name: string; institution: string; location: string | null; hours: number; start: string | null; end: string | null; certificate?: string }[],
};

export const projects: Project[] = [
  {
    slug: 'patty-nails', name: 'Patty Nails', category: 'Agendamento de manicure',
    description: 'Aplicação web para agendar sessões de manicure. Clientes podem consultar horários, agendar e cancelar sessões, enquanto administradores gerenciam os agendamentos.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Express', 'MySQL', 'Sequelize', 'Handlebars'],
    image: 'patty-nails.png', github: 'https://github.com/nandamyrita/Patty-Nails-1', semester: 2,
    contribution: 'Participei do desenvolvimento do frontend e do backend, além do design das interfaces.',
  },
  {
    slug: 'center-pet', name: 'Center Pet', category: 'Mobile',
    description: 'Aplicativo mobile que reúne informações sobre animais e ONGs, com visualização de animais e organizações em destaque. Desenvolvido no 5º semestre, utiliza React Native e Expo, com navegação entre telas, autenticação e integração com API.',
    technologies: ['React Native', 'Expo', 'JavaScript', 'NativeWind', 'React Navigation', 'AsyncStorage'], image: 'center-pet.png', github: 'https://github.com/Center-Pet/center-pet-mobile', semester: 5,
    contribution: 'Participei do desenvolvimento do frontend e do backend, além do design das interfaces.',
  },
  { slug: 'estocaai', name: 'EstocaAi', category: 'Gestão de estoque', description: 'Sistema para acompanhar produtos, vendas e entradas de estoque. Reúne autenticação, controle de movimentações e gráficos em um dashboard.', technologies: ['React', 'TypeScript', 'Firebase', 'Chart.js'], image: 'dashboard.png', github: 'https://github.com/DreyMendonca/stock', live: 'https://estocai.vercel.app/', semester: 3, contribution: 'Participei do desenvolvimento do frontend e do backend, além do design das interfaces.' },
  { slug: 'simone-buffet', name: 'Simone Buffet', category: 'Serviços e eventos', description: 'Site de divulgação dos serviços de buffet, com formulário de pedidos integrado ao WhatsApp e área administrativa para atualizar as informações.', technologies: ['React', 'Tailwind CSS', 'Firebase', 'Vite'], image: 'buffet.png', github: 'https://github.com/nandamyrita/SimoneBuffet', live: 'https://simonebuffet.vercel.app/', semester: 4, contribution: 'Participei do desenvolvimento do frontend e do backend, além do design das interfaces. Desenvolvi a página de divulgação dos serviços, o formulário que organiza os pedidos para envio pelo WhatsApp e a área administrativa para edição das informações.' },
  { slug: 'todo-list', name: 'To-do List', category: 'Organização pessoal', description: 'Lista de tarefas com ações para adicionar, concluir e remover itens. Um exercício de componentes e gerenciamento de estado em React.', technologies: ['React', 'Tailwind CSS', 'TypeScript'], image: 'todo-list.png', github: 'https://github.com/nandamyrita/todo-list', live: 'https://todo-list-nine-kappa-68.vercel.app/', semester: null, contribution: 'Participei do desenvolvimento do frontend e do backend, além do design das interfaces.' },
  { slug: 'ghibli-fest', name: 'Ghibli Fest', category: 'Catálogo de filmes', description: 'Catálogo que consome a API do Studio Ghibli e apresenta informações dos filmes em cards, com uma visualização de detalhes para cada título.', technologies: ['React', 'Tailwind CSS', 'API', 'Next.js'], image: 'ghibli.png', github: 'https://github.com/nandamyrita/ghibli-website', live: 'https://ghibli-website-dfwm.vercel.app/', semester: null, contribution: 'Participei do desenvolvimento do frontend e do backend, além do design das interfaces.' },
  { slug: 'climatour', name: 'ClimaTour', category: 'Inteligência artificial', description: 'Chatbot para consultar informações sobre o clima em diferentes cidades, usando uma API em Python para oferecer respostas por conversa.', technologies: ['Python', 'FastAPI'], image: 'chatbot.png', github: 'https://github.com/nandamyrita/ClimaTour-IA-Agent', semester: null, contribution: 'Participei do desenvolvimento do frontend e do backend, além do design das interfaces.' },
];

export const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;
