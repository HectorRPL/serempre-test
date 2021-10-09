import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TARGET } from '../../const/enviromets';
import { ProductModel } from '../../models/product/product-model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  getLinks(): Observable<ProductModel> {
    const url = `${TARGET}items`;

    return this.httpClient.get<any>(url)
      .pipe(
        tap(value => {
          console.log({value});

          return value;
        }),
        catchError(err => throwError(err)),
      );
  }

}
