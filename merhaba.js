"""<!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8"/>
                <link rel="stylesheet" type="text/html" href="styles.css"/>
            </head>

            <body>
                <button id="connect-button"> Connect Metamask</button>
                <script >
                    document.getElementById('connect-button').addEventListener('click',event=> {
                        let account;
                        ethereum.request({method: 'eth_requestAccounts'}).then(accounts => {
                            account = accounts[0];
                            console.log(account);

                            ethereum.request({method: 'eth_getBalance' ,params: [account, 'latest']}).then(rsult => {
                                console.log(result);
                                let wei = parseInt(result,16);
                                let balance = wei / (10**18);
                                console.log(balance + "ETH");
                            });
                        });
                    });

                </script>
            </body>
        </html>
        """
        )