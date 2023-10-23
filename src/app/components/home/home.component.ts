import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  list: any[] = [
    {name:'Arroz', valor:'20,34 R$', img:'https://content.news.ifood.com.br/uploads/2023/05/ifn-capa-hamb.webp',
  descricao:' ng Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.'},
    {name:'Feijão', valor:'22,34 R$', img:'https://www.portaldoagronegocio.com.br/img/cache/cover//storage/images/notices/64ca425c2f2a7.jpg',
  descricao:' ng Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.'},
  ]

}
