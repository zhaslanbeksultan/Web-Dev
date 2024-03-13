import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Album, Photo} from "./models";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  constructor(private client: HttpClient) { }

  getAlbums(){
    return this.client.get<Album[]>('https://jsonplaceholder.typicode.com/albums')
  }

  getAlbum(id: number){
    return this.client.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }

  createAlbum(newAlbum: Album){
    return this.client.post<Album>(`https://jsonplaceholder.typicode.com/albums`, newAlbum)
  }

  updateAlbum(id: number, newAlbum: Album){
    return this.client.put<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`, newAlbum);
  }

  getPhotos(id:number){
    return this.client.get<Photo[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
  }

  deleteAlbum(id:number){
    return this.client.delete(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }
}
