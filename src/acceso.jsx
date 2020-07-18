import React from 'react';


class Acceso extends React.Component {
    constructor(props) {
      super(props);
      this.state = { username: '', 
                     password: '',
                     show: false
                    };
      this.myChangeHandler = this.myChangeHandler.bind(this);
      this.submitInfo = this.submitInfo.bind(this)
      this.correcto = this.correcto.bind(this);
    }

    submitInfo=() =>{
        if (this.state.username == 'max'){
            if(this.state.password == "max"){
            {this.correcto()}
            }
        }
        console.log(this.state.show)
    }

    myChangeHandler = (event) => {
        const {id,value} = event.target;
      this.setState({
          [id]:value
      });
      
    }

    correcto = () =>{

        this.setState({
            show : true})

        
    }

    render() {
      return (
          

<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="es">
<head>
<meta charset="utf-8" />
<meta name="description" content="Accede a las mejores Cuentas, Seguros, Inversiones y Servicios con BancoEstado, el mayor banco en Chile con presencia nacional. En BancoEstado nos preocupamos por ti y te ofrecemos nuestros servicios tambi&eacute;n a trav&eacute;s de CajaVecina y ServiEstado." />
<meta name="keywords" content="banco estado, banco estado personas, cuenta rut, cuenta rut banco estado, banco del estado, bco estado, banco estado cuenta rut" />
<meta name="google-site-verification" content="4c-GB_tOOZmVfqhcXYRp-EjNHwdNdiMP05Tf9t5vjjU"/>
<title>BancoEstado Personas | Inicio</title>
<link rel="apple-touch-icon" sizes="57x57" href="/imagenes/_img/favicon/apple-touch-icon-57x57.png?v=YAAKQ7lzjg" />
<link rel="apple-touch-icon" sizes="60x60" href="/imagenes/_img/favicon/apple-touch-icon-60x60.png?v=YAAKQ7lzjg" />
<link rel="apple-touch-icon" sizes="72x72" href="/imagenes/_img/favicon/apple-touch-icon-72x72.png?v=YAAKQ7lzjg" />
<link rel="apple-touch-icon" sizes="76x76" href="/imagenes/_img/favicon/apple-touch-icon-76x76.png?v=YAAKQ7lzjg" />
<link rel="apple-touch-icon" sizes="114x114" href="/imagenes/_img/favicon/apple-touch-icon-114x114.png?v=YAAKQ7lzjg" />
<link rel="apple-touch-icon" sizes="120x120" href="/imagenes/_img/favicon/apple-touch-icon-120x120.png?v=YAAKQ7lzjg" />
<link rel="apple-touch-icon" sizes="144x144" href="/imagenes/_img/favicon/apple-touch-icon-144x144.png?v=YAAKQ7lzjg" />
<link rel="apple-touch-icon" sizes="152x152" href="/imagenes/_img/favicon/apple-touch-icon-152x152.png?v=YAAKQ7lzjg" />
<link rel="apple-touch-icon" sizes="180x180" href="/imagenes/_img/favicon/apple-touch-icon-180x180.png?v=YAAKQ7lzjg" />
<link rel="icon" type="image/png" href="/imagenes/_img/favicon/favicon-32x32.png?v=YAAKQ7lzjg" sizes="32x32" />
<link rel="icon" type="image/png" href="/imagenes/_img/favicon/android-chrome-192x192.png?v=YAAKQ7lzjg" sizes="192x192" />
<link rel="icon" type="image/png" href="/imagenes/_img/favicon/favicon-96x96.png?v=YAAKQ7lzjg" sizes="96x96" />
<link rel="icon" type="image/png" href="/imagenes/_img/favicon/favicon-16x16.png?v=YAAKQ7lzjg" sizes="16x16" />
<link rel="shortcut icon" href="/imagenes/_img/favicon/favicon.ico?v=YAAKQ7lzjg" />
<meta name="apple-mobile-web-app-title" content="BancoEstado" />
<meta name="application-name" content="BancoEstado" />
<meta name="msapplication-TileColor" content="#ff8700" />
<meta name="msapplication-TileImage" content="/imagenes/_img/favicon/mstile-144x144.png?v=YAAKQ7lzjg" />
<meta name="msapplication-config" content="/imagenes/_img/favicon/browserconfig.xml?v=YAAKQ7lzjg" />
<meta name="theme-color" content="#ff8700" />
<meta http-equiv="Content-Type" content="text/html; charset=uft-8" />
<link href="/imagenes/_img/favicon.ico" rel="icon" type="image/x-icon" />
<link href="/imagenes/_img/favicon.ico" rel="shortcut icon" type="image/x-icon" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.5, user-scalable=yes" />
<link rel="stylesheet" type="text/css" href="/imagenes/_style/css/base_2016.css"/>
<link rel="stylesheet"  href="/imagenes/_style/css/lightslider2.css"/>




  <script>(window.BOOMR_mq=window.BOOMR_mq||[]).push(["addVar",{"rua.upush":"true","rua.cpush":"true","rua.upre":"true","rua.cpre":"false","rua.uprl":"false","rua.cprl":"false","rua.cprf":"false","rua.trans":"SJ-35744a08-c296-41c5-b12d-ba4d265cf3b6","rua.cook":"false","rua.ims":"false","rua.ufprl":"true","rua.cfprl":"false"}]);</script>
  <script>!function(a){var e="https://s.go-mpulse.net/boomerang/",t="addEventListener";if("False"=="True")a.BOOMR_config=a.BOOMR_config||{},a.BOOMR_config.PageParams=a.BOOMR_config.PageParams||{},a.BOOMR_config.PageParams.pci=!0,e="https://s2.go-mpulse.net/boomerang/";if(window.BOOMR_API_key="B2EAP-M89RU-LJB8D-CB6RV-CJZW7",function(){function n(e){a.BOOMR_onload=e&&e.timeStamp||(new Date).getTime()}if(!a.BOOMR||!a.BOOMR.version&&!a.BOOMR.snippetExecuted){a.BOOMR=a.BOOMR||{},a.BOOMR.snippetExecuted=!0;var i,o,_,r=document.createElement("iframe");if(a[t])a[t]("load",n,!1);else if(a.attachEvent)a.attachEvent("onload",n);r.src="javascript:void(0)",r.title="",r.role="presentation",(r.frameElement||r).style.cssText="width:0;height:0;border:0;display:none;",_=document.getElementsByTagName("script")[0],_.parentNode.insertBefore(r,_);try{o=r.contentWindow.document}catch(O){i=document.domain,r.src="javascript:var d=document.open();d.domain='"+i+"';void(0);",o=r.contentWindow.document}o.open()._l=function(){var a=this.createElement("script");if(i)this.domain=i;a.id="boomr-if-as",a.src=e+"B2EAP-M89RU-LJB8D-CB6RV-CJZW7",BOOMR_lstart=(new Date).getTime(),this.body.appendChild(a)},o.write("<bo"+'dy onload="document._l();">'),o.close()}}(),"".length>0)if(a&&"performance"in a&&a.performance&&"function"==typeof a.performance.setResourceTimingBufferSize)a.performance.setResourceTimingBufferSize();!function(){if(BOOMR=a.BOOMR||{},BOOMR.plugins=BOOMR.plugins||{},!BOOMR.plugins.AK){var e="true"=="true"?1:0,t="",n="zbjrtmyxayebyxysjwpa-f-fc108ae9b-clientnsv4-s.akamaihd.net",i={"ak.v":"27","ak.cp":"870288","ak.ai":parseInt("555513",10),"ak.ol":"0","ak.cr":17,"ak.ipv":4,"ak.proto":"h2","ak.rid":"14a9781d","ak.r":16107,"ak.a2":e,"ak.m":"dsca","ak.n":"essl","ak.bpcip":"200.83.25.0","ak.cport":50281,"ak.gh":"186.148.33.205","ak.quicv":"","ak.tlsv":"tls1.3","ak.0rtt":"","ak.csrc":"-","ak.acc":"","ak.t":"1595035038","ak.ak":"hOBiQwZUYzCg5VSAfCLimQ==LyMDi2jZ0+1hmFubwm0rwlUflnJ3cMddIy+EV6dj+DCuLoAoxuXeRyKIFHuVwTxru+aIrCy4nY60RKK1OVIRhyrsq51gK7ZaXw/2D+oplv+yeNJXifHvvzkzTjRa6t2lZfDkbtbeXPYYjKFk400sR0uM77Ivlo9EUxK0wW8xN/eaC/ij5QLT0amwfZ0pKoShIlRGaB0Xi6zSasb+Fs+O2BmXKJXEnGG8KdsM73b2R6/zlMLPFAV7ILEAaTxi95klacD5DVXQrb6koLd3WZYFCIMp7j7bXPZh3lGbBTbYhXWbDR4B09c/MxUwB9Q9fllVwmuurQnP7A2aNZvO2W9LWWf+FGaOvV9AxXT09MI4WLVq7qdvqsGPfX/Mj4AYwH3SXefgunIchBjpQQWsQZKmeNviW3LY02fv3VLmISg+1Qo=","ak.pv":"63"};if(""!==t)i["ak.ruds"]=t;var o={i:!1,av:function(e){var t="http.initiator";if(e&&(!e[t]||"spa_hard"===e[t]))i["ak.feo"]=void 0!==a.aFeoApplied?1:0,BOOMR.addVar(i)},rv:function(){var a=["ak.bpcip","ak.cport","ak.cr","ak.csrc","ak.gh","ak.ipv","ak.m","ak.n","ak.ol","ak.proto","ak.quicv","ak.tlsv","ak.0rtt","ak.r","ak.acc","ak.t"];BOOMR.removeVar(a)}};BOOMR.plugins.AK={akVars:i,akDNSPreFetchDomain:n,init:function(){if(!o.i){var a=BOOMR.subscribe;a("before_beacon",o.av,null,null),a("onbeacon",o.rv,null,null),o.i=!0}return this},is_complete:function(){return!0}}}}()}(window);</script><script>bazadebezolkohpepadr="1671753596"</script><script type="text/javascript" src="https://www.bancoestado.cl/akam/11/63a4ec27" defer></script></head>
<script>

function formateaRut(obj) {
//alert(document.simulador.strRut.value);
     rut=document.simulador.strRut.value;
    var actual = rut.replace(/^0+/, "");
    if (actual != '' && actual.length > 1) {
        var sinPuntos = actual.replace(/\./g, "");
        var actualLimpio = sinPuntos.replace(/-/g, "");
        var inicio = actualLimpio.substring(0, actualLimpio.length - 1);
        var rutPuntos = "";
        var i = 0;
        var j = 1;
        for (i = inicio.length - 1; i >= 0; i--) {
            var letra = inicio.charAt(i);
            rutPuntos = letra + rutPuntos;
            if (j % 3 == 0 && j <= inicio.length - 1) {
                rutPuntos = "." + rutPuntos;
            }
            j++;
        }
        var dv = actualLimpio.substring(actualLimpio.length - 1);
        rutPuntos = rutPuntos + "-" + dv;
    
	document.simulador.strRut.value=rutPuntos;
    return rutPuntos;
	}
	
}
function soloRut(evt)
{
	var charCode = (evt.which) ? evt.which : evt.keyCode
	if (charCode != 37 && charCode != 38 && charCode != 39 && charCode != 40)
	if (charCode > 31 
		&& (charCode < 48 
			|| charCode > 57)
		&& (charCode < 96 
			|| charCode > 105) 
		&& charCode != 190 
		&& charCode != 173 
		&& charCode != 109
		&& charCode != 75)
	return false;
	return true;
}

  </script>

<body>

<div id="general" class="home"><!-- general --> 
  
  <!--[if lt IE 8]>

	<link rel="stylesheet" type="text/css" href="/imagenes/_style/css/ie7down.css" />

		<div id="avisobrowser" style="display:block">
			<div class="content"> Esta p&aacute;gina se encuentra optimizada para navegadores vigentes, por favor actualiza tu navegador <a href="http://windows.microsoft.com/es-es/internet-explorer/download-ie">aqu&iacute;</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
		</div>


	<![endif]--> 
  
  <script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1701206040206689'); 
fbq('track', 'PageView');
</script>

<!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
 fbq('init', '1706185473028116'); 
fbq('track', 'PageView');
</script>

<noscript>
<img height="1" width="1" 
src="https://www.facebook.com/tr?id=1706185473028116&ev=PageView
&noscript=1"/>
</noscript>
<!-- End Facebook Pixel Code -->

 
<!-- Google Tag Manager Personas -->
<noscript>
<iframe src="//www.googletagmanager.com/ns.html?id=GTM-MQ3XRV" title="google tag manager" height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript>
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MQ3XRV');</script> 
<!-- End Google Tag Manager -->

<meta name="google-site-verification" content="4c-GB_tOOZmVfqhcXYRp-EjNHwdNdiMP05Tf9t5vjjU" />
<div id="header" class="clearfix fixed " title="Header BancoEstado"> 
  
  <!-- CAJA DE HERRAMIENTAS-->
  
  <div class="cajaHerramientas"> <span class="cerrarCajaHerramientas" > x </span>


		<a class="emprende" data-csitio="Personas" data-cpieza="home" data-cnombre="emprende-home" data-ctipo="emprende-home" title="Emprende" target="_blank" href="https://emprendebancoestado.cl/medidasmipyme?utm_source=bancoestado.cl&utm_medium=referral&utm_campaign=emprende_widget_personas&utm_content=emprende_widget_home"><span style="margin-left: 35px;"> Emprende</span></a> 

	<div class="centroAyuda">
		
		
		
		<!-- Inicio Centro de ayuda--> 
      <a class="ayuda"  data-csitio="Personas" data-cpieza="home" data-cnombre="centro-ayuda" data-ctipo="centro-ayuda" title="Centro de ayuda" 
     target="_self" href="/imagenes/_personas/centro-de-ayuda.asp"> <img src="/imagenes/_img/centro-ayuda.png" alt="Centro de ayuda"/><span> Centro de Ayuda</span></a> 
	</div>
    <div class="redesSociales">  <!-- Inicio REDES SOCIALES--> 
        <a class="facebook"  data-csitio="Personas" data-cpieza="home" data-cnombre="Facebook-home" data-ctipo="Facebook-home" title="Facebook" 
     target="_blank" href="https://www.facebook.com/BancoEstado"> <img src="/imagenes/_img/rss-f.png" alt="Facebook"/><span> Facebook</span></a> 
		<a class="twitter"data-csitio="Personas" data-cpieza="home" data-cnombre="Twitter-home" data-ctipo="Twitter-home" title="Twitter" target="_blank" href="https://twitter.com/BancoEstado"> <img src="/imagenes/_img/rss-t.png" alt="Twitter" /><span>Twitter</span></a> 
		<a class="instagram"data-csitio="Personas" data-cpieza="home" data-cnombre="Instagram-home" data-ctipo="Instagram-home" title="Instagram" target="_blank" href="https://www.instagram.com/bancoestado"> <img src="/imagenes/_img/rss-i.png" alt="Instagram" /><span>Instagram</span></a>
		
		
	</div>
    <!-- Fin REDES SOCIALES--> 
    
    <!-- Inicio lenguas-->
    <div class="banderas"> 
		<a class="creole"  data-csitio="Personas" data-cpieza="home" data-cnombre="creole-home" data-ctipo="creole-home" title="Creole" target="_self" href="/imagenes/_personas/productos/cuentas/cuenta-rut-creole-home.asp"><span> Creole</span></a> 
		
		<a class="mapudungun"data-csitio="Personas" data-cpieza="home" data-cnombre="mapudungun-home" data-ctipo="mapudungun-home" title="Mapudungun" target="_self" href="/imagenes/_personas/productos/cuentas/cuenta-rut-mapudungun-home.asp"><span>Mapudungun</span></a> 
		
		
	</div>
    <!-- Fin lenguas--> 
    
  </div>
  <!-- Fin Centro de ayuda--> 
  
  <!--Fin  CAJA DE HERRAMIENTAS-->
  
  <div class="nav-top" title="Menú Superior de Portales">
    <div class="content">
      <ul>
        <li class="active-site"><a href="/imagenes/_personas/home/default.asp" onClick="ga('send','event','Personas', 'Header', 'portalpersonas');" title="Personas">Personas</a></li>
        <li><a href="/imagenes/_microempresas/home/default.asp" onClick="ga('send','event','Personas', 'Header', 'portalmicroempresas');" title="Microempresas">Microempresas</a></li>
        <li><a href="/imagenes/_pequenas-empresas/home/default.asp" onClick="ga('send','event','Personas', 'Header', 'portalpequenaempresas');" title="Peque&ntilde;as Empresas">Peque&ntilde;as Empresas</a></li>
        <li><a href="/imagenes/empresas2008/Nueva_home_Empresas/index.html" onClick="ga('send','event','Personas', 'Header', 'portalempresas');"  title="Empresas">Empresas</a></li>
        <li><a href="/imagenes/institucionespublicas2008/Nueva_Home_Instituciones/index.html" onClick="ga('send','event','Personas', 'Header', 'portalinstitucionespublicas');" title="Instituciones P&uacute;blicas">I. P&uacute;blicas</a></li>
        <li><a href="/imagenes/institucionespublicas2008/Acceso_Isfl/index.html" onClick="ga('send','event','Personas', 'Header', 'portalOrgdelaSociedadCivil');" title="Org. de la Sociedad Civil">O. Sociedad Civil</a></li>
        <!--<li><a href="https://www.crecemujer.cl/" onClick="ga('send','event','Personas', 'Header', 'portalcrecemujer');" target="_blank" title="CreceMujer">CreceMujer</a></li>-->
        <li><a href="https://emprendebancoestado.cl/" onClick="ga('send','event','Personas', 'Header', 'Emprende');" target="_blank" title="Emprende">Emprende</a></li>
        <li><a target="_blank" href="https://compraqui.cl/" onClick="ga('send','event','Personas', 'Header', 'Compraqui');" title="Compraquí">Compraquí</a></li>
        <li><a target="_blank" href="http://www.corporativo.bancoestado.cl" onClick="ga('send','event','Personas', 'Header', 'portalcorporativo');" title="Corporativo"><!--<span class="icon-corp"></span>--> Corporativo</a></li>
         <li><a target="_blank" href="https://www.corporativo.bancoestado.cl/transparencia/ley-n%c2%ba-20-285" onClick="ga('send','event','Personas', 'Header', 'portalcorporativo');" title="Transparencia"><!--<span class="icon-corp"></span>--> Transparencia</a></li>
        <!--li><a target="_blank" href="http://huellasocialbancoestado.cl" onClick="ga('send','event','Personas', 'Header', 'Huella Social');" title="Huella Social">Huella Social</a></li-->
        <li class="destacado"><a target="_blank" href="https://bancoestado.trabajando.cl/" onClick="ga('send','event','Personas', 'Header', 'Trabaja en BancoEstado');" title="Trabaja en BancoEstado">Trabaja en BancoEstado</a></li>
        <li class="icono_senas"><a target="_self" href="/imagenes/_personas/lengua-de-senas.asp" onClick="ga('send','event','Personas', 'Header', 'Lengua de Señas');" title="Lengua de Señas"></a></li>
        <!--<li class="longer"><a href="http://www.corporativo.bancoestado.cl/investor-relations/investor-home" onClick="ga('send','event','Personas', 'Header', 'portalinvestor');" >Investor Relations</a></li>-->
        
      </ul>
    </div>
  </div>
  <div class="inner-content">
    <h1 id="logo">
      <div> <a class="casita" href="/imagenes/_personas/home/default.asp" > <img src="/imagenes/_img/logo-banco-estado.jpg" longdesc="/imagenes/_personas/home/default.asp" alt="Sitio web BancoEstado" title="Sitio web BancoEstado" /> </a> </div>
    </h1>
    <a class="btn-login-smartphone" href="https://www.bancoestado.cl/imagenes/comun2008/nuevo_paglg_pers2.html" title="Login">Banca en L&iacute;nea</a> <a href="#nav" class="navbar-toggle"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </a>
    <div class="content-nav">
      <div id="nav-top-select">
        <div class="variation">
          <label class="reset" for="select-portal">Seleccione Portal</label>
          <select class="select" name="select-portal" id="select-portal">
            <option rel="0" value="/imagenes/_personas/home/default.asp" selected="selected">Seleccione Portal...</option>
            <option rel="1" value="/imagenes/_personas/home/default.asp?desk1">Personas</option>
            <option rel="2" value="/imagenes/_microempresas/home/default.asp">Microempresas</option>
            <option rel="3" value="/imagenes/_pequenas-empresas/home/default.asp">Peque&ntilde;as Empresas</option>
            <option value="/imagenes/empresas2008/Nueva_home_Empresas/index.html">Empresas</option>
            <option value="/imagenes/institucionespublicas2008/Nueva_Home_Instituciones/index.html">Instituciones P&uacute;blicas</option>
            <option value="/imagenes/institucionespublicas2008/Acceso_Isfl/index.html">Inst. sin Fines de Lucro</option>
            <option value="https://emprendebancoestado.cl/">Emprende</option>
            <option value="https://compraqui.cl/">Compraquí</option>
            <option value="http://www.corporativo.bancoestado.cl/">Corporativo</option>
            <option target="_blank" value="http://huellasocialbancoestado.cl/">Huella Social</option>
            <option class="destacado" value="https://bancoestado.trabajando.cl/">Trabaja en BancoEstado</option>
            <option target="_blank" value="/imagenes/_personas/lengua-de-senas.asp">Lengua de Señas</option>
          </select>
        </div>
      </div>
      <div class="ayuda-head" title="Acceso a Banca en Línea">
        <div class="botones-menu-personas"> <a class="bt-haztecliente-personas" href="/imagenes/_personas/hazte-cliente/default.asp" onclick="ga('send','event','Personas', 'Hazte Cliente', 'boton_HazteCliente');" title="Hazte Cliente">Hazte Cliente</a> <a class="bt-login-personas" href="https://www.bancoestado.cl/imagenes/comun2008/nuevo_paglg_pers2.html" onClick="ga('send','event','Personas', 'Header', 'BancaenLinea');" target="_self" title="Banca en Línea"> <span class="icon-login"></span> <span>Banca en L&iacute;nea</span> </a> </div>
      </div>
      <div id="nav" class="animate" title="Menú de navegación Banca Personas" role="navigation" aria-label="Main menu">
        <ul class="principal nav-menu">
          <li class="nav-item current"><a id="jpg" href="/imagenes/_personas/home/default.asp"class="home" style="background-image:none" title="Home"><span class="icon-home"></span><span>Inicio</span></a></li>
          <li class="nav-item"><a href="javascript:;" title="Productos">Productos</a>
            <div class="sub-nav sub-menu">
              <div class="menu">
                <div class="space"></div>
                <div class="section-menu">
                  <ul>
                    <li><a href="/imagenes/_personas/productos/cuentas/cuentas.asp" class="titleCategory" title="Cuentas" style="background-image:url(/imagenes/_img/iconos_menu/iconos_menu_sprite.gif); background-repeat:no-repeat;" id="cuentas"> Cuentas </a>
                      <ul class="subitems">
                        <li><a href="/imagenes/_personas/productos/cuentas/cuenta-rut.asp" title=" CuentaRUT "> CuentaRUT </a></li>
                        <li><a href="/imagenes/_personas/productos/cuentas/plan-cuenta-corriente.asp"  title=" Planes de Cuentas"> Planes de Cuentas</a></li>
                        <li><a href="/imagenes/_personas/productos/cuentas/chequera-electronica.asp" title=" Cuenta Pro "> Cuenta Pro</a></li>
                      </ul>
                    </li>
                  </ul>
                  <ul>
                    <li><a href="/imagenes/_personas/productos/tarjetas-de-credito/tarjetas-de-credito.asp" class="titleCategory" title="Tarjetas de Cr&eacute;dito" style="background-image:url(/imagenes/_img/iconos_menu/iconos_menu_sprite.gif); background-repeat:no-repeat; background-position:0px -29px;">Tarjetas de Cr&eacute;dito</a>
                      <ul class="subitems">
                        <li><a href="/imagenes/_personas/productos/tarjetas-de-credito/visa-platinum.asp" title=" Visa Platinum "> Visa Platinum </a></li>
                        <li><a href="/imagenes/_personas/productos/tarjetas-de-credito/visa-dorada.asp" title=" Visa Dorada "> Visa Dorada </a></li>
                        <li><a href="/imagenes/_personas/productos/tarjetas-de-credito/visa-internacional.asp" title=" Visa Internacional "> Visa Internacional </a></li>
                        <!--
                        <li><a href="/imagenes/_personas/productos/tarjetas-de-credito/visa-nacional.asp" title=" Visa Nacional "> Visa Nacional </a></li>-->
                        <li><a href="/imagenes/_personas/productos/tarjetas-de-credito/mastercard-black.asp" title=" Mastercard Black "> Mastercard Black </a></li>
                        <li><a href="/imagenes/_personas/productos/tarjetas-de-credito/mastercard-gold.asp" title=" Mastercard Gold "> Mastercard Gold </a></li>
                        <li><a href="/imagenes/_personas/productos/tarjetas-de-credito/mastercard-estandar.asp" title=" Mastercard Est&aacute;ndar "> Mastercard Est&aacute;ndar </a></li>
                        <li><a href="/imagenes/_campanas/avance-en-cuotas/index.asp" title="Avance en cuotas"> Avance en cuotas</a> </li>
                        <li><a href="/imagenes/_personas/productos/tarjetas-de-credito/comparador-tarjetas.asp" title="Comparador de Tarjetas de Crédito"> Comparador de Tarjetas de Crédito</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="section-menu">
                  <ul>
                    <li><a href="/imagenes/_personas/productos/creditos/creditos.asp" class="titleCategory" title="Cr&eacute;ditos" style="background-image:url(/imagenes/_img/iconos_menu/iconos_menu_sprite.gif); background-repeat:no-repeat; background-position:0px -79px; ">Cr&eacute;ditos</a>
                      <ul class="subitems">
                        <li><a href="/imagenes/_personas/productos/creditos/credito-personal.asp" title=" Cr&eacute;dito Personal "> Cr&eacute;dito Personal </a></li>
                        <li><a href="/imagenes/_personas/productos/creditos/creditos-educacion/creditos-educacion.asp" title=" Cr&eacute;ditos de Educaci&oacute;n "> Cr&eacute;ditos de Educaci&oacute;n </a></li>
                        <li><a href="/imagenes/_personas/productos/creditos/creditos-hipotecarios/creditos-hipotecarios.asp" title=" Cr&eacute;ditos Hipotecarios "> Cr&eacute;ditos Hipotecarios </a></li>
                      </ul>
                    </li>
                  </ul>
                  <ul>
                    <li><a href="/imagenes/_personas/productos/seguros/seguros.asp" class="titleCategory" title="Seguros" style="background-image:url(/imagenes/_img/iconos_menu/iconos_menu_sprite.gif); background-repeat:no-repeat; background-position: 0px -119px;">Seguros</a>
                      <ul class="subitems">
                        <li><a href="/imagenes/_campanas/seguros/siniestro.asp" title=" Denuncio de Siniestro">Denuncio de Siniestro </a></li>
                        <li><a href="/imagenes/_personas/productos/seguros/familia/familia.asp" title=" Seguros para Familia "> Seguros para Familia </a></li>
                        <li><a href="/imagenes/_personas/productos/seguros/bienes/bienes.asp
              
          " title=" Seguros para Bienes "> Seguros para Bienes </a></li>
                        <li><a href="/imagenes/_personas/productos/seguros/tarjetas-y-cuentas/tarjetas-y-cuentas.asp
              
          " title=" Seguros para Tarjetas y Cuentas "> Seguros para Tarjetas y Cuentas </a></li>
                      </ul>
                    </li>
                  </ul>
                  <ul>
                    <li><a href="/imagenes/_personas/productos/chilenos-en-el-exterior/chilenos-en-el-exterior.asp" class="titleCategory" title="Chilenos en el Exterior" style="background-image:url(/imagenes/_img/iconos_menu/iconos_menu_sprite.gif); background-repeat:no-repeat; background-position: 0px -159px; ">Chilenos en el Exterior</a>
                      <ul class="subitems">
                        <li><a href="/imagenes/_personas/productos/chilenos-en-el-exterior/ahorro-en-chile/ahorro-en-chile.asp" title=" Ahorro en Chile"> Ahorro en Chile</a></li>
                        <li><a href="/imagenes/_personas/productos/chilenos-en-el-exterior/chequera-electronica.asp" title=" Chequera Electr&oacute;nica "> Cuenta Pro (Chequera Electr&oacute;nica) </a></li>
                        <li><a href="/imagenes/_personas/productos/chilenos-en-el-exterior/compra-vivienda-chile.asp" title=" Compra de Vivienda en Chile "> Compra de Vivienda en Chile </a></li>
                      </ul>
                    </li>
                      <li> <a href="/imagenes/_personas/convenios/beneficios-convenios.asp" class="titleCategory" title="Convenios" style="background-image:url(/imagenes/_img/iconos_menu/iconos_menu_sprite.gif); background-repeat:no-repeat; background-position:0px -79px;">Convenios</a></li>
                  </ul>
                </div>
                <div class="section-menu">
                  <ul>
                    <li><a href="/imagenes/_personas/productos/ahorro-e-inversiones/ahorro-e-inversiones.asp" class="titleCategory" title="Ahorro e Inversiones" style="background-image:url(/imagenes/_img/iconos_menu/iconos_menu_sprite.gif); background-repeat:no-repeat; background-position: 0px -202px;">Ahorro e Inversiones</a>
                      <ul class="subitems">
                        <li><a href="/imagenes/_personas/productos/ahorro-e-inversiones/cuenta-ahorro/cuenta-ahorro.asp" title=" Cuentas de Ahorro "> Cuentas de Ahorro </a></li>
                        <li><a href="/imagenes/_corredores-bolsa/home/default.asp?desk1" title=" Corredores de Bolsa " target="_blank"> Corredores de Bolsa </a></li>
                        <li><a href="/imagenes/_personas/productos/ahorro-e-inversiones/fondos-mutuos/fondos-mutuos.asp" title=" Fondos Mutuos "> Fondos Mutuos </a></li>
                        <li><a href="/imagenes/_personas/productos/ahorro-e-inversiones/productos/apv.asp" title=" Ahorro Previsional Voluntario (APV) "> Ahorro Previsional Voluntario (APV) </a></li>
                        <li><a href="/imagenes/_personas/productos/ahorro-e-inversiones/productos/apvg.asp" title=" Ahorro Previsional Voluntario Grupal(APVG) "> Ahorro Previsional Voluntario Grupal(APVG) </a></li>
                        <li><a href="/imagenes/_personas/productos/ahorro-e-inversiones/productos/depositos-a-plazo.asp" title=" Depósitos a Plazo "> Dep&oacute;sitos a Plazo </a></li>
                        <li><a href="/imagenes/_personas/productos/ahorro-e-inversiones/productos/compra-y-venta-acciones.asp" title=" Compra y Venta de Acciones "> Compra y Venta de Acciones </a></li>
                        <li><a href="/imagenes/_personas/productos/ahorro-e-inversiones/productos/venta-de-pacto-retrocompra.asp" title=" Venta de Pacto de Retrocompra "> Ventas con Pactos con Compromiso de Retrocompra</a></li>
                        <li><a href="/imagenes/_personas/productos/ahorro-e-inversiones/productos/administracion-de-cartera.asp" title=" Administraci&oacute;n de Cartera "> Administraci&oacute;n de Cartera </a></li>
                      </ul>
                    </li>
                  </ul>
                  <ul>
                    <li><a href="/imagenes/_personas/productos/ahorro-e-inversiones/moneda-extranjera.asp" class="titleCategory" title="Ahorro e Inversiones" style="background-image:url(/imagenes/_img/iconos_menu/iconos_menu_sprite.gif); background-repeat:no-repeat; background-position: 0px -202px;">Moneda Extranjera</a>
                      <ul class="subitems">
                        <li><a href="/imagenes/_personas/productos/ahorro-e-inversiones/productos/compra-y-venta-de-divisas.asp" title=" Compra y Venta de Divisas "> Compra Venta Moneda Extranjera </a></li>
                        <li><a href="/imagenes/_personas/servicios/envio-de-dinero/envio-de-dinero.asp" title=" Envío y Recepción de Dinero"> Envía Recibe Dinero desde Chile y el Extranjero </a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <!-- Simuladores -->
          <li><a href="javascript:;" title="Simuladores">Simuladores</a>
            <div class="sub-menu">
              <div class="menu">
                <div class="space"></div>
                <div class="section-menu">
                  <ul>
                    <li><a href="javascript:;" target="_blank" class="titleCategory" title="Cr&eacute;dito Personal" style="background-image:url(/imagenes/_img/iconos_menu/iconos_menu_sprite.gif); background-repeat:no-repeat; background-position:0px -79px;">Créditos</a>
                      <ul class="subitems">
                      <li><a href="https://www.bancoestado.cl/imagenes/nuevo_form/11394_simulador_consumo/solicitud.asp" target="_blank" title="Cr&eacute;dito Personal">Cr&eacute;dito Personal</a></li>
                        <li>  <!--<a href="https://www.bancoestado.cl/imagenes/nuevo_form/nuevoFlujo/deudas.asp" target="_blank" title="Cr&eacute;dito de Refinanciamiento">Cr&eacute;dito de Refinanciamiento</a></li>
                        <li><a href="https://www.bancoestado.cl/bancoestado/simulaciones/creditouniversitario2012/simula1.asp" target="_blank" title="Cr&eacute;dito Universitario de Post Grado">Cr&eacute;dito Universitario de Post Grado</a></li>-->
                        <li><a href="https://www.bancoestado.cl/imagenes/nuevo_form/asesor/hipotecario/index.html" target="_blank" title="Cr&eacute;dito Hipotecario">Cr&eacute;dito Hipotecario</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="section-menu">
                  <ul>
                    <li><a href="javascript:;" class="titleCategory" title="Inversiones" style="background-image:url(/imagenes/_img/iconos_menu/iconos_menu_sprite.gif); background-repeat:no-repeat; background-position: 0px -202px;">Inversiones</a>
                      <ul class="subitems">
                        <li><a href="https://www.bancoestado.cl/imagenes/FondosMutuos/simriesgoAPV_lightbox/simula.html" target="_blank" title="Perfil de Inversionista ">Perfil de Inversionista </a></li>
                        <!--li><a href="https://www.bancoestado.cl/bancoestado/simulaciones/DepositoPlazo/simulacion.asp" title=" Dep&oacute;sito a Plazo " target="_blank"> Dep&oacute;sito a Plazo </a></li-->
                        <li><a href="https://www.bancoestado.cl/bancoestado/simulaciones/comercio/simule_1.asp" title=" Compra y Venta de D&oacute;lares " target="_blank"> Compra y Venta de D&oacute;lares </a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <!--<div class="section-menu">
                  <ul>
                    <li><a href="javascript:;" class="titleCategory" title="Tarjetas de Cr&eacute;dito" style="background-image:url(/imagenes/_img/iconos_menu/iconos_menu_sprite.gif);   background-repeat:no-repeat; background-position:0px -29px;">Tarjetas</a>
                      <ul class="subitems">
                        <li><a href="https://www.bancoestado.cl/BancoEstado/Simulaciones/SimuladorTCR/SimulaTCR2.asp" target="_blank" title="Simula tu Tarjeta de Cr&eacute;dito">Tarjetas de Cr&eacute;dito</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>--> 
              </div>
            </div>
          </li>
          <!-- fin simuladores --> 
          
          <!-- servicios -->
          <li><a href="javascript:;" title="Servicios">Servicios</a>
            <div class="sub-menu" >
              <div class="menu">
                <div class="space"></div>
                <div class="section-menu" style="width:180px;">
                  <ul>
                   <!--li> <a href="/imagenes/_personas/servicios/servicios_digitales/index.asp" class="titleCategory" title="Servicios Digitales"style=" background-image:url(/imagenes/_img/iconos_menu/iconos_menu_sprite.gif); background-repeat:no-repeat;background-position: 0px -378px;">Servicios Digitales</a></li-->

                    <li> <a href="/imagenes/_personas/servicios/servicios.asp" class="titleCategory" title="Servicios"style=" background-image:url(/imagenes/_img/iconos_menu/iconos_menu_sprite.gif); background-repeat:no-repeat;background-position: 0px -378px;">Servicios</a>
                      <ul class="subitems">
                        <!--<li><a href="/imagenes/_personas/servicios/servicios_digitales/index.asp" title="Servicios Digitales" target="_blank">Servicios Digitales</a></li>-->
                        
                        <li><a href="/imagenes/_personas/servicios/pat.asp" title="Pago Automático con Tarjeta (PAT)" target="_self">Pago Automático con Tarjeta (PAT)</a></li>
                        <li><a href="/imagenes/_personas/servicios/pac.asp" title=" Pago Automático 
de Cuentas (PAC)" target="_self">Pago Automático de Cuentas (PAC)</a></li>
                        <li><a href="/imagenes/_personas/servicios/pel.asp" title=" Pago Electrónico 
en Línea (PEL)" target="_self">Pago Electrónico 
                          en Línea (PEL)</a></li>
                        
                        <!--PAGOSELECTRONICOS-->
                        <li><a href="/imagenes/_personas/servicios/pagos-electronicos.asp" title=" Pagos Electrónicos" target="_self">Pagos Electrónicos</a></li>
                      </ul>
                    </li>
                  </ul>
                  <ul>
                    <li> <a href="/imagenes/_personas/servicios/envio-de-dinero/envio-de-dinero.asp" class="titleCategory" title="Env&iacute;o de Dinero"style=" background-image:url(/imagenes/_img/iconos_menu/iconos_menu_sprite.gif); background-repeat:no-repeat;background-position: 0px -512px; white-space: nowrap; "> Env&iacute;o de Dinero</a>
                      <ul class="subitems">
                        <li><a href="/imagenes/_personas/servicios/giros-internacionales.asp" title=" Desde Chile hacia el extranjero"> Envía-Recibe dinero desde Chile y el Extranjero </a></li>
                        <!--<li><a href="/imagenes/_personas/servicios/giros-internacionales.asp" title=" Desde Chile hacia el exterior (En ServiEstado) ">Giros Internacionales a través de ServiEstado</a></li>-->
                        <li><a href="/imagenes/_personas/servicios/envio-de-dinero/exterior-chile.asp" title=" Hacia Chile desde el exterior  ">Hacia Chile desde el exterior </a></li>
                        <li><a href="/imagenes/_personas/servicios/envio-de-dinero/nacional-giro-express.asp" title=" Giro Express - Nacional ">Giro Express - Nacional </a></li>
                      </ul>
                    </li>

                  </ul>
                </div>
                <div class="section-menu">
                  <ul>
                    <li class="nowrap" ><a href="https://emprendebancoestado.cl/medidasmipyme" target="_blank" class="titleCategory" title="Apoyo al Emprendedor="style=" background-image:url(/imagenes/_img/iconos_menu/iconos_menu_sprite.gif); background-repeat:no-repeat;background-position: 0px -422px;">Apoyo al Emprendedor</a></li>
		    <li class="nowrap"><a href="/imagenes/_personas/servicios/app-movil/descarga.asp" class="titleCategory" title="APP BancoEstado"style=" background-image:url(/imagenes/_img/iconos_menu/iconos_menu_sprite.gif); background-repeat:no-repeat;background-position: 0px -422px;">APP BancoEstado</a> 
                    <li class="nowrap"><a href="/imagenes/_personas/servicios/app-lazarillo/lazarillo.asp" class="titleCategory" title="APP Lazarillo"style=" background-image:url(/imagenes/_img/iconos_menu/iconos_menu_sprite.gif); background-repeat:no-repeat;background-position: 0px -422px;">APP Lazarillo</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <!-- fin servicios --> 
          
          <!-- red de atencion -->
          <li><a href="javascript:;" title="Ver Red de Atención"><span class="hidden">Menu</span>Red de Atención</a>
            <div class="sub-menu">
              <div class="menu">
                <div class="space"></div>
                <div class="section-menu">
                  <ul>
                    <li><a href="https://www.bancoestado.cl/imagenes/redatencion/Sucursales2.asp" class="titleCategory" title="Red de Atención" style="background-image:url(/imagenes/_img/iconos_menu/iconos_menu_sprite.gif); background-repeat:no-repeat;  background-position: 0px -244px;" target="_blank">Red de Atención</a></li>
                  </ul>
                  <ul>
                    <li><a href="/imagenes/_personas/servicios/cajavecina.asp" class="titleCategory" title="CajaVecina" style="background-image:url(/imagenes/_img/iconos_menu/iconos_menu_sprite.gif); background-repeat:no-repeat; background-position: 0px -287px;">CajaVecina</a></li>
                  </ul>
                </div>
                <div class="section-menu">
                  <ul>
                    <li><a href="/imagenes/_personas/servicios/serviestado.asp" class="titleCategory" title="ServiEstado" style="background-image:url(/imagenes/_img/iconos_menu/iconos_menu_sprite.gif); background-repeat:no-repeat; background-position: 0px -331px;">ServiEstado</a></li>
                  </ul>
                  <ul>
                    <li><a href="/imagenes/_personas/beco.asp" class="titleCategory" title="BancoEstado Cobranza" style="background-image:url(/imagenes/_img/iconos_menu/iconos_menu_sprite.gif); background-repeat:no-repeat; background-position: 0px -465px;">BancoEstado Cobranza</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <!-- fin Servicios -->
          
        </ul>


		<!-- inicio buscador  --
        <div class="search">
          <form action="" method="post">
            <fieldset>
              <legend>
              <label for="txtBuscar">Buscar</label>
              </legend>
              <input id="txtBuscar" type="text" placeholder="Buscar en BancoEstado..."/>
              <button class="btn" id="btnBuscar" rel="/imagenes" rel2="_personas" type="submit"></button>
            </fieldset>
          </form>
        </div>
		-->

      </div>
    </div>
  </div>
  <span class="bg-head"></span> </div>

  
  <div id="mensaje_contenedor">
<div class="contingencia">
<div id="mensaje_contingencia">

<!--a href="https://www.bancoestado.cl/imagenes/_campanas/contingencia/index.asp" target="_self"data-csitio="Personas" data-cpieza="Huincha Alerta" data-cnombre="alerta web" data-ctipo="alerta web" data-cposicion="1"-->
<!--	<img src="/imagenes/_img/alert.png" /> -->

	
<p style="font-size:1.2em;"><strong>Hay una nueva versión de nuestra App.</strong> Descárgala para mejorar tu experiencia con BancoEstado.</p>
	
	
<!--/a -->
	
	
	
	
	
</div>
</div>

</div>
  
  <!-- BANNER FIJO SIN CARRUSEL --

	
-- FIN BANNER SIN CARRUSEL  -->

<!--CARRUSEL-->

<div class="be_field_banner" be-itemtype="banner" be-itemid="01" be-pageid="personas_home">
<div id="banner" class="item banner backgroundColorBanner">
  <div class="flexslider landing" id="owl-demo">
    <ul class="slides">


<!-- MOVI2  1 -->

    <li class="item" data-duration="7000"> 
    <a href="/imagenes/_campanas/movi2/index.asp" data-csitio="Personas" data-cpieza="BannerCampanas" data-cnombre="banner_movi2" data-ctipo="banner_movi2" data-cposicion="1" target="_self"> 
    <img class="desktop" src="/imagenes/_campanas/movi2/banner_movi2.jpg" alt="Movi2 Con tu aporte junto a Movidos x Chile ayudarás a los afectados por COVID-19" longdesc="/imagenes/_personas/home/default.asp" draggable="false" /> </a> </li>


<!-- CORPORATIVO  2 -->



<!-- HORARIO EXTENDIDO 2 -->

	<li class="item" data-duration="7000"> 
	<a href="/imagenes/_campanas/contingencia/index.asp#ips" data-csitio="Personas" data-cpieza="BannerCampanas" data-cnombre="horario-extendido" data-ctipo="horario-extendido" data-cposicion="2" target="_self"> 
	<img class="desktop" src="/imagenes/_campanas/contingencia/banner-horario-extendido2.jpg" alt="Sucursales con horarios exclusivos para Pagos de Pensiones y Beneficios" longdesc="/imagenes/_personas/home/default.asp" draggable="false" /> </a> </li>



<!-- COMPROMETIDOS CONTIGO MEDIDAS FOGAPE 3	-->

	<li class="item" data-duration="7000"> 
	<a href="/imagenes/_campanas/contingencia/comprometidoscontigo.asp" data-csitio="Personas" data-cpieza="BannerCampanas" data-cnombre="comprometidos contigo" data-ctipo="Comprometidos Contigo" data-cposicion="3" target="_self"> 
	<img class="desktop" src="/imagenes/_campanas/contingencia/banner52.jpg" alt="Crédito para Capital de Trabajo FOGAPE COVID19" /> 
	</a> </li>


<!-- SUCURSALES DISPONIBLES 4 -->

	<li class="item" data-duration="7000"> 
	<a href="/imagenes/_campanas/contingencia/index.asp" data-csitio="Personas" data-cpieza="BannerCampanas" data-cnombre="contingencia final" data-ctipo="Contingencia final" data-cposicion="4" target="_self"> 
	<img class="desktop" src="/imagenes/_campanas/contingencia/0_banner_sucursales.jpg" alt="Sucursales disponibles durante esta cuarentena." longdesc="/imagenes/_personas/home/default.asp" draggable="false" /> </a> </li>
  
	





<!-- ///   OTROS    ///// --->






<!-- LEY DE FRAUDE 4 -->
  




<!-- DENUNCIO SINIESTRO 5 -->




<!-- DESCARGA APP HAZ TODO DESDE TU CASA 3 -->



<!-- BONO COVID	-->
	
	
	

			
			
  <!-- OPREACION RENTA DEVOLUCION DE IMPUESTOS -->
        			
			

	<!-- Mercado Pyme-->
          



<!-- HISTORIAS COMPROMETIDOS CONTIGO-->


<!-- CAJAVECINA-->
          



			
	<!-- contingencia COVID 19 CANALES REMOTOS -->
        		
	
	

<!-- IPS-->



	
	
    <!-- TELETON  -->

    
	
	
	

	

	
	
	
	
	
	
<!-- campana_jetsmart -->
            
    
<!-- campana_jetsmart   30/04/2020 23:59 
            
 -->
 



<!-- contingencia levantapyme -->
        		

        <!-- CAJAVECINA-->
 
		
			
			
<!-- SOAP-->
  


<!-- PAGO LINEA DE CREDITO AUTOMATICO  2 LEY 21.167-->
  	

<!-- Descarga App 2.0 -->
        	
	
<!-- CONTINGENCIA ABIF-->
  

  

     





<!-- CAMPAÑA AHORRO GENERICO -->
         
      
<!-- SURCHARGE ATM -->
        
      
          
<!-- BANNER CAMPAÑA CONSUMO OCTUBRE-->
        

<!-- BANNER SEGURIDAD -->    
    
		  
		  
<!-- BANNER SEGURIDAD -->    
    		  

<!-- BANNER SEGURIDAD -->    
      
 
 
 <!--  FIN CARRUSEL --> 
 
 	  

<!-- AVANCE EN CUOTAS -->
        
       
      
      
<!-- CAMPAÑA FONDOS MUTUOS -->    
       
 
<!-- TCR SEPTIEMBRE -->
      
                
<!-- BANNER AMA -->
      
      
<!-- HIPOTECARIO -->
        





      
<!-- 4-A 12  -->
      
   
    </ul>
  </div>
</div>


      <!-- INCIO QUE A TI NO TE PASE -->
      
      
  <!-- AVANCE EN CUOTAS AGOSTO-->
      

<!-- CAMPAÑA INSTITUCIONAL -->
      
	  
      <!-- CAMPAÑA INSTITUCIONAL UN MEJOR BANCO PARA UN MEJOR PAIS -->
         
      
    
	  
	  <!-- BANNER SUBSIDIO -->    
      
      
<!-- BANNER SEGURIDAD -->    
   
	

    
    <!-- INICIO SIMULADOR DE CONSUMO  --
   <div id="grey-zone2">
	
		<div id="contenedor">
			
			<div class="grid">
				
				<form action="https://www.bancoestado.cl/imagenes/nuevo_form/11394_simulador_consumo/solicitud.asp" method="get" name="simulador" id="simulador" target="_blank">	
				
			<div class="col-6"> <label class="textoSimulador" for="male">Simula tu <span>Crédito de Consumo</span></label></div>

         
			<div class="col-4"> <input  onblur="formateaRut(this)" onKeyDown="return soloRut(event);" class="form-control rut required inputSimulador" style="text-transform: uppercase;" maxlength="12"  type="text" name="strRut" id="strRut" placeholder="Ej:11111111-1"></div>
				
			<div class="col-2">
				<button data-csitio="Personas" data-cpieza="Simulador Home" data-cnombre="boton simular home" data-ctipo="boton simular home"  data-cposicion="0" type="submit" form="simulador" value="Submit" class="botonSimulador accion seleccion">Simular</button>
			</div>
				
		</form>
			</div>
				
			
		</div>
	</div>	
	
	
	 --FIN SIMULADOR DE CONSUMO -->
  
  
  
  <div id="contenedor"><!-- contenedor -->
    <div id="wrap-productos">
      <div style="margin-bottom: -60px;"class="title-line titleoculto">
        <h2 style="color:#464646;"><span>Consejos y Beneficios</span></h2>
      </div>
    </div>
  </div>
  
  
   <div class="seccionAPP2 carrusel-beneficios">
   <div id="contenedor">
   <div class="grid">
    
<!--DESARROLLO CAMPANAS HOME-->

 <div class="lSSlideOuter">
  <div class="lSSlideWrapper usingCss" style="transition-timing-function: cubic-bezier(0.25, 0, 0.25, 1); transition-duration: 600ms;">
    <ul id="responsive" class="gallery content-slider list-unstyled clearfix lightSlider lSSlide lsGrab" style="width: 2435px; height: 165px; padding-bottom: 0%; transform: translate3d(-1461px, 0px, 0px);">


<!-- CUENTA CON ELLAS (TODOSUMA) 1 -->
      
      <li class="lslide hvr-float-shadow" style="background-color: #fff;width: 233.5px; margin-right: 10px;">
        <div style="border: 1px solid rgba(0,0,0,.125);border-radius: .25rem;" class="card-box"> 
        <a data-csitio="Personas" data-cpieza="Promociones" data-cnombre="Todosuma-cuentaconellas" data-ctipo="Todosuma-cuentaconellas" data-cposicion="1" target="_self" href="/imagenes/todosuma/descuentos/index.asp"> 
		<img src="/imagenes/todosuma/images/cuentaconellas_secundario.jpg" alt="Cuenta con ellas!, conoce los beneficios de tus tarjetas BancoEstado" style="width:100%" title="Cuenta con ellas!, conoce los beneficios de tus tarjetas BancoEstado">
          <div class="cont-card">
            <h6 style=" margin-top:20px;text-align:left;"><b style="color: #818181;"> Más información aquí</b></h6>
          <span class="mas gris"></span>
          </div>
          </a> </div>
      </li>
      	


<!--que a ti no te pase 2 -->
      
      <li class="lslide hvr-float-shadow" style="background-color: #fff;width: 233.5px; margin-right: 10px;">
        <div style="border: 1px solid rgba(0,0,0,.125);border-radius: .25rem;" class="card-box"> 
        <a data-csitio="Personas" data-cpieza="Promociones" data-cnombre="Ciberseguridad" data-ctipo="Ciberseguridad" data-cposicion="2" target="_self" href="/imagenes/_campanas/ciberseguridad2/index.asp"> 
		<img src="/imagenes/_campanas/ciberseguridad2/ciberseguridad3.jpg" alt="Nunca te enviaremos correos o mensajes con links! Estos sólo quieren robar tus datos y claves" style="width:100%" title="Nunca te enviaremos correos o mensajes con links! Estos sólo quieren robar tus datos y claves">
          <div class="cont-card">
            <h6 style=" margin-top:20px;text-align:left;"><b style="color: #818181;"> Más información aquí</b></h6>
          <span class="mas gris"></span>
          </div>
          </a> </div>
      </li>
      	
	

		  


<!--RECUPERACION DE CLAVES 3 -->
      
      <li class="lslide hvr-float-shadow" style="background-color: #fff;width: 233.5px; margin-right: 10px;">
        <div style="border: 1px solid rgba(0,0,0,.125);border-radius: .25rem;" class="card-box"> 
        <a data-csitio="Personas" data-cpieza="Promociones" data-cnombre="Recuperacion de claves" data-ctipo="Recuperacion de claves" data-cposicion="3" target="_self" href="/imagenes/_campanas/recuperacion-clave/index.asp"> 
		<img src="/imagenes/_campanas/recuperacion-clave/banner-recuperacion-claves.jpg" alt="Con estos simples pasos recupera tus claves" style="width:100%" title="Con estos simples pasos recupera tus claves">
          <div class="cont-card">
            <h6 style=" margin-top:20px;text-align:left;"><b style="color: #818181;"> M&aacute;s informaci&oacute;n aqu&iacute;</b></h6>
          <span class="mas gris"></span>
          </div>
          </a> </div>
      </li>
      			  

	
<!--MERCADO PYME 4 -->
      
      <li class="lslide hvr-float-shadow" style="background-color: #fff;width: 233.5px; margin-right: 10px;">
        <div style="border: 1px solid rgba(0,0,0,.125);border-radius: .25rem;" class="card-box"> 
        <a data-csitio="Personas" data-cpieza="Promociones" data-cnombre="Mercado_Pyme" data-ctipo="Mercado_Pyme_secundario" data-cposicion="4" target="_blank" href="https://mercadopyme.emprendebancoestado.cl/?utm_source=bancoestado.cl&utm_medium=banner&utm_campaign=mercadopyme_banner2dario_compradores_julio1&utm_content=compradores_julio1"> 
		<img src="/imagenes/_campanas/mercadopyme/mercadopyme_sec_julio.jpg" alt="Lo que buscas este invierno esta en MercadoPYME BancoEstado" style="width:100%" title="Este invierno lo vives mejor en MercadoPYME BancoEstado">
          <div class="cont-card">
            <h6 style=" margin-top:20px;text-align:left;"><b style="color: #818181;">Conoce todos sus productos aquí</b></h6>
          <span class="mas gris"></span>
          </div>
          </a> </div>
      </li>
      	  


<!--conoce CAJAVECINA 5 -->
      
      <li class="lslide hvr-float-shadow" style="background-color: #fff;width: 233.5px; margin-right: 10px;">
        <div style="border: 1px solid rgba(0,0,0,.125);border-radius: .25rem;" class="card-box"> 
        <a data-csitio="Personas" data-cpieza="Promociones" data-cnombre="CajaVecina" data-ctipo="CajaVecina_secundario" data-cposicion="5" target="_self" href="/imagenes/_campanas/cajavecina/cajavecina/index.asp"> 
		<img src="/imagenes/_campanas/cajavecina/36916_cv.jpg" alt="Conoce todo lo que puedes hacer en tu CajaVecina" style="width:100%" title="Conoce todo lo que puedes hacer en tu CajaVecina">
          <div class="cont-card">
            <h6 style=" margin-top:20px;text-align:left;"><b style="color: #818181;">M&aacute;s informaci&oacute;n aqu&iacute;</b></h6>
          <span class="mas gris"></span>
          </div>
          </a> </div>
      </li>
      




<!--DENUNCIO SINIESTRO 6 -->
      
      <li class="lslide hvr-float-shadow" style="background-color: #fff;width: 233.5px; margin-right: 10px;">
        <div style="border: 1px solid rgba(0,0,0,.125);border-radius: .25rem;" class="card-box"> 
        <a data-csitio="Personas" data-cpieza="Promociones" data-cnombre="Denuncio Siniestro" data-ctipo="Denuncio Siniestro" data-cposicion="6" target="_self" href="/imagenes/_campanas/seguros/siniestro.asp"> 
    <img src="/imagenes/_campanas/seguros/secundario-denuncio-siniestro.jpg" alt="Denuncio siniestro">
          <div class="cont-card">
            <h6 style=" margin-top:20px;text-align:left;"><b style="color: #818181;">Realiza tu denuncio aquí </b></h6>
          <span class="mas gris"></span>
          </div>
          </a> </div>
      </li>
             
		  
		  
		  
		  
		  
		  
<!--  /////////   OTROS BANNER   ///////  -->




<!-- GASCONNECT 7 -->
         
			  
  <!--TOOLMANIA DIA DEL PADRE 3 -->
      	    
      
    

     <!-- CONTRIBUCIONES-->
       

     
	<!-- JAT -->
      			

	<!-- PAT -->
      			  
		  

		
		<!-- 12 a 36 cuotas vehiculos -->
      		  

		  

	<!-- SOAP -->
      			  
		  
		  
		  
	
		
		
	      <!-- COLEGIATURA 2020-->
      		
		
	<!-- PUNTOS TODOSUMA 2020-->
      			
		  


		<!-- LIBRERIA NACIONAL-->
      	
		


		
	<!-- AVANCE EN CUOTAS 2020-->
      	
		
   
    </ul>
  </div>
</div>


<!--FIN DESARROLLO CAMPANAS HOME-->



  </div>
  </div>
  </div>
  
  
  	<!--  ///// INICIO SECTOR BANNER SECUNDARIO Y TEMAS DE INTERES  ///////  --->
    
    <div class="calugas-home">
      <div class="banner-descarga"> <!--banner para home--> 
  
     <!-- CajaVecina  SECUNDARIO WEB  
<a  href="/imagenes/nuevo_form/11838_quiero_ser_caja_vecina/solicitud.asp" target="_blank" data-csitio="Personas" data-cpieza="CajaVecina" data-cnombre="CajaVecina_octubre" data-ctipo="banner-home-web">
			<img src="/imagenes/_img/cajavecinaoctubre_2019.jpg" longdesc="/imagenes/nuevo_form/11838_quiero_ser_caja_vecina/solicitud.asp" alt="Únete a CajaVecina." > </a>-->
       
<!-- inicio app movil  SECUNDARIO WEB -->
<a  href="/imagenes/_personas/servicios/app-movil/descarga.asp" target="_self" data-csitio="Personas" data-cpieza="Digitalizacion" data-cnombre="banner-home-web" data-ctipo="banner-home-web">
<img src="/imagenes/_img/digitalizacion/sp_banner_app_home_generica.png" longdesc="/imagenes/_personas/home/default.asp" alt="El Banco en tus manos. Accede a tus cuentas d&oacute;nde y cu&aacute;ndo lo necesites con la App BancoEstado" > 
</a> 
		  
<!--a  href="https://www.bancoestado.cl/imagenes/nuevo_form/11838_quiero_ser_caja_vecina/solicitud.asp" target="_target" data-csitio="Personas" data-cpieza="Inscripcion-CuentaRUT" data-cnombre="banner-home-web" data-ctipo="banner-home-web">
<img src="/imagenes/_img/banner_cajavecina_nov2019.jpg" longdesc="/imagenes/_personas/home/default.asp" alt="Sé parte de la red CajaVecina, inscribete aquí" > 
</a> 		  
<fin app movil  SECUNDARIO WEB -->		  
		  
		  
		  
		  
		</div>
		

		
      <div class="sect-noticias"> 
        
        <!--INICIO TEMAS DE INTERES-->
<!--sect-noticias-->

<div class="sect-temas-interes">
  <h3><a href="/imagenes/_personas/noticias/noticias.asp">Temas de Inter&eacute;s</a></strong><span></span></h3>
</div>
<div class="be_field" be-itemtype="NoticiasListado" be-itemid="03" be-pageid="personas_home">
  <div id="carousel-vertical" class="wrapper-carousel-vertical">
    <div class="jcarousel bullet-red">
      <ul>
	    
        <!-- noticia 03 -->
        
        
        <li>
          <p class="date"></p>
          <div class="cont-items">
            <p><a href="/imagenes/_pdf2020/llamadolicitacionpublicaincendio_2020.pdf" onClick="ga('send','event','Personas', 'Temasdeinteres', 'licitacion');" title="Adjudicaci&oacute;n Licitaci&oacute;n P&uacute;blica" target="_blank">
			Llamado a Licitacion Publica de los Seguros Colectivos de Incendio y Coberturas Adicionales.</a></p>
          </div>
        </li>
        


<!-- Certificados Tributarios Fondos Mutuos y APV-->
        


        <!-- Subsidio Habitacional 2020 -->
        
			
			
			
			
		<!-- Modificaci�n de tasas-->
        
        <li>
          <p class="date"></p>
          <div class="cont-items">
            <p><a href="/imagenes/_campanas/ahorro-informacion/tasas-de-ahorro.asp" onClick="ga('send','event','Personas', 'Temasdeinteres', 'modificacion_tasas_interes');" title="Modificaci&oacute;n Tasas de Inter&eacute;s Cuentas de Ahorro" target="_self">
             Modificaci&oacute;n Tasas de Inter&eacute;s Cuentas de Ahorro.</a></p>
          </div>
        </li>
        


		<!-- ley 21.167 pago de linea de credito-->
        		  
		  
		<!-- sucursales disponibles-->
        
        <li>
          <p class="date"></p>
          <div class="cont-items">
            <p><a href="/imagenes/_campanas/contingencia/index.asp" onClick="ga('send','event','Personas', 'Temasdeinteres', 'sucursalesdisponibles');" title="Informaci&oacute;n sobre sucursales disponibles en todo el pa&iacute;s." target="_self">
             Informaci&oacute;n sobre sucursales disponibles en todo el pa&iacute;s.</a></p>
          </div>
        </li>
        
		  

		  <!-- nuevas tarifas Ahorro-->
        
        
        <!-- noticia 03 -->
        
        <!-- mantencion -->
        
        
        <!-- noticia 03 -->
	  
	  
        

        
        <!-- noticia 03 -->
        
        
        
        <!-- noticia 05 -->
        
        
        <!-- noticia 04 -->
        
        
        <!-- noticia 03 -->
        
        <!-- fin noticia 03 --> 
        
        <!-- noticia 03 -->
        
        <!-- fin noticia 03 --> 
        
        <!-- noticia 03 -->
        
        <!-- fin noticia 03 --> 
        
        <!-- noticia 02 -->
        
        <!-- fin noticia 02 --> 
        
        <!-- noticia 03 
        
        <!-- fin noticia 03 --> 
        
        <!-- noticia 03 -->
        
        <!-- fin noticia 03 --> 
        
        <!-- noticia 22 -->
        
        <!-- fin noticia 22 --> 
        
        <!-- noticia 17 -->
        
        <!-- fin noticia 17 --> 
        
        <!-- noticia 15 -->
        
        <!-- fin noticia 15 --> 
        
        <!-- noticia 13 -->
        
        <!-- fin noticia 13 --> 
        <!-- noticia 12 -->
        
        <!-- fin noticia 12 --> 
        <!-- noticia 11 -->
        
        <!-- fin noticia 11 --> 
        
        <!-- noticia 10 -->
        
        <!-- fin noticia 10 --> 
        
        <!-- noticia 07 -->
        
        <!-- fin noticia 07 --> 
        
        <!-- noticia 06 -->
        
        <!-- fin noticia 06 --> 
        
        <!-- noticia 05 -->
        
        <!-- fin noticia 05 --> 
        
        <!-- noticia 01 -->
        
        <!-- fin noticia 01 -->
        
      </ul>
    </div>
    <a data-jcarouselcontrol="true" href="javascript:;" class="jcarousel-control-prev inactive">&lt;</a><a data-jcarouselcontrol="true" href="javascript:;" class="jcarousel-control-next ">&gt;</a></div>
</div>
</div>
<!--Fin sect-noticias--> 

<!--FIN TEMAS DE INTERES--> 
 
      
    </div>
  </div>
  
  
  <!--inicio banner SECUNDARIO MOVIL -->
   <div class="banerPromocionEspecial"> <a  href="/imagenes/_personas/servicios/app-movil/descarga.asp" target="_self" data-csitio="Personas" data-cpieza="Digitalizacion" data-cnombre="banner-home-app" data-ctipo="banner-home-app"> <img src="/imagenes/_img/digitalizacion/sp_banner_app_home_generica.png" longdesc="/imagenes/_personas/home/default.asp" alt="El Banco en tus manos. Accede a tus cuentas d&oacute;nde y cu&aacute;ndo lo necesites con la App BancoEstado" > </a> </div>
    <!--fin banner movil-->
  
   <!--inicio banner SECUNDARIO MOVIL 
      <div class="banerPromocionEspecial"> 
    <a  href="/imagenes/nuevo_form/11838_quiero_ser_caja_vecina/solicitud.asp" target="_blank" data-csitio="Personas" data-cpieza="CajaVecina" data-cnombre="CajaVecina_octubre" data-ctipo="banner-home-app"> 
    <img src="/imagenes/_img/banner_cajavecina_nov2019.jpg" longdesc="/imagenes/_personas/home/default.asp" alt="Únete a CajaVecina."/>
    </a> </div>
   
   
 <fin banner movil -->
  
   <!--  /////  FIN SECTOR BANNER SECUNDARIO Y TEMAS DE INTERES  ///////  -->



  
  
  <div id="contenedor"><!-- contenedor -->

    <div id="wrap-productos">
    
    <!-- inicio que a ti no te pase -->
		<!-- BANNER Sabes cómo detectar un fraude -->




<!-- BANNER Sabes cómo detectar un fraude -->


<!-- BANNER que a ti no te pase cyberday -->




	
	
	
<!-- BANNER Protege tu nueva tarjeta CuentaRUT -->


<br />
<br />

	<!-- fin que a ti no te pase -->   
    
    
      <div class="title-line">
        <h2><span>Elige tus sue&ntilde;os</span></h2>
        <h3>nosotros te ayudamos</h3>
        <p class="hidden">Elige tus sueños, nosotros de ayudamos</p>
      </div>
      <!--
      <h3 class="tituloslanding">  <span style=" font-size: 2.7rem;font-weight: normal;color:#676666;">Beneficios del mes</span></h3>-->
    <div class="grid">
        <div id="section-productos" class="col-9"> 
          <!--col-9-->
          <div class="grid"> 
            <!--grid-->
            <div class="col-6"> 
              <!--col-6-->
              <div class="article-ico bg-iconos-seccion iconoHome1"> 
                <!-- article-ico -->
                <h3>Cumplir mis proyectos</h3>
                <div class="be_field" be-itemtype="link" be-itemid="04" be-pageid="personas_home"><a class="" target="_self" href="/imagenes/_personas/productos/creditos/credito-personal.asp" onclick="ga('send','event','Personas', 'Elige-tus-sueños_Cumplir', 'CreditoPersonal');" title="Crédito Personal"><span>Crédito Personal</span></a></div>
                ,
                <div class="be_field" be-itemtype="link" be-itemid="05" be-pageid="personas_home"><a target="_self" href="/imagenes/_personas/productos/creditos/creditos-educacion/creditos-educacion.asp" onclick="ga('send','event','Personas', 'Elige-tus-sueños_Cumplir', 'Educacion');" title="Educación"><span>Educación</span></a></div>
                ,
                <div class="be_field" be-itemtype="link" be-itemid="06" be-pageid="personas_home"><a target="_blank" href="https://emprendebancoestado.cl/medidasmipyme" onclick="ga('send','event','Personas', 'Elige-tus-sueños_Cumplir', 'Emprender');" title="Emprender"><span>Emprender</span></a></div>
                
                
                
                
                
              </div>
              <!-- Fin article-ico --> 
            </div>
            
            <div class="col-6"> 
              <!--col-6-->
              <div class="article-ico bg-iconos-seccion iconoHome19"> 
                <!-- article-ico -->
                <h3>Elige tu nuevo Hogar</h3>
                <div class="be_field" be-itemtype="link" be-itemid="20" be-pageid="Personas"><a target="_blank" href="https://bancoestado.enlaceinmobiliario.cl/index.php?utm_source=bancoestado&utm_medium=aus&utm_content=enlaces&utm_campaign=home-hipotecario" onclick="ga('send','event','Personas', 'Elige-tus-sueños_Cumplir', 'Portal_Inmobiliario');" title="Portal Inmobiliario"><span>Portal Inmobiliario</span></a></div>
            , 
               <div class="be_field" be-itemtype="link" be-itemid="06" be-pageid="personas_home"><a target="_self" href="/imagenes/_personas/productos/creditos/creditos-hipotecarios/creditos-hipotecarios.asp" onclick="ga('send','event','Personas', 'Elige-tus-sueños_Cumplir', 'Hipotecario');" title="Hipotecario"><span>Hipotecario</span></a></div>
			   
			   <!--<div class="be_field" be-itemtype="link" be-itemid="06" be-pageid="personas_home"><a target="_self" href="/imagenes/_campanas/subsidio-habitacional/index.asp" onclick="ga('send','event','Personas', 'Obten-Aqui-tu-Precalificacion-al-Subsidio-DS01', 'PrecalificacionSubsidio');" title="Obt&eacute;n Aqu&iacute;  tu Precalificaci&oacute;n al Subsidio DS01"><span>Obt&eacute;n Aqu&iacute;  tu Precalificaci&oacute;n al Subsidio DS01</span></a></div>-->
			   
			   
               <!--
               ,
               <div class="be_field" be-itemtype="link" be-itemid="06" be-pageid="personas_home"><a target="_self" href="/imagenes/_personas/noticias/detalle/obten-tu-precalificacion.asp" onclick="ga('send','event','Personas', 'Elige-tus-sueños_Cumplir', 'PrecalificacionSubsidio');" title="Obtén Aquí  tu Precalificación al Subsidio DS01"><span>Obtén Aquí tu Precalificación al Subsidio DS01</span></a></div>
                -->
                <!-- RUTA DE LA CULTURA NO BORRAR <div class="be_field" be-itemtype="link" be-itemid="19" be-pageid="Personas"><a target="_self" href="/imagenes/_personas/cultura/ruta-de-la-cultura.asp " onclick="ga('send','event','Personas','Ruta_de_la_Cultura');" title="Ruta de la Cultura"><span>Ruta de la Cultura</span></a></div>--> 
                
              </div>
            </div>  
            

          </div>
          <!--Fin grid-->
          <div class="grid"> 
            <!--grid-->
            <div class="col-6"> 
              <!--col-6-->
              <div class="article-ico bg-iconos-seccion iconoHome2"> 
                <!-- article-ico -->
                <h3>Administrar mi dinero </h3>
                <div class="be_field" be-itemtype="link" be-itemid="07" be-pageid="personas_home"><a class="" target="_self" href="/imagenes/_personas/productos/cuentas/plan-cuenta-corriente.asp" onclick="ga('send','event','Personas', 'Elige-tus-sueños_Administrar', 'PlanCuentaCorriente');" title="Plan Cuenta Corriente"><span>Plan Cuenta Corriente</span></a></div>
                ,
                <div class="be_field" be-itemtype="link" be-itemid="08" be-pageid="personas_home"><a class="" target="_self" href="/imagenes/_personas/productos/cuentas/cuenta-rut.asp" onclick="ga('send','event','Personas', 'Elige-tus-sueños_Administrar', 'CuentaRUT');" title="CuentaRUT"><span>CuentaRUT</span></a></div>
                y
                <div class="be_field" be-itemtype="link" be-itemid="09" be-pageid="personas_home"><a class="" target="_self" href="/imagenes/_personas/productos/cuentas/chequera-electronica.asp" onclick="ga('send','event','Personas', 'Elige-tus-sueños_Administrar', 'ChequeraElectronica');" title="Chequera Electrónica"><span>Chequera Electrónica</span></a></div>
              </div>
              <!-- Fin article-ico --> 
            </div><div class="col-6"> 
              <!--col-6-->
              <div class="article-ico bg-iconos-seccion iconoHome3"> 
                <!-- article-ico -->
                <h3>Facilitar mis compras</h3>
                <div class="be_field" be-itemtype="link" be-itemid="10" be-pageid="personas_home"><a class="" target="_self" href="/imagenes/_personas/productos/tarjetas-de-credito/tarjetas-de-credito.asp" onclick="ga('send','event','Personas', 'Elige-tus-sueños_Facilitar', 'TarjetasdeCredito');" title="Tarjetas de Crédito"><span>Tarjetas de Crédito</span></a></div>
              </div>
              <!-- Fin article-ico --> 
            </div>
            <!--Fin col-6-->
            
            <!--Fin col-6--> 
          </div>
          <!--Fin grid-->
          <div class="grid"> 
            <!--grid-->
            <div class="col-6"> 
              <!--col-6-->
              
              <div class="article-ico bg-iconos-seccion iconoHome4"> 
                <!-- article-ico -->
                <h3>Ahorrar e invertir mi dinero</h3>
                <div class="be_field" be-itemtype="link" be-itemid="11" be-pageid="personas_home"><a class="" target="_self" href="/imagenes/_personas/productos/ahorro-e-inversiones/cuenta-ahorro/cuenta-ahorro.asp" onclick="ga('send','event','Personas', 'Elige-tus-sueños_Ahorrar', 'CuentasdeAhorro');" title="Cuentas de Ahorro"><span>Cuentas de Ahorro</span></a></div>
                ,
                <div class="be_field" be-itemtype="link" be-itemid="12" be-pageid="personas_home"><a target="_self" href="/imagenes/_personas/productos/ahorro-e-inversiones/productos/apv.asp" onclick="ga('send','event','Personas', 'Elige-tus-sueños_Ahorrar', 'APV');" title="APV"><span>APV</span></a></div>
                ,
                <div class="be_field" be-itemtype="link" be-itemid="13" be-pageid="personas_home"><a target="_self" href="/imagenes/_personas/productos/ahorro-e-inversiones/productos/depositos-a-plazo.asp" onclick="ga('send','event','Personas', 'Elige-tus-sueños_Ahorrar', 'DepositosaPlazo');" title="Depósitos a Plazo"><span>Depósitos a Plazo</span></a></div>
                ,
                <div class="be_field" be-itemtype="link" be-itemid="11" be-pageid="personas_home"><a class="" target="_self" href="/imagenes/_corredores-bolsa/home/default.asp" onclick="ga('send','event','Personas', 'Elige-tus-sueños_Ahorrar', 'Acciones');" title="Acciones"><span>Compra y venta de Acciones</span></a></div>
                y
                <div class="be_field" be-itemtype="link" be-itemid="14" be-pageid="personas_home"><a class="" target="_self" href="/imagenes/_personas/productos/ahorro-e-inversiones/fondos-mutuos/fondos-mutuos.asp" onclick="ga('send','event','Personas', 'Elige-tus-sueños_Ahorrar', 'FondosMutuos');" title="Fondos Mutuos"><span>Fondos Mutuos</span></a></div>
              </div>
              <!-- Fin article-ico --> 
            </div>
            <!--Fin col-6-->
            <div class="col-6"> 
              <!--col-6--> 
              
              <!-- article-ico --> 
              <!--<h3>Cuidar mi familia y mis bienes</h3>
                <div class="be_field" be-itemtype="link" be-itemid="15" be-pageid="personas_home"><a class="" target="_self" href="/imagenes/_personas/productos/seguros/familia/familia.asp" onclick="ga('send','event','Personas', 'Elige-tus-sueños_Cuidar', 'Seguros-familia');" title="Seguros para Familia"><span>Seguros para Familia</span></a></div>

                ,
                <div class="be_field" be-itemtype="link" be-itemid="16" be-pageid="personas_home"><a target="_self" href="/imagenes/_personas/productos/seguros/bienes/bienes.asp" onclick="ga('send','event','Personas', 'Elige-tus-sueños_Cuidar', 'bienes');" title="Bienes"><span>Bienes</span></a></div>
                y
                <div class="be_field" be-itemtype="link" be-itemid="17" be-pageid="personas_home"><a class="" target="_self" href="/imagenes/_personas/productos/seguros/tarjetas-y-cuentas/tarjetas-y-cuentas.asp" onclick="ga('send','event','Personas', 'Elige-tus-sueños_Cuidar', 'TarjetasyCuentas');" title="Tarjetas y Cuentas"><span>Tarjetas y Cuentas</span></a></div>-->
              
              <div class="article-ico bg-iconos-seccion iconoHome18"> 
                <!-- article-ico -->
                <h3>Seguros</h3>
                <div class="be_field" be-itemtype="link" be-itemid="19" be-pageid="Personas"><a target="_self" href="/imagenes/_personas/productos/seguros/familia/familia.asp" onclick="ga('send','event','Personas','Seguros_Eligetussuenos','Seguros_para_Familia');" title="Seguros para Familia"><span>Seguros para Familia</span></a></div>
                ,
                <div class="be_field" be-itemtype="link" be-itemid="18" be-pageid="Personas"><a target="_self" href="/imagenes/_personas/productos/seguros/bienes/bienes.asp&#10;" onclick="ga('send','event','Personas','Seguros_Eligetussuenos','Seguros_para_Bienes');" title="Seguros para Bienes"><span>Seguros para Bienes</span></a></div>
                ,
                <div class="be_field" be-itemtype="link" be-itemid="19" be-pageid="Personas"><a target="_self" href="/imagenes/_personas/productos/seguros/tarjetas-y-cuentas/tarjetas-y-cuentas.asp" onclick="ga('send','event','Personas','Seguros_Eligetussuenos','Seguros_para_Tarjetas_y_Cuentas');" title="Seguros para Tarjetas y Cuentas"><span>Seguros para Tarjetas y Cuentas</span></a></div>
                ,
                <div class="be_field" be-itemtype="link" be-itemid="19" be-pageid="Personas"><a target="_self" href="/imagenes/_campanas/seguros/siniestro.asp" onclick="ga('send','event','Personas','Seguros_Eligetussuenos','Denuncio_Siniestro_Asociados_a_Créditos');" title="Denuncio de Siniestro Asociados a Créditos"><span>Denuncio de Siniestros</span></a></div>
                <!-- RUTA DE LA CULTURA NO BORRAR <div class="be_field" be-itemtype="link" be-itemid="19" be-pageid="Personas"><a target="_self" href="/imagenes/_personas/cultura/ruta-de-la-cultura.asp " onclick="ga('send','event','Personas','Ruta_de_la_Cultura');" title="Ruta de la Cultura"><span>Ruta de la Cultura</span></a></div>--> 
              </div>
              <!-- Fin article-ico --> 
            </div>
            <!--Fin col-6--> 
          </div>



          <!--Fin grid-->
          <div class="grid"> 
            <!--grid-->
            <div class="col-6"> 
			
			<div class="article-ico bg-iconos-seccion iconoHome6"> 
                <!-- article-ico -->
                <h3>Conoce Nuestro Museo</h3>
                <div class="be_field" be-itemtype="link" be-itemid="18" be-pageid="personas_home"><a class="" target="_self" href="/imagenes/_campanas/museo-del-ahorro/index.asp" onclick="ga('send','event','Personas', 'Elige-tus-sueños_Conoce', 'Museo del Ahorro');" title="¡Descubre el Museo del Ahorro!"><span> ¡Descubre el Museo del Ahorro!. </span></a></div>
        </div>
			
			
			
              <!--col-6-->
              <!--<div class="article-ico bg-iconos-seccion iconoHome6"> 
                           <h3>Conoce Tu Banco</h3>
                <div class="be_field" be-itemtype="link" be-itemid="18" be-pageid="personas_home"><a class="" target="_self" href="/imagenes/_personas/conoce-tu-banco.asp" onclick="ga('send','event','Personas', 'Elige-tus-sueños_Conoce', 'Conoce tu Banco');" title="Porque queremos ayudarte a hacer tu vida más simple, revisa los siguientes videos con los principales servicios digitales. "><span> Porque queremos ayudarte a hacer tu vida más simple, revisa los siguientes videos con los principales servicios digitales. </span></a></div>
              </div> -->
              <!-- Fin article-ico --> 
            </div>
            
           
                       <!--Fin col-6-->
 <div class="col-6"> 
			
			<div class="article-ico bg-iconos-seccion iconoHome20"> 
                <!-- article-ico -->
                <h3>Trabaja en BancoEstado</h3>
                <div class="be_field" be-itemtype="link" be-itemid="18" be-pageid="personas_home"><a class="" target="_self" href="https://bancoestado.trabajando.cl/" onclick="ga('send','event','Personas', 'Elige-tus-sueños_Conoce', 'Museo del Ahorro');" title="Forma parte de nuestro equipo"><span>Forma parte de nuestro equipo</span></a></div>
              </div>

              <!-- Fin article-ico --> 
            </div> 
            </div>

<!--<div class="grid"> 

           
            <div class="col-6"> 
             
         <div class="article-ico bg-iconos-seccion iconoHome7"> 
               
         <h3>Más BancoEstado</h3>
                <div class="be_field" be-itemtype="link" be-itemid="19" be-pageid="Personas"><a target="_blank" href="http://huellasocialbancoestado.cl/?utm_source=bancoestado.cl&amp;utm_medium=referral&amp;utm_campaign=huellasocial&amp;utm_content=Caluga-Home-Personas" onclick="ga('send','event','Personas','MasBancoEstado','Huella_Social');" title="Huella Social"><span>Huella Social</span></a></div>
                ,
                <div class="be_field" be-itemtype="link" be-itemid="18" be-pageid="Personas"><a target="_self" href="/imagenes/_campanas/portal-donaciones/index.asp&#10;" onclick="ga('send','event','Personas','MasBancoEstado','Tu-eliges_Donar');" title="Portal Donaciones"><span>Portal Donaciones</span></a></div>
            
                              
                
                
                RUTA DE LA CULTURA NO BORRAR <div class="be_field" be-itemtype="link" be-itemid="19" be-pageid="Personas"><a target="_self" href="/imagenes/_personas/cultura/ruta-de-la-cultura.asp " onclick="ga('send','event','Personas','Ruta_de_la_Cultura');" title="Ruta de la Cultura"><span>Ruta de la Cultura</span></a></div>
              </div>
            </div>
          
           
           
           
           
           
           
          </div>
          Fin grid--> 
          
          
        </div>
        <!--Fin col-9-->
        
        <div class="col-3">
          <div class="article-img hazte-Cliente twitter"> <a class="twitter-timeline twitter-timeline-error" data-lang="es" data-chrome="nofooter" data-width="100%" data-height="500" data-dnt="true" data-theme="light" href="https://twitter.com/bancoestado" data-twitter-extracted-i1547566079733913386="true">@bancoestado</a> 
            <script async="async" src="//platform.twitter.com/widgets.js" charset="utf-8"></script> 
          </div>
          <div class="article-img hazte-Cliente desktop2"> 
            <!-- <a href="/imagenes/_personas/hazte-cliente/default.asp" title="Hazte Cliente"> <img src="/imagenes/_img/personas/home_hazte_cliente_caluga_personas.jpg" alt="Home hazte cliente. Gente caminando por la calle." />
						<h3>Somos m&aacute;s de 8 millones de chilenos</h3>-->
            <p>Forma parte de BancoEstado con algunos de nuestros productos.</p>
             <a href="/imagenes/_personas/hazte-cliente/default.asp" onclick="ga('send','event','Personas', 'Hazte Cliente', 'boton_HazteCliente');" class="accion enfatizado" title="Hazte Cliente">Hazte Cliente</a> </div>
        </div>
      </div>
    <!--Fin productos-->
    <div id="productos2"><!--productos-->
      <div class="title-line">
        <h2>Nos importa</h2>
        <h3><span>que tu vida sea mejor</span></h3>
        <p class="hidden">Nos importa que tu vida sea mejor</p>
      </div>
      
      <!--<h3 class="tituloslanding">  <span style=" font-size: 2.7rem;font-weight: normal;color:#676666;">Elige tus sueños nosotros te ayudamos</span></h3>-->
      <div class="grid"> 
        
        <!--RUTA DE LA CULTURA OCULTO TEMPORALMENTE N0 BORRAR--> 
        <!-- <div class="col-4"> <a class="seccionCalugas" href="/imagenes/_personas/cultura/ruta-de-la-cultura.asp" target="_self" data-csitio="Personas" data-cpieza="caluga-nosimporta" data-cnombre="LaRutadelaCultura" data-ctipo="LaRutadelaCultura" title="La Ruta de la Cultura">
          <h4 class="subrrayado">La Ruta de la Cultura <span></span></h4>
          <img src="/imagenes/_img/nos_importa_ruta.jpg" alt="La Ruta de la Cultura" /> <span class="mas naranjo"></span> <span class="seccionCalugasHover"> Obtén descuentos en espacios culturales de Santiago pagando en forma presencial con CuentaRUT.</span> </a> </div>-->
        <div class="col-3"> <a class="seccionCalugas" href="/imagenes/_personas/centro-de-ayuda.asp" target="_self" data-csitio="Personas" data-cpieza="caluga-nosimporta" data-cnombre="CentrodeAyuda" data-ctipo="CentrodeAyuda" title="Centro de Ayuda">
          <h4 class="subrrayado">Centro de Ayuda<span class="rojoOscuro"></span></h4>
          <img src="/imagenes/_img/nos_importa_10.jpg" alt="Centro de Ayuda"  /> <span class="mas naranjo"></span> <span class="seccionCalugasHover">Estamos contigo siempre</span> </a> </div>
          
        <div class="col-3" > <a class="seccionCalugas" href="/imagenes/queatinotepase/index.html" target="_blank" data-csitio="Personas" data-cpieza="caluga-nosimporta" data-cnombre="Seguridadparati" data-ctipo="Seguridadparati" title="Seguridad para ti">
          <h4 class="subrrayado txtLargo" >Recomendaciones 
de Seguridad <br />Que a ti no te pase

 <span class="morado"></span></h4>
          <img src="/imagenes/_img/nos_importa_1.jpg" alt="Seguridad para ti"  /> <span class="mas morado"></span> <span class="seccionCalugasHover"> Protégete de los fraudes bancarios.</span> </a> </div>
          
        <div class="col-3"> <a class="seccionCalugas" href="/imagenes/_personas/productos/chilenos-en-el-exterior/chilenos-en-el-exterior.asp" target="_self" data-csitio="Personas" data-cpieza="caluga-nosimporta" data-cnombre="ChilenosExterior" data-ctipo="ChilenosExterior" title="Chilenos en el Exterior">
          <h4 class="subrrayado">Chilenos en el Exterior<span class="naranjoOscuro"></span></h4>
          <img src="/imagenes/_img/nos_importa_11.jpg" alt="Chilenos en el Exterior"  /> <span class="mas naranjoOscuro"></span> <span class="seccionCalugasHover">Conoce los servicios que BancoEstado tiene para ti, que vives en el extranjero.</span> </a> </div>
       
        <div class="col-3"> <a class="seccionCalugas" target="_self" href="/imagenes/_campanas/portal-donaciones/index.asp" data-csitio="Personas" data-cpieza="caluga-nosimporta" data-cnombre="PortalDonaciones" data-ctipo="PortalDonaciones" title="Portal Donaciones">
          <h4 class="subrrayado">Portal Donaciones<span class="azul"></span></h4>
          <img src="/imagenes/_img/nos_importa_5.jpg" alt="Portal Donaciones"  /> <span class="mas azul"></span> <span class="seccionCalugasHover">Un banco comprometido tiene clientes comprometidos.</span> </a> </div>
      </div>
      <div class="grid">
     <div class="col-3"> <a class="seccionCalugas" href="/imagenes/todosuma/index.asp"  target="_blank" data-csitio="Personas" data-cpieza="caluga-nosimporta" data-cnombre="TodoSuma" data-ctipo="TodoSuma" title="TodoSuma">
          <h4 class="subrrayado">TodoSuma<span class="rojo"></span></h4>
          <img src="/imagenes/_img/nos_importa_3.jpg" alt="TodoSuma"  /> <span class="mas rojo"></span> <span class="seccionCalugasHover">Conoce tus Beneficios</span> </a> </div>
        <div class="col-3"> <a class="seccionCalugas" href="http://www.enfacilyenchileno.cl?utm_source=bancoestado&utm_medium=cpc&utm_content=calugaweb&utm_campaign=01_2016_enfacilyenchileno" target="_blank" data-csitio="Personas" data-cpieza="caluga-nosimporta" data-cnombre="EnFacilyenChileno" data-ctipo="EnFacilyenChileno" title="En Fácil y en Chileno">
          <h4 class="subrrayado">En Fácil y en Chileno <span></span></h4>
          <img src="/imagenes/_img/nos_importa_4.jpg" alt="En Fácil y en Chileno"  /> <span class="mas naranjo"></span> <span class="seccionCalugasHover">El programa que te enseña a manejar mejor tu plata.</span> </a> </div>
<!--huellasocial.-->
 <div class="col-3"> <a class="seccionCalugas" href="http://huellasocialbancoestado.cl?utm_source=bancoestado&utm_medium=cpc&utm_content=calugaweb&utm_campaign=huellasocial" target="_blank" data-csitio="Personas" data-cpieza="caluga-nosimporta" data-cnombre="HuellaSocial" data-ctipo="HuellaSocial" title="Huella Social">
          <h4 class="subrrayado">Huella Social<span class="azul"></span></h4>
          <img src="/imagenes/_img/nos_importa_6.jpg" alt="Huella Social"  /> <span class="mas azul"></span> <span class="seccionCalugasHover">Existimos para que Chile
          sea un país más inclusivo.</span> </a> </div>

        <div class="col-3"> <a class="seccionCalugas" href="/imagenes/_personas/servicios/app-movil/descarga.asp"  target="_self" data-csitio="Personas" data-cpieza="caluga-nosimporta" data-cnombre="Descarga APP" data-ctipo="Descarga APP" title="Usa la App BancoEstado donde y cuando lo necesites">
          <h4 class="subrrayado txtLargo">Usa la App BancoEstado donde y cuando lo necesites<span class="morado"></span></h4>
          <img src="/imagenes/_img/nos_importa_15.jpg" alt="Usa la App BancoEstado donde y cuando lo necesites"  /> <span class="mas morado"></span> <span class="seccionCalugasHover"> Revisa tu Saldo sin costo
y las veces que quieras
con la App BancoEstado
</span> </a> </div>
      </div>
      <div class="clearboth"></div>
    </div>
    <!--Fin productos--> 
    
  </div>
  <!-- Fin contenedor --> 
</div>
<!-- Fin destacados-home --> 




<div id="footer"> 
  <!-- footer --> 
  <span class="bg-foo"></span>
  <div class="content">
    <div class="grid">
      <div class="col-5">
        <div class="left-foo clearfix"> <img class="isotipo-foo" src="/imagenes/_img/isotipo-footer.jpg" longdesc="/imagenes/_personas/home/default.asp" alt="Banco Estado"/>
          <ul>
            <li><a href="/imagenes/_personas/home/default.asp"  onClick="ga('send','event','Personas', 'footer', 'personas');" title="Personas">Personas</a></li>
            <li><a href="/imagenes/_microempresas/home/default.asp"  onClick="ga('send','event','Personas', 'footer', 'microempresas');" title="Microempresas">Microempresas</a></li>
            <li><a href="/imagenes/_pequenas-empresas/home/default.asp"  onClick="ga('send','event','Personas', 'footer', 'pequenasempresas');" title="Peque&ntilde;as Empresas">Peque&ntilde;as Empresas</a></li>
            <li><a href="/imagenes/empresas2008/Nueva_home_Empresas/index.html"  onClick="ga('send','event','Personas', 'footer', 'empresas');" title="Empresas" target="_blank">Empresas</a></li>
            <li><a href="/imagenes/institucionespublicas2008/Nueva_Home_Instituciones/index.html" onClick="ga('send','event','Personas', 'footer', 'institucionespublicas');" title="Instituciones P&uacute;blicas" target="_blank">Instituciones P&uacute;blicas</a></li>
         <li><a target="_blank" href="https://compraqui.cl/" onClick="ga('send','event','Personas', 'footer', 'Compraqui');" title="Compraquí">Compraquí</a></li>

          </ul>
          <ul>
            <li><a href="/imagenes/institucionespublicas2008/Acceso_Isfl/index.html" onClick="ga('send','event','Personas', 'footer', 'Org.delaSociedadCivil');" title="Org. de la Sociedad Civil" target="_blank">Org. de la Sociedad Civil</a></li>
            <li><a href="http://www.corporativo.bancoestado.cl/" onClick="ga('send','event','Personas', 'footer', 'corporativo');" title="Corporativo" target="_blank">Corporativo</a></li>
            <li><a href="http://www.corporativo.bancoestado.cl/investor-relations/home-investor" onClick="ga('send','event','Personas', 'footer', 'InvestorRelations');" title="Investor Relations" target="_blank">Investor Relations</a></li>
            <li><a href="http://www.beneficiostarjetas.cl/" onClick="ga('send','event','Personas', 'footer', 'beneficios');" title="Beneficios" target="_blank">Beneficios</a></li>
            <li><a  href="http://huellasocialbancoestado.cl/?utm_source=bancoestado.cl&utm_medium=referral&utm_campaign=huellasocial&utm_content=Caluga-Home-Personas" onClick="ga('send','event','Personas', 'footer', 'Huella Social');" title="Huella Social" target="_blank">Huella Social</a></li>
               <li><a href="https://www.corporativo.bancoestado.cl/acerca-de-bancoestado/responsabilidad-social/sostenibilidad" onClick="ga('send','event','Personas', 'footer', 'Sostenibilidad');" title="Sostenibilidad" target="_blank">Sostenibilidad</a></li>

            <li style="color: #50555C;background: none;">rev.{version}</li>
          </ul>
        </div>
      </div>
      <div class="col-7">
        <div class="right-foo clearfix">
          <div class="fono-info"><a target="_self" data-csitio="Personas" data-cpieza="footer" data-cnombre="Centro de ayuda" data-ctipo="Centro de ayuda" href="/imagenes/_personas/centro-de-ayuda.asp"><span><span class="icon-centro-ayuda"></span>Centro de Ayuda</span></a></div>
          <div class="sociales-foo"> <span>Respondemos tus dudas</span>
            <ul>
              <li><a class="tw" href="https://twitter.com/BancoEstado" onClick="ga('send','event','Personas', 'footer', 'Twitter');" title="Twitter" target="_blank">Twitter</a></li>
              <li><a class="fb" href="https://www.facebook.com/BancoEstado" onClick="ga('send','event','Personas', 'footer', 'Facebook');" title="Facebook" target="_blank">Facebook</a></li>
            </ul>
          </div>
          <ul>
            <li><a href="https://www.bancoestado.cl/imagenes/redatencion/Sucursales2.asp?measure=850x610" onClick="ga('send','event','Personas', 'footer', 'redatencion');" title="Red de Atenci&oacute;n" target="_blank">Red de Atenci&oacute;n</a></li>
            <li><a href="/imagenes/_personas/centro-de-ayuda.asp" onClick="ga('send','event','Personas', 'footer', 'contacto');" title="Contacto" target="_self">Cont&aacute;ctanos</a></li>
            <!--<li><a href="/83617C429A994E009BA0B6DFB9916156/3C6EFABAC12E4026A575D4E077B173BC/articulo/12697.asp" target="_blank" title="Emergencias">Emergencias</a></li>-->
            <li><a href="/imagenes/_personas/emergencias/default.asp" onClick="ga('send','event','Personas', 'footer', 'emergencias');" title="Emergencias">Emergencias</a></li>
            <li><a href="/imagenes/_personas/indicadores-economicos/default.asp"  onClick="ga('send','event','Personas', 'footer', 'indicadores');" title="Indicadores Económicos">Indicadores Econ&oacute;micos</a></li>
            <li><a href="/imagenes/_personas/tarifas/default.asp" onClick="ga('send','event','Personas', 'footer', 'tarifas');" title="Tarifas">Tarifas</a></li>
            <li><a href="/imagenes/_personas/bases-y-concursos/bases-y-concursos.asp" onClick="ga('send','event','Personas', 'footer', 'basesyconcursos');" title="Bases y concursos">Bases y concursos</a></li><!-- <li><a href="http://www.cinebancoestado.cl/" onClick="ga('send','event','Personas', 'footer', 'ProgramaCineChileno');" title="Enlace a Cine Chileno"  target="_blank">Programa Cine Chileno</a></li>-->
            <li><a href="https://www.bancoestado.cl/bancoestado/datos_efactura.asp" onClick="ga('send','event','Personas', 'footer', 'BoletasyFacturas');" title="Boletas y Facturas" target="_blank">Boletas y Facturas</a></li>
            <li><a href="/imagenes/_personas/servicios/propiedades.asp" onClick="ga('send','event','Personas', 'footer', 'PropiedadesenRemate');" title="Propiedades en Remate">Propiedades en Remate</a></li>
            <!--li><a href="/imagenes/_personas/beco.asp" onClick="ga('send','event','Personas', 'footer', 'Cobranzas');" title="BancoEstado Cobranzas">Cobranzas</a></li--> 
            <!--<li><a href="javascript:;" title="Bases y concursos">Consejos de Seguridad</a></li>-->
            <li><a href="/imagenes/_personas/mapa-de-sitio/default.asp" onClick="ga('send','event','Personas', 'footer', 'MapaSitioPersonas');" title="Mapa de sitio">Mapa de sitio</a></li>
          </ul>
          <div class="sellos"><img src="/imagenes/_img/sellos-premios-byn.gif" longdesc="/imagenes/_personas/productos/cuentas/cuenta-rut-home.asp" alt="Sellos Premios BancoEstado" /></div>
          <div class="legal"> <img class="logo-defensoria" src="/imagenes/_img/logo-defensoria-cliente.jpg" longdesc="/imagenes/_personas/home/default.asp" alt="Defensor&iacute;a del Cliente" /><br>
            <p><a href="/imagenes/_personas/politica-de-privacidad-y-uso.asp" onClick="ga('send','event','Personas', 'footer', 'PoliticaPrivacidad');" title="Pol&iacute;tica de Privacidad y Uso">Pol&iacute;tica de Privacidad y Uso</a>. <a href="http://www.defensoriadelclientedeabif.cl" onClick="ga('send','event','Personas', 'footer', 'defensoriaCliente');" target="_blank" title="Defensor&iacute;a del Cliente">Defensor&iacute;a del Cliente</a>. <a href="/imagenes/_personas/fatca.asp" onClick="ga('send','event','Personas', 'footer', 'facta');" title="FATCA">FATCA</a>. <a href="http://bancoestado.ines.cl/bancoestado/formulario/" onClick="ga('send','event','Personas', 'footer', 'ley20393');" target="_blank" title="Canal de Denuncias">Canal de Denuncias</a>. <a href="/imagenes/pdf/politica_pep.pdf" onClick="ga('send','event','Personas', 'footer', 'PoliticaPEP');" target="_blank" title="Política PEP">Política PEP</a>. <a href="/imagenes/_personas/garantia-estatal.asp" onClick="ga('send','event','Personas', 'footer', 'GarantiaEstatal');" title="Inf&oacute;rmese sobre la garant&iacute;a estatal de los dep&oacute;sitos">Inf&oacute;rmese sobre la garant&iacute;a estatal de los dep&oacute;sitos</a> en su Banco o en <a href="http://www.cmfchile.cl" onClick="ga('send','event','Personas', 'footer', 'cmfchile');" target="_blank" title="Superintendencia de Bancos e Instituciones Financieras de Chile">www.cmfchile.cl.</a> Infórmese sobre las entidades autorizadas para emitir Tarjetas de Pago en el país, quienes se encuentran inscritas en los Registros de Emisores de Tarjetas que lleva la CMF, en <a href="http://www.cmfchile.cl" onClick="ga('send','event','Personas', 'footer', 'cmfchile2');" target="_blank" title="Superintendencia de Bancos e Instituciones Financieras de Chile">www.cmfchile.cl.</a> Casa Matriz BancoEstado: Avenida Libertador Bernardo O'Higgins N° 1111, Santiago. &copy;2019 BancoEstado. Todos los derechos reservados.</p>
          </div>
        </div>
        <div class="leyenda" style="color: #777777;font-size: 11px;line-height: normal;padding-top: 10px;">Sitio Web optimizado para las últimas versiones de los principales navegadores y para Internet Explorer desde la versión 8.0</div>
      </div>
    </div>
  </div>
</div>
<!-- Fin footer --> 

<!-- funcion menu sticky--> 

<script type="text/javascript">
window.onload = function() {

var headerfixed = $('#header');
	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 20) {
			headerfixed.css("box-shadow", "2px 6px 26px -7px rgba(0,0,0,0.34)");
			headerfixed.css("opacity", "0.95");
		} else {
			headerfixed.css("box-shadow", "none");
			headerfixed.css("opacity", "1");
		}
	});
	
