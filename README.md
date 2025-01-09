# dd-dynamic-rumsample

- The idea here is to create a function that is able to serve the RUM sample config value so that it can be changed dynamically via a feature flag concept.
- The function can be hosted in an infrastructure like k8s or even lambdas so the front end app will be able to interact with it.