var helpers = require('./helpers');
var AWS = helpers.AWS;
var MockService = helpers.MockService;

describe('region_config.js', function() {
  it('sets endpoint configuration option for default regions', function() {
    var service = new MockService;
    expect(service.isGlobalEndpoint).to.equal(false);
    expect(service.endpoint.host).to.equal('mockservice.mock-region.amazonaws.com');
  });

  [AWS.CloudFront, AWS.IAM, AWS.ImportExport, AWS.Route53].forEach(function(svcClass) {
    it('uses a global endpoint for ' + svcClass.serviceIdentifier, function() {
      var service = new svcClass;
      expect(service.endpoint.host).to.equal(service.serviceIdentifier + '.amazonaws.com');
      expect(service.isGlobalEndpoint).to.equal(true);
    });
  });

  it('always enables SSL for Route53', function() {
    var service = new AWS.Route53;
    expect(service.config.sslEnabled).to.equal(true);
  });

  it('uses "global" endpoint for SimpleDB in us-east-1', function() {
    var service = new AWS.SimpleDB({
      region: 'us-east-1'
    });
    expect(service.isGlobalEndpoint).to.equal(false);
    expect(service.endpoint.host).to.equal('sdb.amazonaws.com');
  });

  it('uses "global" endpoint for SimpleDB in us-east-1', function() {
    var service = new AWS.S3({
      region: 'us-east-1'
    });
    expect(service.isGlobalEndpoint).to.equal(false);
    expect(service.endpoint.host).to.equal('s3.amazonaws.com');
  });

  it('does not use any global endpoints in cn-*', function() {
    var service = new AWS.IAM({
      region: 'cn-north-1'
    });
    expect(service.isGlobalEndpoint).to.equal(false);
    expect(service.endpoint.host).to.equal('iam.cn-north-1.amazonaws.com.cn');
  });

  it('enables signature version 4 signing in cn-*', function() {
    var service = new AWS.IAM({
      region: 'cn-north-1'
    });
    expect(service.config.signatureVersion).to.equal('v4');
  });

  it('does not use - as separator for S3 in public regions and GovCloud', function() {
    var service = new AWS.S3({
      region: 'us-west-2'
    });
    expect(service.isGlobalEndpoint).to.equal(false);
    expect(service.endpoint.host).to.equal('s3.us-west-2.amazonaws.com');
    service = new AWS.S3({
      region: 'us-gov-west-1'
    });
    expect(service.isGlobalEndpoint).to.equal(false);
    expect(service.endpoint.host).to.equal('s3.us-gov-west-1.amazonaws.com');
  });

  it('uses . as separator for S3 in cn-*', function() {
    var service = new AWS.S3({
      region: 'cn-north-1'
    });
    expect(service.isGlobalEndpoint).to.equal(false);
    expect(service.endpoint.host).to.equal('s3.cn-north-1.amazonaws.com.cn');
  });

  it('uses SigV4 and . for default regions', function() {
    var service = new AWS.S3({
      region: 'xx-west-1'
    });
    expect(service.isGlobalEndpoint).to.equal(false);
    expect(service.config.signatureVersion).to.equal('v4');
    expect(service.endpoint.host).to.equal('s3.xx-west-1.amazonaws.com');
  });

  it('uses us-gov endpoint for IAM in GovCloud', function() {
    var service = new AWS.IAM({
      region: 'us-gov-west-1'
    });
    expect(service.isGlobalEndpoint).to.equal(false);
    expect(service.endpoint.host).to.equal('iam.us-gov.amazonaws.com');
  });

  it('uses us-gov-west-1 endpoint for STS in GovCloud', function() {
    var service = new AWS.STS({
      region: 'us-gov-west-1'
    });
    expect(service.isGlobalEndpoint).to.equal(false);
    expect(service.endpoint.host).to.equal('sts.us-gov-west-1.amazonaws.com');
  });

  describe('dualstack endpoint', function() {
    it('uses dualstack endpoint if useDualstack flag configured and available for service', function() {
      helpers.spyOn(AWS.util, 'isDualstackAvailable').andReturn(true);
      var service = new MockService({
        region: 'us-west-2',
        useDualstack: true
      });
      expect(service.config.endpoint).to.equal('mockservice.dualstack.us-west-2.amazonaws.com');
    });

    it('does not use dualstack endpoint if useDualstack flag not set to true', function() {
      helpers.spyOn(AWS.util, 'isDualstackAvailable').andReturn(true);
      var service = new MockService({
        region: 'us-west-2'
      });
      expect(service.config.endpoint).to.equal('mockservice.us-west-2.amazonaws.com');
    });

    it('does not use dualstack endpoint if not available for service', function() {
      helpers.spyOn(AWS.util, 'isDualstackAvailable').andReturn(false);
      var service = new MockService({
        region: 'us-west-2',
        useDualstack: true
      });
      expect(service.config.endpoint).to.equal('mockservice.us-west-2.amazonaws.com');
    });
  });
});

describe('region_config_data.json', function() {
  it('does not reference undefined patterns', function() {
    var config, k, ref, results, v;
    config = require('../lib/region_config_data.json');
    ref = config.rules;
    results = [];
    for (k in ref) {
      v = ref[k];
      if (typeof v === 'string') {
        results.push(expect(config.patterns).to.haveOwnProperty(v));
      } else {
        results.push(void 0);
      }
    }
    return results;
  });
});
