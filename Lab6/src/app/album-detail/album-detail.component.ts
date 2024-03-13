import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterModule} from "@angular/router";
import {Album} from "../models";
import {AlbumsService} from "../albums.service";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit{
  album!: Album;
  loaded!: boolean;
  newTitle!: string;
  albumId!: number;
  constructor(private route: ActivatedRoute, private albumsService: AlbumsService) {
  }
  ngOnInit() {
    this.getAlbum();
  }

  getAlbum(){
    this.route.paramMap.subscribe((params)=>{
      this.albumId = Number(params.get('albumId'));
      this.loaded = false;
      this.albumsService.getAlbum(this.albumId).subscribe((album:Album)=>{
        this.album = album;
        this.loaded = true;
      })
    });
  }

  updateAlbum(){
    this.route.paramMap.subscribe((params)=> {
      this.albumsService.updateAlbum(Number(params.get('albumId')), this.album).subscribe((newAlbum) => {
        this.album.title = this.newTitle;
      });
    });
  }
}
