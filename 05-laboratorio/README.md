<h1>
    <a href="https://www.dio.me/">
     <img align="center" width="40px" src="https://hermes.digitalinnovation.one/assets/diome/logo-minimized.png"></a>
    <span> Formação Docker Fundamentals</span>
    <img align="center" width="100px" src="https://hermes.dio.me/tracks/48e9f018-f7c9-4f0f-b524-cd9223579626.png">    
</h1>

Material relacionado ao desafio de código da **Formação Docker Fundamentals** pela [Digital Innovation One](https://www.dio.me/). 
<br>
<img width="70px" background-color="black" src="https://hermes.digitalinnovation.one/assets/diome/logo.svg">

[![Link do Curso](https://img.shields.io/badge/▶-000?style=for-the-badge&logo=movie&logoColor=E94D5F)](https://web.dio.me/track/formacao-docker-fundamentals) 
[![Link do Curso](https://img.shields.io/badge/Acesse%20o%20Curso%20na%20Plataforma-E94D5F?style=for-the-badge)](https://web.dio.me/track/formacao-docker-fundamentals) 

# Desafio 🎯

<br>

## Docker Compose: Executando uma aplicação HTML em um container apache (HTTPD)

- Criar um arquivo YML com as definições de um servidor apache (httpd);
- Especificar no arquivo YML o local onde os arquivos da aplicação estarão. - A aplicação pode ser um simples Hello World. Será que você consegue executar uma aplicação web completa?
- Subir o arquivo YML e a aplicação para um repositório no GitHub

### Requisitos

- Instalar docker
- Instalar docker-compose 
- Criar arquivo docker-compose.yml
- Subir a aplicação

<br>

### Roteiro de Instalação do Docker na máquina Ubuntu


- Adicionando chave GPG oficial do Docker:

```
sudo apt-get update
sudo apt-get install ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
```

- Adicionando repositório no APT source:

```
echo \
  "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt-get update
```

- Instalando o Docker:

```
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

- Testando instalação:

```
sudo docker run hello-world
```
<br>

### Roteiro de Instalação do Docker Compose na máquina Ubuntu

```
sudo apt-get install docker-compose
```
<br>

### Arquivo docker-compose.yml e execução da aplicação via docker-compose

- No diretório atual está o arquivo docker-compose.yml
- No diretório website esão todos os arquivos para aplicação 
- Executando aplicação:
```
docker -compose up -d
```
<br>

## Ferramentas 🖥️

[![Docker](https://img.shields.io/badge/Docker-000?style=for-the-badge&logo=docker&logoColor=30A3DC)](https://docs.docker.com/)


## Redes Socias

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/marcelodsoares/) 
[![PerfilDIO](https://img.shields.io/badge/DIO-0077B5?style=for-the-badge&logo=dio&logoColor=white)](https://web.dio.me/users/marcelo_soares92)

[![GitLab](https://img.shields.io/badge/GitLab-000?style=for-the-badge&logo=gitlab&logoColor=E94D5F)](https://gitlab.com/Mdsoare/)
[![GitHub](https://img.shields.io/badge/GitHub-000?style=for-the-badge&logo=github&logoColor=30A3DC)](https://github.com/Mdsoare/)


<table>
  <tr>
    <td>
      <img width="80px" align="center" src="https://avatars.githubusercontent.com/Mdsoare"/>
    </td>
    <td align="left">
      <a href="https://github.com/Mdsoare">
        <span><b>Marcelo Soares</b></span>
      </a>
      <br>
      <span>Analista de Sistemas</span>
    </td>
  </tr>
</table>

## Referências 🔎
- [Docker Docs](https://docs.docker.com/)
- [FreeCodeCamp](https://www.freecodecamp.org/portuguese/news/um-guia-para-iniciantes-em-docker-como-criar-sua-primeira-aplicacao-com-o-docker/)
- [4Linux](https://blog.4linux.com.br/docker-compose-explicado/)
- [Blog AWS](https://aws.amazon.com/pt/blogs/aws-brasil/como-conteinerizar-uma-aplicacao-em-15-minutos/)
- [RedHat Topics](https://www.redhat.com/pt-br/topics/automation/what-is-yaml)

##
<div align="center">Disponibilizado por <a href="https://github.com/Mdsoare">🕶 Marcelo Soares ®</a>.</div>
