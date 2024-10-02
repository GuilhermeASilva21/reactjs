package com.prova.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.prova.dtos.req.ClienteDTO;
import com.prova.entities.ClienteEntity;
import com.prova.entities.ComprasEntity;
import com.prova.repositories.ClienteRepository;
import com.prova.repositories.ComprasRepository;
import com.prova.repositories.EnderecoRepository;

@Service
public class ClienteService {
    
    @Autowired
    ClienteRepository clienteRepository;

    @Autowired
    ComprasRepository comprasRepository;

    @Autowired
    EnderecoRepository enderecoRepository;

    public void criarCliente(ClienteDTO dto){
        ClienteEntity clienteEntity = new ClienteEntity();
        clienteEntity.setId(dto.getId());
        clienteEntity.setNome(dto.getNome());

        final ClienteEntity clienteEntityPersistance = clienteRepository.save(clienteEntity);

        List<ComprasEntity> comprasEntityList = dto.getComprasList()
        .stream()
        .map(compras -> {
            ComprasEntity comprasEntity = new ComprasEntity();
            comprasEntity.setProduto(compras.getProdutor());
            comprasEntity.setPreco(compras.getPreco());
            EnderecoEntity enderecoEntity = new EnderecoEntityEntity();
            gravadoraEntity.setNome(album.getGravadora().getNome());
            gravadoraEntity.setPais(album.getGravadora().getPais());
            gravadoraEntity = gravadoraRepository.save(gravadoraEntity);
            albumEntity.setGravadora(gravadoraEntity);
            albumEntity.setArtista(artistaEntityPersistance);

            return comprasEntity;
        }).toList();

            comprasEntityList = comprasRepository.saveAll(comprasEntityList);
        
    }

//     public List<ShowArtistaDTO> listarArtistas(){
//         List<ArtistaEntity> artistaEntity = artistaRepository.findAll();

//         return artistaEntity
//         .stream().map(artista -> {
//             ShowArtistaDTO showArtistaDTO = new ShowArtistaDTO();
            
//             List<ShowAlbumDTO> albumListDTO = new ArrayList<>();

//             for (AlbumEntity albumEntity : artista.getAlbumList()) {
//                 ShowAlbumDTO showAlbumDTO = new ShowAlbumDTO();
//                 showAlbumDTO.setNome(albumEntity.getNome());
//                 showAlbumDTO.setAno(albumEntity.getAno());
                
//                 ShowGravadoraDTO showGravadoraDTO = new ShowGravadoraDTO();
//                 showGravadoraDTO.setNome(albumEntity.getGravadora().getNome());
//                 showGravadoraDTO.setPais(albumEntity.getGravadora().getPais());

//                 showAlbumDTO.setGravadora(showGravadoraDTO);
//                 albumListDTO.add(showAlbumDTO);
                
//             }

//                 showArtistaDTO.setId(artista.getId());
//                 showArtistaDTO.setNome(artista.getNome());
//                 showArtistaDTO.setShowAlbumList(albumListDTO);

//                 return showArtistaDTO;
//         }).toList();
//     }

// }