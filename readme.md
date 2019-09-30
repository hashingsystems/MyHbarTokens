# What is it?

MyHbarTokens is an open source client-side HBAR wallet which helps to interact with smart contracts Hedera Hashgraph.
Connection to the Hashgraph is made via composer (chrome extension) which holds the account's private key in an encrypted format inside the browser to make sure its safe and secure and only a user has access to it.

# What can you use it for?

User can check/get hbar balance of a paired account in composer (chrome extension)
User can add single/multiple ERC20 token by just entering his smart contract account ID.
After a successful addition of a token user can check token balance and transfer a token to another account by entering receiver's account ID and number of tokens he/she want to transfer.

# How it works
​
At the time of smart contract function call (balance/transfer), request is passed to composer and then user needs to confirm the request by confirming the popup triggered.
Communication between MyHbarTokens and Composer is made using hash.js which is an interface for Composer (available at github.com/hashingsystems/hash.js)
Transaction is signed by composer using users account details.
Signed transaction is sent via socket to mps.js which is a payment server.
Signed transaction is getting processed on hedera hashgraph by mps (micro payment server)
Returned response of contract call is returned back to composer using socket.
Composer then send the result to hash.js using promises and from hash.js to MyHbarTokens gets the result.

# What you need to set up:

- node version 10+
- Google Chrome
- Composer for Hedera Hashgraph (with a paired account)


# Running locally:

`npm install`
`npm start`

You can test contracts 0.0.21261 (HbarToken) and 0.0.20354 (Rejolut Token)

You can also deploy your own version using this file (https://gist.github.com/publu/d12c06349e517ea0f51a529fab457ae2)

# License

 Copyright 2019 Hashing Systems Inc

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

