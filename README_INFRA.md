# 📂 Pasta de Infraestrutura e Implantação (`deploy-vps/`)

Esta branch contém o isolamento dos arquivos legados de infraestrutura para servidores **cPanel / Apache / Hostgator**.

## 📌 O que você encontrará em `deploy-vps/`:
1. **Guia de Migração (`README.md`):** Instruções passo a passo para deploy, apontamento de domínio e configuração do portal restrito em hospedagens tradicionais.
2. **Configurações de Servidor (`.htaccess`):** Regras de reescrita de rotas para o React rodando em servidor Apache. Este arquivo deve estar em frontend/public
3. **Autenticação (`.htpasswd`):** Arquivos de controle de acesso para a área administrativa (`/portal`). Este arquivo também deve estar em frontend/public

> *Nota: O projeto oficial em produção utiliza o **GitHub Pages**. Os arquivos acima encontram-se preservados nesta pasta dedicada estritamente para fins de histórico e futuras migrações.*