var respuesta_ws = {"code":"200","message":"Consulta Realizada","Products":[{"ProductId":"13","Name":"Voz","Assets":[{"SubscriptionNumber":"19389","MeasuringElement":"576048561985","SourceId":"14","SourceName":"Open - Edatel","GeographicAreaId":"","AlternateId":"19313","MediaTypeId":"1002","MediaType":"Copper","UsageId":"1701","Usage":"Residential","ProductOffering":{"Id":"229","Name":"Ilimitada Local","StatusId":"101","Status":"Active","Legacy":{"Id":"1||4162||","Name":"TRIO TO ILIMITADO 1.0","Status":"Active"},"Specifications":[]},"BillingSupplementaryOffer":{"Id":"","Name":"","Until":"","Legacy":{"Id":"","Name":""}},"Price":"","Discount":"","Currency":"COP","BundleProductOfferingId":"","SerialNumber":"","BillPlanTypeId":"502","BillPlanType":"Postpaid","BusinessAreaId":"601","BusinessArea":"Home","MarketSegmentId":"701","MarketSegment":"B2C","StatusId":"301","Status":"Active","FromDate":"1997-02-14","Specifications":[{"Id":"48","Name":"Te sigo","Legacy":{"Id":"100326","AlternateId":"41","Name":"Transferencia (Desv\u00edo) de Llamada Inmediata"}},{"Id":"41","Name":"Te agilizo","Legacy":{"Id":"100337","AlternateId":"35","Name":"Conexion sin Marcar con Temporizador"}},{"Id":"43","Name":"Te espero","Legacy":{"Id":"100332","AlternateId":"39","Name":"Llamada en Espera"}},{"Id":"46","Name":"Te recuerdo","Legacy":{"Id":"100330","AlternateId":"1004","Name":"ACM - Memorizacion Ultima Llamada"}},{"Id":"41","Name":"Te agilizo","Legacy":{"Id":"100360","AlternateId":"40","Name":"Marcaci\u00f3n Abreviada"}},{"Id":"44","Name":"Te identifico","Legacy":{"Id":"100340","AlternateId":"31","Name":"Identificador N\u00famero Llamante"}},{"Id":"42","Name":"Te despierto","Legacy":{"Id":"100324","AlternateId":"38","Name":"Despertador Autom\u00e1tico"}},{"Id":"5","Name":"DDC","Legacy":{"Id":"100349","AlternateId":"50","Name":"Acceso Nacional + Celular"}},{"Id":"45","Name":"Te protejo","Legacy":{"Id":"100328","AlternateId":"34","Name":"C\u00f3digo Secreto"}},{"Id":"47","Name":"Te reuno","Legacy":{"Id":"100354","AlternateId":"37","Name":"Conferencia Tripartita"}}],"AssetCharacteristics":[],"Accounts":["13288","1002358287","CC|21852802"],"Equipment":[]}]},{"ProductId":"7","Name":"Internet","Assets":[{"SubscriptionNumber":"1335309","MeasuringElement":"","SourceId":"14","SourceName":"Open - Edatel","GeographicAreaId":"","AlternateId":"1335309","MediaTypeId":"1002","MediaType":"Copper","UsageId":"1701","Usage":"Residential","ProductOffering":{"Id":"38","Name":"10 MB","StatusId":"101","Status":"Active","Legacy":{"Id":"24||7397||10000","Name":"TRIPLAY INTERNET","Status":"Active"},"Specifications":[{"Id":"60101","Name":"Internet Connection","Characteristics":[{"CharacteristicId":"6010102","Name":"Upstream","ValueId":"601010202","Value":"1 MB","EntryValue":false},{"CharacteristicId":"6010101","Name":"Downstream","ValueId":"601010111","Value":"10 MB","EntryValue":false}]}]},"BillingSupplementaryOffer":{"Id":"","Name":"","Until":"","Legacy":{"Id":"","Name":""}},"Price":"","Discount":"","Currency":"COP","BundleProductOfferingId":"","SerialNumber":"","BillPlanTypeId":"502","BillPlanType":"Postpaid","BusinessAreaId":"601","BusinessArea":"Home","MarketSegmentId":"701","MarketSegment":"B2C","StatusId":"301","Status":"Active","FromDate":"2011-10-20","Specifications":[],"AssetCharacteristics":[],"Accounts":["13288","1002358287","CC|21852802"],"Equipment":["45134145"]}]},{"ProductId":"14","Name":"Televisi\u00f3n","Assets":[{"SubscriptionNumber":"2704409","MeasuringElement":"","SourceId":"14","SourceName":"Open - Edatel","GeographicAreaId":"","AlternateId":"1096829","MediaTypeId":"1002","MediaType":"Copper","UsageId":"1701","Usage":"Residential","ProductOffering":{"Id":"368","Name":"Cl\u00e1sica HD","StatusId":"101","Status":"Active","Legacy":{"Id":"8900||6025||0","Name":"TRIO TV CLASICA HD","Status":"Active"},"Specifications":[]},"BillingSupplementaryOffer":{"Id":"","Name":"","Until":"","Legacy":{"Id":"","Name":""}},"Price":"","Discount":"","Currency":"COP","BundleProductOfferingId":"","SerialNumber":"","BillPlanTypeId":"502","BillPlanType":"Postpaid","BusinessAreaId":"601","BusinessArea":"Home","MarketSegmentId":"701","MarketSegment":"B2C","StatusId":"301","Status":"Active","FromDate":"2019-07-11","Specifications":[],"AssetCharacteristics":[],"Accounts":["13288","1002358287","CC|21852802"],"Equipment":["46050323","45134145"]}]}],"total_rows":0,"time":"525 ms"};


var asset_internet  = [];
var asset_television  = [];
var asset_voz  = [];

for (var i = 0; i < respuesta_ws.Products.length; i++ ){
  
  //Busca productos de Internet (7), con origen Edatel (14) y que se encuentren activos
  if(respuesta_ws.Products[i].ProductId == 7){ 
    for (var j = 0; j < respuesta_ws.Products[i].Assets.length; j++ ){
      
      if(respuesta_ws.Products[i].Assets[j].SourceId == 14 && respuesta_ws.Products[i].Assets[j].Status == 'Active' ){

        asset_internet.push(respuesta_ws.Products[i].Assets[j].SubscriptionNumber);

      }

    }
  }

  //Busca productos de Telefonía (13), con origen Edatel (14), que se encuentren activos y con tecnología diferente de Cooper (cobre)
  if(respuesta_ws.Products[i].ProductId == 13){
    for (var j = 0; j < respuesta_ws.Products[i].Assets.length; j++ ){
      
      if(respuesta_ws.Products[i].Assets[j].SourceId == 14 && respuesta_ws.Products[i].Assets[j].Status == 'Active' && respuesta_ws.Products[i].Assets[j].MediaType != 'Copper'  ){

        asset_voz.push(respuesta_ws.Products[i].Assets[j].SubscriptionNumber);
        
      }

    }
  }

  //Busca productos de Televisión (14), con origen Edatel (14) y que se encuentren activos
  if(respuesta_ws.Products[i].ProductId == 14){
    for (var j = 0; j < respuesta_ws.Products[i].Assets.length; j++ ){
      
      if(respuesta_ws.Products[i].Assets[j].SourceId == 14 && respuesta_ws.Products[i].Assets[j].Status == 'Active' ){

        asset_television.push(respuesta_ws.Products[i].Assets[j].SubscriptionNumber);
        
      }

    }
  }

    
}

console.log(asset_internet);
console.log(asset_television);
console.log(asset_voz);



