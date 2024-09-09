  export interface Prodotti {
    id: number
    nome: string
    categoria: string
    prezzo: number
    taglie_disponibili: string[]
    colori_disponibili: string[]
    descrizione: string
    immagine: string
    nuovo_arrivi: boolean
    best_seller: number
  }

  export interface FilterPrice {
    expensive:boolean
    medium:boolean
    cheap:boolean
  }

  export interface ProdottoForCheckout {
    id: number
    nome: string
    categoria: string
    prezzo: number
    immagine: string
    taglia:string
    quantita:number
  }
  