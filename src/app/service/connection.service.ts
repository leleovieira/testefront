import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VoClientes } from '../interface/voClientes';
import { VoDetalhes } from '../interface/voDetalhes';
import { VoPontos } from '../interface/voPontos';






@Injectable({
    providedIn: 'root'
})
export class ConnectionService {
    constructor(private http: HttpClient) {}

    fGetListaCliente() {
        return this.http.get<VoClientes[]>('assets/data/clientes.json');
    }

    fGetClienteSelecionado() {
        return this.http.get<VoDetalhes>('assets/data/clienteselecionado.json');
    }

    fGetPontos() {
        return this.http.get<VoPontos>('assets/data/pontos.json');
    }
}
