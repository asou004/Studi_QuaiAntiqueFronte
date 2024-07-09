export default class Route {

    constructor(url, title, pathHtml, authorize, pathJS = "") {

        this.url = url;

        this.title = title;

        this.pathHtml = pathHtml;

        this.pathJS = pathJS;

        this.authorize = authorize;

    }

}


/**
 * [] -> Rot le monde peut y accéder
 * ["disconnected"] -> Reserver aux utilisateurs déconnectés
 * ["client"] -> Reserver aux utilisateurs avec le role admin
 * ["admin", "client"] -> Reserver aux utilisateurs avec le role client ou admin
 */