import { TestBed } from '@angular/core/testing';

import { CodeService } from './code-compile-service.service';

describe('CodeCompileServiceService', () => {
  let service: CodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
