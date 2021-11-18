import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-ordemcomprasucesso',
  templateUrl: './ordemcomprasucesso.component.html',
  styleUrls: ['./ordemcomprasucesso.component.css']
})
export class OrdemcomprasucessoComponent implements OnInit {

  @Input() public idPedido: any

  constructor() { }

  ngOnInit(): void {
  }

}
