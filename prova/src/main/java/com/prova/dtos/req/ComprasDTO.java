package com.prova.dtos.req;

import java.util.List;

public class ComprasDTO {
    private String produto;
    private int preco;
    private List<ComprasDTO> comprasList;

    public String getProduto() {
        return produto;
    }
    public void setProduto(String produto) {
        this.produto = produto;
    }
    public int getPreco() {
        return preco;
    }
    public void setPreco(int preco) {
        this.preco = preco;
    }
    public List<ComprasDTO> getComprasList() {
        return comprasList;
    }
    public void setComprasList(List<ComprasDTO> comprasList) {
        this.comprasList = comprasList;
    }
}
