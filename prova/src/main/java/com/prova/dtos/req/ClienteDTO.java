package com.prova.dtos.req;

public class ClienteDTO {
    private long id;
    private String nome;
    private EnderecoDto endereco;
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public EnderecoDto getEndereco() {
        return endereco;
    }
    public void setEndereco(EnderecoDto endereco) {
        this.endereco = endereco;
    }
}
