<div align="center">
  <img width="280" height="280" alt="91744653" src="https://github.com/user-attachments/assets/190e9898-7a7c-48b0-8dd7-235721cebd93" />


# Desafio Full Cycle - TypeScript

Projeto de microserviços para administração de vídeos desenvolvido com TypeScript, aplicando conceitos de Clean Architecture e Domain-Driven Design (DDD).

[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green?logo=node.js)](https://nodejs.org/)
[![Jest](https://img.shields.io/badge/Jest-29.7.0-red?logo=jest)](https://jestjs.io/)
[![Docker](https://img.shields.io/badge/Docker-Ready-blue?logo=docker)](https://www.docker.com/)

</div>

---

## 📋 Sobre o Desafio

Este projeto faz parte do desafio da **Full Cycle**, focado na construção de um sistema de microserviços para administração de vídeos. O objetivo é aplicar boas práticas de desenvolvimento, arquitetura limpa e padrões de design para criar uma aplicação escalável e testável.

## 🎯 Objetivos do Desafio

- Implementar entidades de domínio com TypeScript
- Aplicar conceitos de Clean Architecture
- Utilizar Domain-Driven Design (DDD)
- Criar testes unitários com Jest
- Validação de dados com class-validator
- Configurar ambiente de desenvolvimento com Docker

## ✨ Funcionalidades

- **Gerenciamento de Categorias**: CRUD completo de categorias de vídeos
- **Validação de Entidades**: Validação robusta usando class-validator
- **Testes Automatizados**: Cobertura de testes com Jest
- **Arquitetura em Camadas**: Separação clara entre domínio, aplicação e infraestrutura

## 🚀 Tecnologias Utilizadas

### Core
- **TypeScript** - Linguagem de programação tipada
- **Node.js** - Runtime JavaScript

### Testes
- **Jest** - Framework de testes
- **@swc/jest** - Compilador rápido para Jest

### Validação
- **class-validator** - Validação de classes e propriedades

### Utilitários
- **uuid** - Geração de identificadores únicos
- **lodash** - Biblioteca de utilitários JavaScript

### DevOps
- **Docker** - Containerização da aplicação
- **Docker Compose** - Orquestração de containers

## 📦 Pré-requisitos

Antes de começar, você precisa ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/) (opcional)

## 🔧 Instalação

### Instalação Local

1. Clone o repositório:
```bash
git clone https://github.com/Joaoof/desafio-full-cycle-typescript.git
cd desafio-full-cycle-typescript
```

2. Instale as dependências:
```bash
npm install
```

3. Execute os testes:
```bash
npm test
```

### Instalação com Docker

1. Clone o repositório:
```bash
git clone https://github.com/Joaoof/desafio-full-cycle-typescript.git
cd desafio-full-cycle-typescript
```

2. Inicie os containers:
```bash
docker-compose up -d
```

3. Acesse o container:
```bash
docker-compose exec app bash
```

4. Execute os testes dentro do container:
```bash
npm test
```

## 🏗️ Arquitetura do Projeto

O projeto segue os princípios de **Clean Architecture** e **Domain-Driven Design (DDD)**:

```
desafio-full-cycle-typescript/
├── .devcontainer/          # Configuração do Dev Container
├── .docker/                # Scripts Docker
├── .github/                # GitHub Actions e workflows
├── src/
│   ├── category/
│   │   ├── domain/         # Entidades e regras de negócio
│   │   ├── application/    # Casos de uso
│   │   └── infrastructure/ # Implementações técnicas
│   └── shared/             # Código compartilhado
├── docker-compose.yml      # Orquestração de containers
├── Dockerfile              # Imagem Docker
├── jest.config.ts          # Configuração do Jest
├── tsconfig.json           # Configuração do TypeScript
└── package.json            # Dependências do projeto
```

### Camadas da Arquitetura

1. **Domain (Domínio)**
   - Entidades de negócio
   - Value Objects
   - Regras de domínio
   - Interfaces de repositórios

2. **Application (Aplicação)**
   - Casos de uso
   - DTOs (Data Transfer Objects)
   - Interfaces de serviços

3. **Infrastructure (Infraestrutura)**
   - Implementação de repositórios
   - Adaptadores externos
   - Configurações técnicas

## 🧪 Testes

O projeto utiliza **Jest** para testes unitários e de integração.

### Executar todos os testes:
```bash
npm test
```

### Executar testes em modo watch:
```bash
npm test -- --watch
```

### Executar testes com cobertura:
```bash
npm test -- --coverage
```

## 📝 Padrões e Boas Práticas

### Clean Architecture
- Separação clara de responsabilidades
- Independência de frameworks
- Testabilidade
- Independência de UI e banco de dados

### Domain-Driven Design (DDD)
- Entidades ricas em comportamento
- Value Objects imutáveis
- Agregados bem definidos
- Linguagem ubíqua

### SOLID Principles
- Single Responsibility Principle
- Open/Closed Principle
- Liskov Substitution Principle
- Interface Segregation Principle
- Dependency Inversion Principle

## 🛠️ Scripts Disponíveis

```bash
npm test           # Executa os testes com Jest
npm run build      # Compila o projeto TypeScript
npm run dev        # Inicia em modo de desenvolvimento
```

## 🐳 Docker

### Estrutura Docker

O projeto inclui:
- **Dockerfile**: Imagem base com Node.js
- **docker-compose.yml**: Orquestração do ambiente
- **.devcontainer**: Configuração para VS Code Dev Containers

### Comandos Docker úteis:

```bash
# Iniciar containers
docker-compose up -d

# Ver logs
docker-compose logs -f

# Parar containers
docker-compose down

# Reconstruir imagens
docker-compose build --no-cache
```

## 📚 Conceitos Aplicados

### Entidades de Domínio
- Identidade única (UUID)
- Validação de regras de negócio
- Encapsulamento de comportamento

### Value Objects
- Imutabilidade
- Validação no construtor
- Igualdade por valor

### Repositórios
- Abstração de persistência
- Interface no domínio
- Implementação na infraestrutura

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

## 📖 Recursos Adicionais

- [Full Cycle](https://fullcycle.com.br/) - Plataforma de cursos
- [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) - Artigo original
- [Domain-Driven Design](https://martinfowler.com/tags/domain%20driven%20design.html) - Recursos sobre DDD
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - Documentação oficial

## 👤 Autor

**João**

- GitHub: [@Joaoof](https://github.com/Joaoof)

## 📄 Licença

Este projeto está sob a licença ISC.

---

<div align="center">

**Desenvolvido como parte do desafio Full Cycle** 🚀

⭐ Se este projeto foi útil, considere dar uma estrela no repositório!

</div>
