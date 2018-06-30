import { OtherViewsModule } from './other-views.module';

describe('OtherViewsModule', () => {
  let otherViewsModule: OtherViewsModule;

  beforeEach(() => {
    otherViewsModule = new OtherViewsModule();
  });

  it('should create an instance', () => {
    expect(otherViewsModule).toBeTruthy();
  });
});
