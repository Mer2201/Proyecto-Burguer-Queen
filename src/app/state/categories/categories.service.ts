import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import { environment } from 'src/environments/environment';
import { Category } from '../../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  getCategories(){
    return CapacitorHttp.get({
      url: environment.urlApi + 'categories',
      params: {},
      headers: {
        'Content-type': 'application/json'
      }
    }).then ( (response: HttpResponse) => {
      if(response.status == 200){
        const data = response.data as Category[];
        return data;
      }
      return [];
    }).catch( err => {
      console.error(err);
      return [];
    })
  }

}
