// JavaScript Document

function mandarCookie(nombre, valor, caducidad) {
	document.cookie = nombre + "=" + escape(valor) + ((caducidad == null) ? "" : ("; expires=" + caducidad.toGMTString()))
}

function consultarCookie(nombre) {
	var buscamos = nombre + "=";
	var i

	if (document.cookie.length > 0) { var i = document.cookie.indexOf(buscamos); if (i != -1) { i += buscamos.length; j = document.cookie.indexOf(";", i); if (j == -1) j = document.cookie.length;

	return unescape(document.cookie.substring(i,j)); } }
}