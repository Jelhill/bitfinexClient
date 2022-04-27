# bitfinexClient
The BitfinexClient is a Service that recieves request via RESTFUL Api. 

When a client calls an api endpoint, the request is sent to the bitfinex server through Grenache HTTP Client.

The server processes the request and and emit back a response which will then be sent back to the client.

There are two endpoint:
    Base url: http://localhost:5000
    Get Offers: GET  /offers 
    Make Offers: POST /makeOffer 


# How to setup project

git clone https://github.com/Jelhill/bitfinexClient.git
```
npm i -g grenache-grape
```

```
# boot two grape servers

grape --dp 20001 --aph 30001 --bn '127.0.0.1:20002'
grape --dp 20002 --aph 40001 --bn '127.0.0.1:20001'



