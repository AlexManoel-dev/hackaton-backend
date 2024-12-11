#!/bin/sh

# Inicia o Ollama App no background
ollama serve &

# Espera o Ollama App iniciar
sleep 5

# Baixa o modelo Llama3
ollama pull llama3

# Executa o modelo
ollama run llama3
