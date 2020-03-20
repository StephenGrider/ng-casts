import { TestBed } from '@angular/core/testing';

import { EmailResolverService } from './email-resolver.service';

describe('EmailResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmailResolverService = TestBed.get(EmailResolverService);
    expect(service).toBeTruthy();
  });
});
