class ItemCarrinho {
    constructor( 
        public id: any,
        public imagem: string = '',
        public titulo: string = '',
        public descricao: string = '',
        public valor: any,
        public quantidade: any
    ) {}
    
}

export { ItemCarrinho }