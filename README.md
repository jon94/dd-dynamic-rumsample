# dd-dynamic-rumsample

- A simpler idea is to just host the config file and download it. The config file is hosted here as `feature-flag.json`
- The idea here is to create a function that is able to serve the RUM sample config value so that it can be changed dynamically via a feature flag concept.
- The function can be hosted in an infrastructure like k8s or even lambdas so the front end app will be able to interact with it.
- Known trade off - this will cause RUM to potentially miss some events (due to start up order + init delay time)

## Checklist
- [x] Create nodejs function
- [x] Pipeline to build function and push image to dockerhub
- [x] Deploy to k8s on GKE

<img width="1957" alt="image" src="https://github.com/user-attachments/assets/d3adbf29-6be7-4735-8735-0e15d71faf4f" />

- [x] Test using synthetics private worker on output

![image](https://github.com/user-attachments/assets/89520e84-14fc-4cbd-9f10-9dfa1b619b75)

- [] Expose app to public via ingress
- [] Test on a RUM app with async function
```
async function fetchSampleRate() {
  const response = await fetch('http://feature-flag-service.default.svc.cluster.local/feature-flag?feature=rum-sample-rate-configuration');
  const data = await response.json();
  return data.sampleRate;
}

(async () => {
  const RUM_sample_rate = await fetchSampleRate();

  datadogRum.init({
    applicationId: '<DATADOG_APPLICATION_ID>',
    clientToken: '<DATADOG_CLIENT_TOKEN>',
    site: '<DATADOG_SITE>',
    service: 'my-web-application',
    env: 'production',
    version: '1.0.0',
    sessionSampleRate: RUM_sample_rate,
    sessionReplaySampleRate: 100,
    trackResources: true,
    trackLongTasks: true,
    trackUserInteractions: true,
  });
})();

```
