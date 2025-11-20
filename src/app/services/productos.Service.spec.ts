import { TestBed } from '@angular/core/testing';

import { ProductosService} from './productosService';

describe('Productos', () => {
  let service: ProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
