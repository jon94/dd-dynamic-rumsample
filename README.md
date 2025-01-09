# dd-dynamic-rumsample

- The idea here is to create a function that is able to serve the RUM sample config value so that it can be changed dynamically via a feature flag concept.
- The function can be hosted in an infrastructure like k8s or even lambdas so the front end app will be able to interact with it.

## Checklist
[X] Create nodejs function
[X] Pipeline to build function and push image to dockerhub
[X] Deploy to k8s on GKE
<img width="1957" alt="image" src="https://github.com/user-attachments/assets/d3adbf29-6be7-4735-8735-0e15d71faf4f" />
[X] Test using synthetics private worker on output
![image](https://github.com/user-attachments/assets/89520e84-14fc-4cbd-9f10-9dfa1b619b75)
