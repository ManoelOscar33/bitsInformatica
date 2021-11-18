import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Produto } from './shared/produtos.model';

import 'rxjs-compat'

import { URL_API } from './app.api';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  //private url_api = 'http://localhost:3000/produtos'

  constructor(private http: HttpClient) { }

  public getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${URL_API}`)

  }

  public getProdutosPorTitulo(titulo: string): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${URL_API}?titulo=${titulo}`)

  }

  public getProdutosPorId(id: any): Promise<Produto[]> {
    return this.http.get<Produto[]>(`${URL_API}?id=${id}`)
      .toPromise()

  }

  public pesquisaProdutos(termo: string): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${URL_API}?titulo_like=${termo}`)
      .retry(10)
  }

  


}
