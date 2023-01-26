window.loadedUrls = true;
const hoursBeforeMandatoryRefresh = 6;

function getBuildUrl() {
	return 'https://justbuild.nyc3.cdn.digitaloceanspaces.com/NewCI/1v1/Prod/23/c819bb608bca4a65bc80f2df1a7091c2' ;
}

function getGameLoaderUrl() {
	//validateVersion()
	return getBuildUrl() + "/WebGL.loader.js";
}

function validateVersion() {
	let lastFetchTime = Number(window.localStorage.getItem("last_fetch_time"));
	
	if(isNaN(lastFetchTime) || (getTimestampInHours(lastFetchTime) + hoursBeforeMandatoryRefresh) < getTimestampInHours(Date.now())) {
		localStorage.removeItem("buildUrl");
		localStorage.removeItem("last_fetch_time");
		window.location.assign(window.location.origin);	
	}
}

function getTimestampInHours (timeStamp) {
	return Math.floor(timeStamp / 1000 / 60 / 60)
}

