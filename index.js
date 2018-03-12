const IPFS = require('ipfs-mini');

const ipfs = new IPFS({ host: 'ipfs.infura.io', protocol: 'https' });
      


let data = require('./data.json');

ipfs.add(JSON.stringify(data), (err, result) => {
	if(err){
		console.error(err);
	}else{
		console.log(JSON.stringify(result, null, 2));
	}
});
