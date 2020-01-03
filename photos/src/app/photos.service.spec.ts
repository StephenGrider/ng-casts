import { TestBed } from '@angular/core/testing';

import { PhotosService } from './photos.service';

describe('PhotosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhotosService = TestBed.get(PhotosService);
    expect(service).toBeTruthy();
  });
});
