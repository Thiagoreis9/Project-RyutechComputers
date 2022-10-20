import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../produto.service';
import { IProduto } from './produtos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: IProduto[] | undefined;

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const produtos = this.produtoService.getAll();
    this.route.queryParamMap.subscribe(params => {
      const descricao = params.get("descricao")?.toLowerCase();

      if(descricao){
        this.produtos = produtos.filter(produto => produto.descricao.toLowerCase().includes(descricao));
        return;
      }

      this.produtos = produtos
    });
  }

}
