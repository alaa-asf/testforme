import { AuthService } from './../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase,AngularFireObject} from '@angular/fire/compat/database';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(public authService: AuthService,private db: AngularFireDatabase) { }
  test!: AngularFireObject<any>;
  ngOnInit(): void {
  }

  turnon(value: any){
    this.db.object('test/on').update(value);
  }
  turnoff(value: any){
    this.db.object('test/off').update(value);
  }

}
