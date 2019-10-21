# Big Dipper :sparkles:

Forbole Block Explorer for Cosmos

## Projects running on mainnets

[Explore Cosmos Hub (cosmoshub-2) with The Big Dipper](https://cosmos.bigdipper.live)

[Explore IRISnet (irishub) with The Big Dipper](https://iris.bigdipper.live)

[Explore Terra (columbus-2) with The Big Dipper](https://terra.bigdipper.live)

## Projects with testnets

[Sentinel testnet](https://explorer.sentinel.co/)

[Cyber Congress](https://cyberd.ai/)

[Kava](https://testnet-1.kava.bigdipper.live/)

[BitSong](https://testnet-1.bitsong.bigdipper.live/)

[Regen Network](http://bigdipper.regen.network/)

## Edit `default_settings.json`

- Update `chainId` and `chainName`.
- Update the RPC and LCD URLs.
- Update Bech32 address prefixes.
- Update genesis file location(it's a url).
- Update `stakingDenom` and `mintingDenom`.

### Run in local

1. install dependencies
```sh
meteor npm install
meteor update
```

2. start zchaind & lcd
```
zchaind start
zchaincli rest-server --trust-node
```

3. make sure genesis url is available

4. run
```
meteor --settings default_settings.json
```

### Run in production

1. build
```sh
./build.sh
```
It will create a packaged Node JS tarball at `../output`. 

2. uncompress

3. install dependencies
```
cd bundle/programs/server
npm install
```

4. install mongodb

5. edit `pm2.json`

- Copy pm2.json here.  
- Update `cwd`
- Update `PORT`
- Update `ROOT_URL`
- Update `MONGO_URL`
- Update `METEOR_SETTINGS`(`default_settings.json`)

6. start zchaind & lcd
```
zchaind start
zchaincli rest-server --trust-node
```

7. make sure genesis url is available

8. run
```
pm2 start pm2.json
```