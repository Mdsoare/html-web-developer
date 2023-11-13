#!/bin/sh
echo "Iniciando a instalação do Docker ............"
# Baixando script
curl -fsSL https://get.docker.com -o get-docker.sh
# Executando script
sudo sh ./get-docker.sh --dry-run
sleep 3
echo "Instalação do Docker finalizada!"