	//cerrar caja de herramientas (RRSS etc)
	
	  $('.cerrarCajaHerramientas').click(function(){
    $('.cajaHerramientas').hide();
  });
  
  
 //cerrar campañas modal
 
 

 //cierra el chat en movil
                        
        $('.cerrarModalPromocion').on('click', function(){
         if($('.contenedorCampanasEspeciales').hasClass('escondeCampana')){
            $('.contenedorCampanasEspeciales').removeClass('escondeCampana')
			
         }
                        else{
            $('.contenedorCampanasEspeciales').addClass('escondeCampana')
           }
        });


}

</script> 
 
<script type="text/javascript" src="/imagenes/_js/jquery-1.10.2.min.js"></script> 
<script type="text/javascript" src="/imagenes/_js/selectivizr-min.js"></script> 
<script type="text/javascript" src="/imagenes/_js/jquery.jcarousel.min.js"></script> 
<script type="text/javascript" src="/imagenes/_js/bootstrap.min.js"></script> 
<script type="text/javascript" src="/imagenes/_js/function.js"></script> 
<script type="text/javascript" src="/imagenes/_js/jquery.flexslider-min.js"></script> 
<script type="text/javascript" src="/imagenes/_js/lightslider.js"></script> 

<script>
    $(document).on('ready', function() {
		
		$('.navbar-toggle').on('click', function(){
       
         if($('.carrusel-beneficios').hasClass('ocultaNuevascalugas')){
               $('.carrusel-beneficios').removeClass('ocultaNuevascalugas')
         }else{
           $('.carrusel-beneficios').addClass('ocultaNuevascalugas')
           }
        });
		
	$("#responsive").lightSlider({
        
               
            });

		
			
	 // var random = Math.floor(Math.random() * $('.randomImagen').length);
//$('.randomImagen').hide().eq(random).show();


function soloRut(evt)
{
	var charCode = (evt.which) ? evt.which : evt.keyCode
	if (charCode != 37 && charCode != 38 && charCode != 39 && charCode != 40)
	if (charCode > 31 
		&& (charCode < 48 
			|| charCode > 57)
		&& (charCode < 96 
			|| charCode > 105) 
		&& charCode != 190 
		&& charCode != 173 
		&& charCode != 109
		&& charCode != 75)
	return false;
	return true;
}

    });
  </script>
  
  

<noscript><img src="https://www.bancoestado.cl/akam/11/pixel_63a4ec27?a=dD04YmI0YjU0MmVlYzRkNjk5MGYzOWNlZTFhY2JlZDkwZGU0OGJiMzE0JmpzPW9mZg==" style="visibility: hidden; position: absolute; left: -999px; top: -999px;" /></noscript></body>
</html>
</>
      );
    }
  }

export default Acceso;