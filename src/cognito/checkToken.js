const jwt_decode = require('jwt-decode');
//const jwt = require('jsonwebtoken');

const token = 'eyJraWQiOiJMTFFHSDJNaEJCU1wvamR4Qnd4WXpFcVwvWlA1OTFrZEtlTUo1Z2lkTW5veUE9IiwiYWxnIjoiUlMyNTYifQ.eyJvcmlnaW5fanRpIjoiNGY3NDI5YzMtZDQ2ZS00NzI2LWJhNWUtNDc2MmFhMDQ2ZDZmIiwic3ViIjoiMTgzMTY1NDItMmIxNy00NzEyLThmNjktMDZhZGYzZjIwOWY3IiwiZXZlbnRfaWQiOiJiYTI5N2FkYS00ZmZhLTRhNzEtYWVlZS1jOTg2ZjgzMzJlYWQiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIiwiYXV0aF90aW1lIjoxNjQwMDk1NzE3LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0yLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMl9IWVBlQmZJcFoiLCJleHAiOjE2NDAwOTkzMTYsImlhdCI6MTY0MDA5NTcxNywianRpIjoiZTc0ZGVhN2EtZGYzNC00OTExLTk1OTgtNmNiYzU1NTgwZWQ1IiwiY2xpZW50X2lkIjoiNmtvbThjYm5tb3N1M2FiNWlvcmNkb2dscmwiLCJ1c2VybmFtZSI6IjE4MzE2NTQyLTJiMTctNDcxMi04ZjY5LTA2YWRmM2YyMDlmNyJ9.kj5R7zsBCfTFsS6ua32rSXyV_ps92o-TUJWggPKsTb1zdE-4HB4hfr4Y7llgwGzyBrgh6Q_VlPx_cqiCJmAfVVMy2d74GiVEC-N3pGFVBt7ZROSe4P78S2YB1n_afWxkTexloGwCzrreI3gssLC0p74cm2JI8lty__uY8yo0BpJ-uoFDoGcLiag1eqaGbe8MEdGvjBbx7qaeGI2t7fqdMkzwfOrNnxXT6pvL_G2nCCil7pTSL0GB8iCtW8c8JOONgrFRAJljaJvNYlFi-qA4YxAUZrf7VSMfIyz-SDTbGFtYtjv32O2HD841DI2Qg5vS5M17SdAR7t4vhfd3PEQ3Ug'
/*
const checkToken = (token) => {
    //const decoded = jwt_decode(token,{ })
    //RSASHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload),)
    let decoded = jwt.decode(token, {complete: true});
    console.log(decoded)
}*/


let jwt = require('jsonwebtoken');
let jwkToPem = require('jwk-to-pem');
const jwk = JSON.parse(`{"keys":[{"alg":"RS256","e":"AQAB","kid":"ZkGWTVoZcr5SzTHMR0+N+hdsCgFGFxKxZxIFRS38xJU=","kty":"RSA","n":"w0RuSUQvPKEtCOi_SXnf-4aHBh61qb42QojwkVej3kqB6f6EfxqhAbPrf6p0rWMDpC6Ipn-7_L7zJCIYXrtYsp2_ZtLo4NNd7k4uhFDROwSE0GlS1i9DLXSttLcQirukbYdyAMi4PcduADgZFU-b1KVWAUjhyBwaP4vP9HhPzNftgVdx9UhcrwJvcrmXfK2XNt_9uXQAc0GbQsVjb3qmSYNuStvHMhiqcstglX4k2PaFuA1jdtivKyFxignOVHnFGZJh_2xbXbh0Wua_0EWfPSHBqJBf1M6o77EeXH4Mf3uvrCgpI7AnIWih0VLioWOFFSKp9BZ62Ejjaru7FgH0ww","use":"sig"},{"alg":"RS256","e":"AQAB","kid":"LLQGH2MhBBS/jdxBwxYzEq/ZP591kdKeMJ5gidMnoyA=","kty":"RSA","n":"xaxDhMhwqXc6U-QmwyuTR89ls6LQKKaaU8zooQ-8rTJz5dcFpxevVm4xojLzNn_HolHq4GNeLrEpZA3B2R8-unj3eXGJgRFY5bT3vKD0WOL9Dat-mcU_yLXACJP8pO1vHneJr5kV-eKF_FrZuEA2bLX_NHJnml79CkWW-FNLYKJmluV42JXrruMf14RgdZJGT1ykOz_TiwfbawC6JTGum7_4YB4ksS4fQdnYRv1jLu8JToD-wQCAz00I4gUWP1VmIMfw4wNEc9RQBMKfuC-uOJkTvjKtJwenrScKizDShvqOWDPGd0d7O7ipXhycvkRzCVnbayWLQsA-spm6w7ckqQ","use":"sig"}]}`)
console.log(jwk)
let pem = jwkToPem(jwk);
jwt.verify(token, pem, function(err, decoded) {
    console.log(decoded)
});
