"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Navigator = (function () {
    function Navigator() {
        this.params = [];
        this.path = [];
    }
    Navigator.prototype.route = function (path, params) {
        var _this = this;
        var paths = path.split('/'), currentLength = this.path.length;
        if (!currentLength) {
            paths.forEach(function (path) {
                _this.push(path, params);
            });
        }
        else {
            if (currentLength > paths.length) {
                this.popAtIndex(paths.length);
            }
            paths.forEach(function (path, index) {
                var route = _this.path[index];
                if (!route) {
                    _this.push(path, params);
                }
                else if (route.id !== path) {
                    _this.popAtIndex(index);
                    _this.push(path, params);
                }
            });
        }
    };
    Navigator.prototype.registerRoutes = function (routes) {
        this.routes = routes;
    };
    Navigator.prototype.getParams = function () {
        return this.params[this.params.length - 1];
    };
    Navigator.prototype.push = function (routeId, params) {
        var route = this.findRoute(routeId);
        if (route) {
            this.succession.history.push(route.component);
            this.params.push(params);
            this.path.push(route);
        }
    };
    Navigator.prototype.findRoute = function (routeId) {
        var routes = !this.path.length ?
            this.routes : this.path[this.path.length - 1].children;
        if (routes) {
            return routes.find(function (route) { return route.id === routeId; });
        }
    };
    Navigator.prototype.popAtIndex = function (index) {
        var currentIndex = this.path.length - 1;
        while (index <= currentIndex && currentIndex !== -1) {
            currentIndex--;
            this.succession.history.pop();
            this.path.pop();
            this.params.pop();
            this.popAtIndex(index);
        }
    };
    return Navigator;
}());
exports.Navigator = Navigator;
exports.defaultNavigator = new Navigator();
