import { FancyFormsModule } from './views.module';

describe('FancyFormsModule', () => {
  let fancyFormsModule: FancyFormsModule;

  beforeEach(() => {
    fancyFormsModule = new FancyFormsModule();
  });

  it('should create an instance', () => {
    expect(fancyFormsModule).toBeTruthy();
  });
});
