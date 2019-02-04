
export interface VoDetalhes {
    codigo: string ;
    nome: string;
    cpf: string;
    email: string;
    endereco: {
        tipo: string;
        logradouro: string,
        numero: string;
        complemento: string;
        bairro: string;
        cidade: string;
        Estado: string;
        Pais: string;
    };
    telefone: {
        pais: string;
        area: string;
        numero: string;
    };
    obs: string;
    thumb: string;
}
