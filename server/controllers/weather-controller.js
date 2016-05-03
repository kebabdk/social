
var easySoap = require('easysoap');
var wsdlrdr = require('wsdlrdr');

module.exports.getCityList = function (req, res) {
    console.log(req.body);

    var connectionData = {
        host: 'www.webservicex.net',
        path: '/globalweather.asmx',
        wsdl: '/globalweather.asmx?WSDL'
    };
    var soapOptions = {};

    var soapClient = easySoap.createClient(connectionData, soapOptions);
    var weatherData = {};
    soapClient.call({
            method: 'GetCitiesByCountry',
            attributes: {
                xmlns: "http://www.webserviceX.NET"
            },
            params: {'CountryName': 'denmark'}
        })
        .then(function (callResponse) {
            console.log(callResponse.data);
            weatherData = wsdlrdr.getXmlDataAsJson(
                callResponse.data.GetCitiesByCountryResponse.GetCitiesByCountryResult
            );
            console.log(JSON.stringify(weatherData, undefined, ' '));  //response header
            res.json({"result":"test", "wdata": weatherData});

        })
        .catch(function (err) {
            throw new Error(err);
        });
};

