import {Component, OnInit} from '@angular/core';
import {Album} from "../models";
// import {ALBUMS} from "../fake-db";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {AlbumsService} from "../albums.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{
  albums!: Album[];
  newAlbum: Album;
  loaded: boolean = false;
  constructor(private albumService: AlbumsService) {
    this.newAlbum = {
      userId: 11,
      id: 101,
      title: ''
    };
  }

  ngOnInit() {
    this.getAlbums();
  }

  addAlbum(){
    this.albumService.createAlbum(this.newAlbum).subscribe((album)=>{
      this.albums.unshift(album);
      this.newAlbum = {} as Album;
    });
  }

  getAlbums(){
    this.loaded = false;
    this.albumService.getAlbums().subscribe((albums:Album[])=>{
      this.albums = albums;
      this.loaded = true;
    });
  }

  deleteAlbum(id: number){
    this.albums = this.albums.filter((a:Album)=>a.id !== id);
    this.albumService.deleteAlbum(id).subscribe(()=>{
      console.log('deleted');
    });
  }
}

