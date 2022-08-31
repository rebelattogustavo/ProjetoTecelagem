import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  abrirSacola() {
    this.router.navigate(['/home/sacola'])
  }
<<<<<<< HEAD

=======
>>>>>>> dbbfeca44c2be1968372e8695d0607211e73d028
}
